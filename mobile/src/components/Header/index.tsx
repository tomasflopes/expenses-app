import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { light } from '../../styles/colors'; // TODO: Implement custom theme

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backArrowButton}
        onPress={navigation.goBack}
      >
        <Feather name="arrow-left" style={styles.arrowIcon} />
      </TouchableOpacity>

      {title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <View style={styles.emptySpace} />
      )}

      <View style={styles.emptySpace} />
    </View>
  );
};

export default Header;
