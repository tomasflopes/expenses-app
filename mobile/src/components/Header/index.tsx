import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

import { light } from '../../styles/theme'; // TODO: Implement custom theme

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather
          name="arrow-left"
          size={24}
          color={light.colors.secondaryLight}
        />
      </BorderlessButton>

      <Title>{title}</Title>

      <View />
    </Container>
  );
};

export default Header;
