import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import CustomAlert from '../../components/CustomAlert';
import EditableInput from '../../components/EditableInput';
import Header from '../../components/Header';
import FinanceAreasInputs from '../../components/FinanceAreasInputs';
import SwitchableButton from '../../components/SwitchableButton';

import api from '../../services/api';
import useOpenKeyboard from '../../hooks/useOpenKeyboard';
import generateHeaders from '../../utils/generateAuthHeader';
import IAlert from '../../types/IAlert';

import theme from '../../styles';
import styles from './styles';

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState<string | undefined>('');
  const [birth, setBirth] = useState<string | undefined>('');
  const [phone, setPhone] = useState<string | undefined>('');
  const [defaultCurrency, setDefaultCurrency] = useState<string | undefined>(
    ''
  );

  const [isDataFetched, setIsDataFetched] = useState(false);

  const [newArea, setNewArea] = useState('');
  const [areas, setAreas] = useState<string[]>([]);
  const [areasHistory, setAreasHistory] = useState<string[][]>([[]]);

  const [editing, setEditing] = useState(false);
  const [areaEdited, setAreaEdited] = useState(false);

  const [alertType, setAlertType] = useState<IAlert>({
    type: ''
  });

  const keyboardOpen = useOpenKeyboard();

  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true
  });

  const scale: any = interpolate(y, {
    inputRange: [0, theme.constants.DEADZONE_HEIGHT],
    outputRange: [1, 0],
    extrapolateRight: Extrapolate.CLAMP
  });

  async function getUserInfo() {
    const headers = await generateHeaders();
    const response = await api.get('/user', headers);

    const { data } = response;

    setFirstName(data.firstName);
    setLastName(data.lastName);
    setOccupation(data.occupation);
    setBirth(data.birth?.toString());
    setPhone(data.phone);
    setDefaultCurrency(data.financeSettings.defaultCurrency);

    setIsDataFetched(true);
  }

  async function handleEditProfile() {
    if (editing) {
      const headers = await generateHeaders();

      const data = {
        firstName,
        lastName,
        occupation,
        birth,
        phone,
        financeSettings: { defaultCurrency, areas }
      };

      const response = await api.put('/user', data, headers);

      if (!response) {
        setAlertType({ type: 'error' });
      } else {
        setAlertType({
          type: 'success',
          customMessage: 'User updated with success!'
        });
      }
    }

    setEditing(state => !state);
  }

  async function handleAddNewArea() {
    if (newArea === '') {
      setAlertType({
        type: 'error',
        customMessage: 'The new area must have a name.'
      });
      return;
    }

    const headers = await generateHeaders();
    await api
      .post(
        '/areas',
        {
          area: newArea
        },
        headers
      )
      .catch(err => {
        console.log(err);
        setAlertType({ type: 'warning' });
      });

    setAlertType({ type: 'success', customMessage: 'Area added with success' });

    setNewArea('');
  }

  async function getUserAreas() {
    const headers = await generateHeaders();

    const { data } = await api.get('/areas', headers);

    setAreasHistory([data]);
  }

  async function removeArea(index: number) {
    const tempAreas = areas.filter(
      (area, areaIndex) => areaIndex !== index && area
    );

    setAreasHistory([...areasHistory, tempAreas]); // Remove area visually

    setAlertType({ type: 'undo' });
  }

  function undoRemoveArea() {
    const undoAreasHistoryArray = areasHistory.slice(0, -1);

    setAreasHistory(undoAreasHistoryArray);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (newArea === '') {
      getUserAreas();
      setAreaEdited(false);
    }
  }, [newArea, areaEdited]);

  useEffect(() => {
    setAreas(areasHistory[areasHistory.length - 1]);
  }, [areasHistory]);

  return (
    <View style={styles.container}>
      <Header confirmMessage={editing} title="Profile" />

      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        style={styles.mainScroll}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {!keyboardOpen && (
          <View style={styles.scrollContent}>
            <ShimmerPlaceholder visible={isDataFetched} style={styles.avatar}>
              <Animated.Image
                source={{ uri: 'http://www.github.com/tomas050302.png' }}
                style={[
                  styles.avatar,
                  { opacity: scale, transform: [{ scale }] }
                ]}
              />
            </ShimmerPlaceholder>
            <View style={styles.userInformationContainer}>
              <ShimmerPlaceholder visible={isDataFetched}>
                <Animated.Text
                  style={[
                    styles.username,
                    {
                      opacity: scale,
                      transform: [{ scale }]
                    }
                  ]}
                >
                  {firstName} {lastName}
                </Animated.Text>
              </ShimmerPlaceholder>

              <ShimmerPlaceholder visible={isDataFetched}>
                <Animated.Text
                  style={[
                    styles.occupation,
                    {
                      opacity: scale,
                      transform: [{ scale }]
                    }
                  ]}
                >
                  {occupation}
                </Animated.Text>
              </ShimmerPlaceholder>
            </View>
          </View>
        )}

        <View style={styles.personalInfoContainer}>
          <Text style={styles.headerText}>Personal Info</Text>
          <EditableInput
            editable={editing}
            isDataFetched={isDataFetched}
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />

          <EditableInput
            editable={editing}
            isDataFetched={isDataFetched}
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
          />

          <EditableInput
            editable={editing}
            isDataFetched={isDataFetched}
            placeholder="Occupation"
            onChangeText={setOccupation}
            value={occupation}
          />

          <EditableInput
            editable={editing}
            isDataFetched={isDataFetched}
            placeholder="Birth"
            onChangeText={setBirth}
            value={birth}
          />

          <EditableInput
            editable={editing}
            isDataFetched={isDataFetched}
            placeholder="Phone"
            onChangeText={setPhone}
            value={phone}
          />

          <Text style={styles.headerText}>Finance Settings</Text>
          <View style={styles.spacer} />
          <EditableInput
            editable={editing}
            isDataFetched={isDataFetched}
            placeholder="Default Currency"
            onChangeText={setDefaultCurrency}
            value={defaultCurrency}
          />

          <FinanceAreasInputs
            addNewArea={handleAddNewArea}
            areas={areas}
            editable={editing}
            newArea={newArea}
            removeArea={removeArea}
            setNewArea={setNewArea}
            setAreaEdited={setAreaEdited}
          />

          <SwitchableButton
            active={editing}
            activeColor="confirm"
            activeTextColor="secondaryLight"
            disabledTextColor="secondaryLight"
            disabledColor="primary"
            handleSubmit={handleEditProfile}
          >
            {editing ? 'confirm' : 'edit information'}
          </SwitchableButton>
        </View>
      </Animated.ScrollView>
      <CustomAlert props={alertType} undoFunction={undoRemoveArea} />
    </View>
  );
};

export default Profile;
