import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Animated, { interpolate, eq } from 'react-native-reanimated';

import { Feather } from '@expo/vector-icons';

import { useDebug, useTimingTransition } from 'react-native-redash';

import configs from '../../configs';

import theme from '../../styles';
import styles from './styles';

const messages = {
  success: 'Success!',
  warning: 'Something went wrong! Please try again later...',
  undo: 'Do you want to undo your change?',
  error: 'Error'
};

const iconNames = {
  success: 'check-circle',
  warning: 'alert-circle',
  undo: 'corner-down-left',
  error: 'alert-triangle'
};

const backgroundColors = {
  success: theme.colors.confirm,
  warning: theme.colors.cancel,
  undo: theme.colors.secondaryLight,
  error: theme.colors.cancel
};

interface Props {
  props: {
    type: keyof typeof messages | undefined | '';
    customMessage?: string;
  };
  undoFunction: () => void;
}
const CustomAlert: React.FC<Props> = ({ props, undoFunction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { type, customMessage } = props;

  const isContainerVisible = useTimingTransition(isVisible, {
    duration: configs.alertTime
  });

  const testNode = new Animated.Node<number>({ value: 1 });
  useDebug({
    isContainerVisible,
    testNode
  });

  /* if (eq(isContainerVisible, new Animated.Node({ value: 1 })) && !isVisible) {
    setIsVisible(false);
  } */

  useEffect(() => {
    if (type) {
      setIsVisible(true);
    }
  }, [type]);

  if (!type) return null;

  const message = messages[type];
  const iconName = iconNames[type];
  const backgroundColor = backgroundColors[type];

  const translateY = interpolate(isContainerVisible, {
    inputRange: [0, 0.2, 0.8, 1],
    outputRange: [
      theme.constants.ALERT_HEIGHT + 30,
      0,
      0,
      theme.constants.ALERT_HEIGHT + 30
    ]
  });

  return (
    <Animated.View style={[styles.container, { translateY }]}>
      <View style={[styles.contentContainer, { backgroundColor }]}>
        <View style={styles.messageContainer}>
          <Feather name={iconName} style={styles.messageIcon} />
          <Text style={styles.messageText}>{customMessage || message}</Text>
        </View>

        {type === 'undo' && (
          <TouchableOpacity
            onPress={undoFunction}
            style={styles.undoButtonContainer}
          >
            <Text style={styles.undoButtonText}>Undo</Text>
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
};

export default CustomAlert;
