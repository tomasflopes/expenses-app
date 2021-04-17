import React from 'react';

import { Text, View, TouchableOpacity, Alert } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

interface Props {
  confirmMessage?: boolean;
  title?: string;
}

const Header: React.FC<Props> = ({ confirmMessage, title }) => {
  const navigation = useNavigation();

  function handleGoBack() {
    if (confirmMessage) {
      Alert.alert(
        'Go Back?',
        'By going back you will lose all of your changes!',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          { text: 'OK', onPress: () => navigation.goBack() }
        ],
        { cancelable: true }
      );
    } else {
      navigation.goBack();
    }
  }

  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.3)', 'transparent']}
      locations={[0.05, 1]}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backArrowButton} onPress={handleGoBack}>
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
