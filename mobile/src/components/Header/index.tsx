import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import theme from '../../styles';

import styles from './styles';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.3)', 'transparent']}
      locations={[0.05, 1]}
      style={styles.container}
    >
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
    </LinearGradient>
  );
};

export default Header;
