import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

import EditableInput from '../../components/EditableInput';

import useOpenKeyboard from '../../hooks/useOpenKeyboard';

import {
  Container,
  UserInformationContainer,
  Username,
  Occupation,
  PersonalInfoContainer,
  HeaderText,
  Spacer
} from './styles';

import { light } from '../../styles/theme';

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('');

  const keyboardOpen = useOpenKeyboard();

  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true
  });

  const scale: any = interpolate(y, {
    inputRange: [0, light.constants.DEADZONE_HEIGHT],
    outputRange: [1, 0],
    extrapolateRight: Extrapolate.CLAMP
  });

  const translate: any = interpolate(y, {
    inputRange: [0, light.constants.DEADZONE_HEIGHT],
    outputRange: [0, -light.constants.DEADZONE_HEIGHT / 2],
    extrapolateRight: Extrapolate.CLAMP
  });

  return (
    <Container>
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        style={{
          flex: 1,
          width: '100%'
        }}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {!keyboardOpen && (
          <Animated.View
            style={{
              width: '100%',
              backgroundColor: light.colors.primary,

              paddingBottom: 36,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Animated.Image
              source={{ uri: 'http://www.github.com/tomas050302.png' }}
              style={{
                opacity: scale,
                transform: [{ scale }],
                height: 120,
                width: 120,
                borderRadius: 120 / 2
              }}
            />
            <UserInformationContainer>
              <Animated.Text
                style={{
                  opacity: scale,
                  transform: [{ scale, translateY: translate }]
                }}
              >
                Tomás Lopes
              </Animated.Text>
              <Animated.Text
                style={{
                  opacity: scale,
                  transform: [{ scale, translateY: translate }]
                }}
              >
                Student
              </Animated.Text>
            </UserInformationContainer>
          </Animated.View>
        )}

        <View
          style={{
            width: '80%',
            top: -20,
            backgroundColor: '#fff',
            borderRadius: 8,

            paddingHorizontal: 16,
            paddingVertical: 40
          }}
        >
          <HeaderText>Personal Info</HeaderText>

          <Spacer />

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
    </Container>
  );
};

export default Profile;
