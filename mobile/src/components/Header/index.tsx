import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { Container, BackArrowButton, Title, EmptySpace } from './styles';

import { light } from '../../styles/theme'; // TODO: Implement custom theme

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackArrowButton onPress={navigation.goBack}>
        <Feather
          name="arrow-left"
          size={24}
          color={light.colors.secondaryLight}
        />
      </BackArrowButton>

      {title ? <Title>{title}</Title> : <EmptySpace />}

      <EmptySpace />
    </Container>
  );
};

export default Header;
