import React from 'react';

import { Image } from 'react-native';

import { Container, LogoContainer, Slogan } from './styles';

const DeadZone: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Image source={require('../../assets/logo.png')} />
        <Slogan>Saving is easy!</Slogan>
      </LogoContainer>
    </Container>
  );
};

export default DeadZone;
