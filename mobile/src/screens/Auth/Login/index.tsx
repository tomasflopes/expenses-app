import React, { useRef, useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import AuthContext from '../../../context/auth';

import api from '../../../services/api';

import styles from './styles';

const Login: React.FC = () => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);

  const buttonRef = useRef<TouchableOpacity>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [buttonEnabled, setButtonEnabled] = useState(false);

  const { SignIn } = useContext(AuthContext);

  function validateEmail(email: string): Boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email.toLowerCase());
  }

  function validatePassword(password: string): Boolean {
    const minLength = 8;

    return password.length >= minLength;
  }

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
    const response = await api.post('/api/login', {
      email,
      password
    });

    if (response) {
      const jwt = response.data.token;

      await AsyncStorage.setItem('jwt', jwt);
      SignIn();
    }
    console.log(email, password);
  }

  useEffect(() => {
    checkButtonEnable();
  }, [email, password]);

  return (
    <View style={styles.container}>
      <View style={styles.deadZone}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/logo.png')} />
          <Text style={styles.slogan}>Saving is easy!</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.firstRow}>
          <Text style={styles.loginHeader}>Login</Text>
          <Text style={styles.createAccountRedirect}>Create an account</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            ref={input1Ref}
            style={styles.input}
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
            ref={input2Ref}
            style={[styles.input, styles.bottomInput]}
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

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>I forgot my password</Text>
        </View>

        <TouchableOpacity
          style={buttonEnabled ? styles.buttonDisabled : styles.button}
          ref={buttonRef}
          onPress={handleSubmitForm}
        >
          <Text
            style={
              buttonEnabled ? styles.buttonText : styles.buttonTextDisabled
            }
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
