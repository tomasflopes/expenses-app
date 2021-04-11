import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CustomAlert from '../../components/CustomAlert';
import DropdownInput from '../../components/DropdownInput';
import Input from '../../components/Input';
import SwitchableButton from '../../components/SwitchableButton';

import api from '../../services/api';
import IAlert from '../../types/IAlert';
import generateHeaders from '../../utils/generateAuthHeader';

import styles from './styles';

const CreateExpense: React.FC = () => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);

  const [alertType, setAlertType] = useState<IAlert>({ type: '' });

  const [userAreas, setUserAreas] = useState([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const [type, setType] = useState('');
  const [area, setArea] = useState('');

  const [buttonEnabled, setButtonEnabled] = useState(false);

  const navigation = useNavigation();

  async function getUserAreas() {
    const headers = await generateHeaders();

    const { data } = await api.get('/areas', headers);

    if (!data)
      setAlertType({
        type: 'error',
        customMessage: 'An error occurred adding your expense.'
      });

    setUserAreas(data);
  }

  async function handleSubmitForm() {
    const data = {
      name,
      description,
      value: parseFloat(value),
      type,
      area
    };

    console.log(data);

    const headers = await generateHeaders();

    const response = await api.post('/expense', data, headers);

    if (!response)
      setAlertType({
        type: 'error',
        customMessage: 'An error occurred adding your expense.'
      });

    navigation.navigate('Home');
  }

  useEffect(() => {
    if (name && description && value && type && area) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [name, description, value, type, area]);

  useEffect(() => {
    getUserAreas();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Expense Details</Text>
      <View style={styles.formContainer}>
        <Input
          placeholder="Name"
          ref={input1Ref}
          onSubmitEditing={() => input2Ref.current?.focus()}
          returnKeyType="next"
          setValue={setName}
          value={name}
          style={styles.input}
        />
        <Input
          placeholder="Description"
          expanded
          ref={input2Ref}
          onSubmitEditing={() => input3Ref.current?.focus()}
          returnKeyType="next"
          setValue={setDescription}
          value={description}
          style={styles.input}
        />
        <Input
          placeholder="Value"
          ref={input3Ref}
          keyboardType="numeric"
          setValue={setValue}
          returnKeyType="next"
          value={value}
          style={styles.input}
        >
          <Text style={styles.currencyText}>€</Text>
        </Input>
        <DropdownInput
          data={['Expense', 'Income']}
          placeholder="Type"
          setSelected={setType}
          value={type}
          style={styles.input}
        />
        <DropdownInput
          data={userAreas}
          placeholder="Area"
          setSelected={setArea}
          value={area}
        />
      </View>

      <SwitchableButton
        active={buttonEnabled}
        handleSubmit={handleSubmitForm}
        activeColor="confirm"
        disabledColor="secondary"
        activeTextColor="secondaryLight"
        disabledTextColor="secondaryDark"
        style={styles.confirmButton}
      >
        save
      </SwitchableButton>

      <CustomAlert props={alertType} />
    </ScrollView>
  );
};

export default CreateExpense;
