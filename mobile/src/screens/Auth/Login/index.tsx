import React, { useRef, useState, useEffect, useContext } from 'react';
import { Image, TouchableOpacity, TextInput, Keyboard } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import AuthContext from '../../../context/auth';

import api from '../../../services/api';

import {
  Container,
  DeadZone,
  LogoContainer,
  Slogan,
  MainContainer,
  FirstRow,
  LoginHeader,
  CreateAccountRedirect,
  InputContainer,
  Input,
  SecondInput,
  ForgotPasswordContainer,
  ForgotPassword,
  Button,
  ButtonText
} from './styles';

const Login: React.FC = () => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);

  const buttonRef = useRef<TouchableOpacity>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [keyboardOpen, setKeyboardOpen] = useState(false);

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
    const response = await api.post('/api/user/login', {
      email,
      password
    });

    if (response) {
      const jwt = response.data.token;

      await AsyncStorage.setItem('jwt', jwt);
      SignIn();
    }
  }

  useEffect(() => {
    checkButtonEnable();
  }, [email, password]);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });

    return () => {
      Keyboard.removeListener('keyboardDidShow', () => {
        setKeyboardOpen(true);
      });
      Keyboard.removeListener('keyboardDidHide', () => {
        setKeyboardOpen(false);
      });
    };
  }, []);

  return (
    <Container>
      {!keyboardOpen && (
        <DeadZone>
          <LogoContainer>
            <Image source={require('../../../assets/logo.png')} />
            <Slogan>Saving is easy!</Slogan>
          </LogoContainer>
        </DeadZone>
      )}
      <MainContainer>
        <FirstRow>
          <LoginHeader>Login</LoginHeader>
          <CreateAccountRedirect>Create an account</CreateAccountRedirect>
        </FirstRow>

        <InputContainer>
          <Input
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
          ></Input>
          <SecondInput
            ref={input2Ref}
            placeholder="Password"
            autoCompleteType="password"
            autoCapitalize="none"
            secureTextEntry={true}
            returnKeyType="done"
            textContentType="password"
            onChange={() => setKeyboardOpen(true)}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmitForm}
            value={password}
          ></SecondInput>
        </InputContainer>

        <ForgotPasswordContainer>
          <ForgotPassword>I forgot my password</ForgotPassword>
        </ForgotPasswordContainer>

        <Button
          active={buttonEnabled ? true : false}
          ref={buttonRef}
          onPress={handleSubmitForm}
        >
          <ButtonText active={buttonEnabled ? false : true}>Login</ButtonText>
        </Button>
      </MainContainer>
    </Container>
  );
};

export default Login;
