import React, { useEffect, useState, useRef } from 'react';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../../../../components/Header';
import DeadZone from '../../../../components/DeadZone';

import useOpenKeyboard from '../../../../hooks/useOpenKeyboard';

import {
  Container,
  Content,
  HeaderText,
  Paragraph,
  Input,
  Button,
  ButtonText
} from './styles';

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const buttonRef = useRef<TouchableOpacity>(null);

  const keyboardOpen = useOpenKeyboard();

  function validateEmail(email: string): Boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email.toLowerCase());
  }

  function checkButtonEnable() {
    const emailValid = validateEmail(email);

    emailValid ? setButtonEnabled(true) : setButtonEnabled(false);
  }

  function handleSubmit() {}

  useEffect(() => {
    checkButtonEnable();
  }, [email]);

  return (
    <Container>
      {keyboardOpen ? (
        <Header title="Forgot My Password" />
      ) : (
        <>
          <Header />
          <DeadZone />
        </>
      )}
      <Content>
        <HeaderText>forgot your password?</HeaderText>
        <Paragraph>
          No problem, we’ll handle it, just let us know the email you used to
          create your account.
        </Paragraph>

        <Input
          ref={inputRef}
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
        ></Input>

        <Button
          active={buttonEnabled ? true : false}
          ref={buttonRef}
          onPress={handleSubmit}
        >
          <ButtonText active={buttonEnabled ? false : true}>
            send email
          </ButtonText>
        </Button>
      </Content>
    </Container>
  );
};

export default Form;
