import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

const Login: React.FC = () => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);

  const buttonRef = useRef<TouchableOpacity>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [buttonEnabled, setButtonEnabled] = useState(false);
  checkButtonEnable();

  function validateEmail(email: string): Boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  }

  function validatePassword(password: string): Boolean {
    const minLength = 8;

    return password.length >= minLength - 1;
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

  function submitForm() {
    // TODO Save JWT to Local storage
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
            onSubmitEditing={submitForm}
            value={password}
          ></TextInput>
        </View>

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>I forgot my password</Text>
        </View>

        <TouchableOpacity
          style={buttonEnabled ? styles.buttonDisabled : styles.button}
          ref={buttonRef}
          onPress={submitForm}
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
