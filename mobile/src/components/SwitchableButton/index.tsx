import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { useTimingTransition } from 'react-native-redash';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

import theme from '../../styles';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  active: boolean;
  buttonRef: React.Ref<TouchableOpacity>;
  children: React.ReactNode;
  handleSubmit: () => Promise<void>;
}

const SwitchableButton: React.FC<Props> = ({
  active,
  buttonRef,
  handleSubmit,
  children
}) => {
  const transition = useTimingTransition(active, { duration: 500 });

  const opacity = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const fontSize = interpolate(transition, {
    inputRange: [0, 0.8, 1],
    outputRange: [
      theme.units.fontSize.bigHeader,
      theme.units.fontSize.bigHeader + 0.5,
      theme.units.fontSize.bigHeader
    ],
    extrapolate: Extrapolate.CLAMP
  });

  return (
    <Animated.View style={[styles.buttonOverlay]}>
      <TouchableOpacity
        ref={buttonRef}
        onPress={handleSubmit}
        style={styles.button}
      >
        <Animated.Text style={[styles.buttonText, { fontSize }]}>
          {children}
        </Animated.Text>
      </TouchableOpacity>

      <Animated.View style={[styles.disabledButton, { opacity }]}>
        <Animated.Text
          style={[styles.disabledButtonText, { opacity, fontSize }]}
        >
          {children}
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

export default SwitchableButton;
