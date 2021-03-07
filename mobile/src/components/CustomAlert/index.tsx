import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

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
  const [isVisible, setIsVisible] = useState(true);

  const { type, customMessage } = props;

  useEffect(() => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, configs.alertTime);
  }, [props]);

  if (!type) return null;

  const message = messages[type];
  const iconName = iconNames[type];
  const backgroundColor = backgroundColors[type];

  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <View style={styles.container}>
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
      </View>
    </Modal>
  );
};

export default CustomAlert;
