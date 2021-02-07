import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  GestureResponderEvent
} from 'react-native';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  active?: boolean;
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
  return (
    <TouchableOpacity
      ref={buttonRef}
      onPress={handleSubmit}
      style={[styles.button, active ? styles.activeButton : styles.button]}
    >
      <Text
        style={[
          styles.buttonText,
          active ? styles.activeButtonText : styles.buttonText
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default SwitchableButton;
