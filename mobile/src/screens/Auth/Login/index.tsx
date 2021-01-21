import React, { useRef, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

const Login: React.FC = () => {
  const input1Ref = useRef<TextInput>();
  const input2Ref = useRef<TextInput>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [buttonEnabled, setButtonEnabled] = useState(false);

  function checkButtonEnable() {
    if (email !== '' && password !== '') {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }

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
            onChangeText={text => {
              setEmail(() => text);
              checkButtonEnable();
            }}
            onChange={checkButtonEnable}
            onSubmitEditing={() => input2Ref.current.focus()}
          ></TextInput>
          <TextInput
            ref={input2Ref}
            style={[styles.input, styles.bottomInput]}
            placeholder="Password"
            autoCompleteType="password"
            secureTextEntry={true}
            returnKeyType="done"
            textContentType="password"
            onChangeText={text => {
              setPassword(() => text);
              checkButtonEnable();
            }}
            onChange={checkButtonEnable}
            onSubmitEditing={() => console.log('Next')}
            /* TODO: Implement next step here */
          ></TextInput>
        </View>

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>I forgot my password</Text>
        </View>

        <TouchableOpacity
          style={buttonEnabled ? styles.buttonDisabled : styles.button}
          onPress={() => console.log(email, password)}
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
