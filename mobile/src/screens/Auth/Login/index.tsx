import React, { useContext, useEffect, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import DeadZone from '../../../components/DeadZone';
import SwitchableButton from '../../../components/SwitchableButton';
import AuthContext from '../../../context/auth';
import useOpenKeyboard from '../../../hooks/useOpenKeyboard';
import api from '../../../services/api';
import { validateEmail, validatePassword } from '../../../utils/validations';

import styles from './styles';

const Login: React.FC = () => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);

  const buttonRef = useRef<TouchableOpacity>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [buttonEnabled, setButtonEnabled] = useState(false);

  const navigation = useNavigation();

  const { SignIn } = useContext(AuthContext);

  const keyboardOpen = useOpenKeyboard();

  function checkButtonEnable() {
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    if (emailValid && passwordValid) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }

  async function handleSubmitForm() {
    const response = await api
      .post('/api/user/login', {
        email,
        password
      })
      .catch(() => {
        alert('Something went wrong with the authentication...');
        input1Ref.current?.clear();
        input2Ref.current?.clear();
        input1Ref.current?.focus();
      });

    if (response) {
      const jwt = response.data.token;

      await AsyncStorage.setItem('jwt', jwt);
      SignIn();
    }
  }

  function handleForgotPasswordNavigation() {
    navigation.navigate('ForgotPasswordForm');
  }

  useEffect(() => {
    checkButtonEnable();
  }, [email, password]);

  return (
    <View style={styles.container}>
      {!keyboardOpen && <DeadZone />}
      <View style={styles.mainContainer}>
        <View style={styles.firstRow}>
          <Text style={styles.loginHeader}>Login</Text>
          <Text style={styles.createAccountRedirect}>Create an account</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            ref={input1Ref}
            placeholder="E-mail"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            textContentType="emailAddress"
            onChangeText={setEmail}
            onSubmitEditing={() => input2Ref.current?.focus()}
            value={email}
          ></TextInput>
          <TextInput
            style={[styles.input, styles.secondInput]}
            ref={input2Ref}
            placeholder="Password"
            autoCompleteType="password"
            autoCapitalize="none"
            secureTextEntry={true}
            returnKeyType="done"
            textContentType="password"
            onChangeText={setPassword}
            onSubmitEditing={handleSubmitForm}
            value={password}
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={handleForgotPasswordNavigation}
        >
          <Text style={styles.forgotPassword}>I forgot my password</Text>
        </TouchableOpacity>

        <SwitchableButton
          active={buttonEnabled}
          buttonRef={buttonRef}
          handleSubmit={handleSubmitForm}
        >
          login
        </SwitchableButton>
      </View>
    </View>
  );
};

export default Login;
