import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

import EditableInput from '../../components/EditableInput';

import { LinearGradient } from 'expo-linear-gradient';

import useOpenKeyboard from '../../hooks/useOpenKeyboard';

import styles from './styles';

import theme from '../../styles';

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('');

  const keyboardOpen = useOpenKeyboard();

  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true
  });

  const scale: any = interpolate(y, {
    inputRange: [0, theme.constants.DEADZONE_HEIGHT],
    outputRange: [1, 0],
    extrapolateRight: Extrapolate.CLAMP
  });

  const translate: any = interpolate(y, {
    inputRange: [0, theme.constants.DEADZONE_HEIGHT],
    outputRange: [0, -theme.constants.DEADZONE_HEIGHT / 2],
    extrapolateRight: Extrapolate.CLAMP
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        style={styles.mainScroll}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {!keyboardOpen && (
          <View style={styles.scrollContent}>
            <Animated.Image
              source={{ uri: 'http://www.github.com/tomas050302.png' }}
              style={[
                styles.avatar,
                { opacity: scale, transform: [{ scale }] }
              ]}
            />
            <View style={styles.userInformationContainer}>
              <Animated.Text
                style={[
                  styles.username,
                  {
                    opacity: scale,
                    transform: [{ scale, translateY: translate }]
                  }
                ]}
              >
                Tomás Lopes
              </Animated.Text>
              <Animated.Text
                style={[
                  styles.occupation,
                  {
                    opacity: scale,
                    transform: [{ scale, translateY: translate }]
                  }
                ]}
              >
                Student
              </Animated.Text>
            </View>
          </View>
        )}

        <View style={styles.personalInfoContainer}>
          <Text style={styles.headerText}>Personal Info</Text>

          <View style={styles.spacer} />

          <EditableInput
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
          <EditableInput
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
          <EditableInput
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
          <EditableInput
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
          <EditableInput
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Profile;
