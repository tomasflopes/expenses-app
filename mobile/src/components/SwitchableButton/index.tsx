import React from 'react';
import {
  ColorValue,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle
} from 'react-native';

import { useTimingTransition } from 'react-native-redash';
import Animated, { interpolateColors } from 'react-native-reanimated';

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

  // eslint-disable-next-line no-undef
  const backgroundColor: AnimatedValue<ColorValue> = interpolateColors(
    transition,
    {
      inputRange: [0, 1],
      outputColorRange: [theme.colors[disabledColor], theme.colors[activeColor]]
    }
  );

  // eslint-disable-next-line no-undef
  const color: AnimatedValue<ColorValue> = interpolateColors(transition, {
    inputRange: [0, 1],
    outputColorRange: [
      theme.colors[disabledTextColor],
      theme.colors[activeTextColor]
    ]
  });

  return (
    <Animated.View style={[styles.buttonOverlay, { ...additionalStyles }]}>
      <TouchableOpacity ref={buttonRef} onPress={handleSubmit}>
        <Animated.View style={[styles.button, { backgroundColor }]}>
          <Animated.Text style={[styles.buttonText, { color }]}>
            {children}
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SwitchableButton;
