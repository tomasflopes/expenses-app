import React, { useState } from 'react';

import EditableInput from '../../components/EditableInput';
import Header from '../../components/Header';

import useOpenKeyboard from '../../hooks/useOpenKeyboard';

import {
  Container,
  DeadZone,
  Avatar,
  UserInformationContainer,
  Username,
  Occupation,
  PersonalInfoContainer,
  HeaderText,
  InputContainer,
  Label
} from './styles';

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('');

  const keyboardOpen = useOpenKeyboard();

  return (
    <Container>
      {!keyboardOpen && (
        <DeadZone>
          <Avatar source={{ uri: 'http://www.github.com/tomas050302.png' }} />
          <UserInformationContainer>
            <Username>Tomás Lopes</Username>
            <Occupation>Student</Occupation>
          </UserInformationContainer>
        </DeadZone>
      )}
      <PersonalInfoContainer>
        <HeaderText>Personal Info</HeaderText>

        <InputContainer>
          <Label>First Name</Label>
          <EditableInput
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
        </InputContainer>
      </PersonalInfoContainer>
    </Container>
  );
};

export default Profile;
