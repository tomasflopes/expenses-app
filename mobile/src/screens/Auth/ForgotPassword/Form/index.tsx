import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import DeadZone from '../../../../components/DeadZone';
import Header from '../../../../components/Header';
import SwitchableButton from '../../../../components/SwitchableButton';

import useOpenKeyboard from '../../../../hooks/useOpenKeyboard';
import { validateEmail } from '../../../../utils/validations';

import styles from './styles';

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const buttonRef = useRef<TouchableOpacity>(null);

  const keyboardOpen = useOpenKeyboard();

  function checkButtonEnable() {
    const emailValid = validateEmail(email);

    emailValid ? setButtonEnabled(true) : setButtonEnabled(false);
  }

  async function handleSubmit() {
    return await Promise.resolve();
  }

  useEffect(() => {
    checkButtonEnable();
  }, [email]);

  return (
    <View style={styles.container}>
      {keyboardOpen ? (
        <Header title="Forgot My Password" />
      ) : (
        <>
          <Header />
          <DeadZone />
        </>
      )}
      <View style={styles.content}>
        <Text style={styles.headerText}>forgot your password?</Text>
        <Text style={styles.paragraph}>
          No problem, we’ll handle it, just let us know the email you used to
          create your account.
        </Text>

        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="E-mail"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          textContentType="emailAddress"
          onChangeText={setEmail}
          onSubmitEditing={handleSubmit}
          value={email}
        ></TextInput>

        <SwitchableButton
          active={buttonEnabled}
          buttonRef={buttonRef}
          handleSubmit={handleSubmit}
        >
          send email
        </SwitchableButton>
      </View>
    </View>
  );
};

export default Form;
