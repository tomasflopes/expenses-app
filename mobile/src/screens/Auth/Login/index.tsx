import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInputProps,
  TextInput
} from 'react-native';

import styles from './styles';

const Login: React.FC = () => {
  const input1Ref = useRef<TextInputProps>(null);
  const input2Ref = useRef<TextInputProps>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [buttonEnabled, setButtonEnabled] = useState(false);
  checkButtonEnable();

  function checkButtonEnable() {
    if (email !== '' && password !== '') {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }

  function submitForm() {
    // TODO API call to login
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
