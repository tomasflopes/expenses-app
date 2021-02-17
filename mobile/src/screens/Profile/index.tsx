import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

import EditableInput from '../../components/EditableInput';

import useOpenKeyboard from '../../hooks/useOpenKeyboard';

import styles from './styles';

import theme from '../../styles';
import api from '../../services/api';
import generateHeaders from '../../utils/generateAuthHeader';
import IUser from '../../types/IUser';
import FinanceAreasInputs from '../../components/FinanceAreasInputs';
import SwitchableButton from '../../components/SwitchableButton';

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState<string | undefined>('');
  const [birth, setBirth] = useState<string | undefined>('');
  const [phone, setPhone] = useState<string | undefined>('');
  const [defaultCurrency, setDefaultCurrency] = useState<string | undefined>(
    ''
  );

  const [editing, setEditing] = useState(false);

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

  const translate = interpolate(y, {
    inputRange: [0, theme.constants.DEADZONE_HEIGHT],
    outputRange: [0, -theme.constants.DEADZONE_HEIGHT / 2],
    extrapolateRight: Extrapolate.CLAMP
  });

  async function getUserInfo() {
    const headers = await generateHeaders();
    const response = await api.get('/user', headers);

    const data: IUser = response.data;

    setFirstName(data.firstName);
    setLastName(data.lastName);
    setOccupation(data.occupation);
    setBirth(data.birth?.toString());
    setPhone(data.phone);
    setDefaultCurrency(data.financeSettings.defaultCurrency);
  }

  function handleEditProfile() {
    setEditing(state => !state);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View style={styles.container}>
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
            <Animated.Image
              source={{ uri: 'http://www.github.com/tomas050302.png' }}
              style={[
                styles.avatar,
                { opacity: scale, transform: [{ scale }] }
              ]}
            />
            <View style={styles.userInformationContainer}>
              <Animated.Text
                style={[
                  styles.username,
                  {
                    opacity: scale,
                    transform: [{ scale, translateY: translate }]
                  }
                ]}
              >
                {firstName} {lastName}
              </Animated.Text>
              <Animated.Text
                style={[
                  styles.occupation,
                  {
                    opacity: scale,
                    transform: [{ scale, translateY: translate }]
                  }
                ]}
              >
                {occupation}
              </Animated.Text>
            </View>
          </View>
        )}

        <View style={styles.personalInfoContainer}>
          <Text style={styles.headerText}>Personal Info</Text>

          <View style={styles.spacer} />

          <EditableInput
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
          <EditableInput
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
          />
          <EditableInput
            placeholder="Occupation"
            onChangeText={setOccupation}
            value={occupation}
          />
          <EditableInput
            placeholder="Birth"
            onChangeText={setBirth}
            value={birth}
          />
          <EditableInput
            placeholder="Phone"
            onChangeText={setPhone}
            value={phone}
          />

          <Text style={styles.headerText}>Finance Settings</Text>

          <View style={styles.spacer} />

          <EditableInput
            placeholder="Default Currency"
            onChangeText={setDefaultCurrency}
            value={defaultCurrency}
          />

          <FinanceAreasInputs />

          {editing ? (
            <TouchableOpacity
              onPress={handleEditProfile}
              style={[styles.button, styles.saveButton]}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleEditProfile} style={styles.button}>
              <Animated.Text style={[styles.buttonText]}>
                edit information
              </Animated.Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Profile;
