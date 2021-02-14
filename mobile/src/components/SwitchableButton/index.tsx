import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle
} from 'react-native';

import { useTimingTransition } from 'react-native-redash';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

import theme from '../../styles';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  active: boolean;
  disabledColor: keyof typeof theme.colors;
  activeColor: keyof typeof theme.colors;
  disabledTextColor: keyof typeof theme.colors;
  activeTextColor: keyof typeof theme.colors;
  buttonRef?: React.Ref<TouchableOpacity>;
  children: React.ReactNode;
  handleSubmit: () => Promise<void> | void;
  styles?: ViewStyle;
}

const SwitchableButton: React.FC<Props> = ({
  active,
  buttonRef,
  handleSubmit,
  children,
  disabledColor,
  activeColor,
  disabledTextColor,
  activeTextColor,
  styles: additionalStyles
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
    <Animated.View style={[styles.buttonOverlay, { ...additionalStyles }]}>
      <TouchableOpacity
        ref={buttonRef}
        onPress={handleSubmit}
        style={[styles.button, { backgroundColor: theme.colors[activeColor] }]}
      >
        <Animated.Text
          style={[
            styles.buttonText,
            { fontSize, color: theme.colors[activeTextColor] }
          ]}
        >
          {children}
        </Animated.Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.disabledButton,
          { opacity, backgroundColor: theme.colors[disabledColor] }
        ]}
      >
        <Animated.Text
          style={[
            styles.disabledButtonText,
            { opacity, fontSize, color: theme.colors[disabledTextColor] }
          ]}
        >
          {children}
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

export default SwitchableButton;
