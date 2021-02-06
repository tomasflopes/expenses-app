import React from 'react';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const DeadZone: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.slogan}>Saving is easy!</Text>
      </View>
    </View>
  );
};

export default DeadZone;
