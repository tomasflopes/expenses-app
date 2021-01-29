import React from 'react';

import { Text } from 'react-native';

import {
  Container,
  DeadZone,
  Avatar,
  UserInformationContainer,
  Username,
  Occupation,
  PersonalInfoContainer,
  Header,
  InputContainer,
  Label,
  Input
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <DeadZone>
        <Avatar
          imageStyle={{ borderRadius: 120 / 2 }}
          source={{ uri: 'http://www.github.com/tomas050302.png' }}
        />
        <UserInformationContainer>
          <Username>Tomás Lopes</Username>
          <Occupation>Student</Occupation>
        </UserInformationContainer>

        <PersonalInfoContainer>
          <Header>Personal Info</Header>

          <InputContainer>
            <Label>First Name</Label>
            <Input value={'Tomás'} />
          </InputContainer>
        </PersonalInfoContainer>
      </DeadZone>
    </Container>
  );
};

export default Profile;
