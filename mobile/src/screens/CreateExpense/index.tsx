import React, { forwardRef, useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TextInputProps,
  View
} from 'react-native';

import DropdownInput from '../../components/DropdownInput';
import SwitchableButton from '../../components/SwitchableButton';

import Input from '../../components/Input';

import styles from './styles';

const CreateExpense: React.FC = () => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const [type, setType] = useState('');
  const [area, setArea] = useState('');

  const [buttonEnabled, setButtonEnabled] = useState(false);

  function handleSubmitForm() {
    const data = {
      name,
      description,
      value: parseFloat(value),
      type,
      area
    };

    console.log(data);
  }

  useEffect(() => {
    if (name && description && value && type && area) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [name, description, value, type, area]);

  // TODO: Parse value to integer before submit

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
        />
        <DropdownInput
          data={['Expense', 'Income']}
          placeholder="Type"
          setSelected={setType}
          value={type}
          style={styles.input}
        />
        <DropdownInput
          data={['Job', 'Food', 'Stuff']}
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
    </ScrollView>
  );
};

export default CreateExpense;
