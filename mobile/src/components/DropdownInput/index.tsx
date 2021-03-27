import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Animated, { interpolate } from 'react-native-reanimated';
import { Feather as Icon } from '@expo/vector-icons';

import { useTimingTransition } from 'react-native-redash';
import styles from './styles';
import configs from '../../configs';

interface Props {
  data: string[];
  placeholder: string;
  value?: string;
}

const DropdownInput: React.FC<Props> = ({ data, placeholder, value }) => {
  const [visible, setVisible] = useState(false);

  function handleOpenDropdown() {
    setVisible(state => !state);
  }

  const isContainerVisible = useTimingTransition(visible, {
    duration: configs.dropdownAnimationTime
  });

  const height = interpolate(isContainerVisible, {
    inputRange: [0, 0.5, 1],
    outputRange: [0, 120, 100]
  });

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleOpenDropdown}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <Icon name="chevron-down" style={styles.icon} />
      </TouchableOpacity>
      {visible && (
        <Animated.ScrollView style={[styles.dropdownContainer, { height }]}>
          {data.map(item => (
            <TouchableOpacity style={styles.dropdownItemContainer}>
              <Text style={styles.dropdownItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>
      )}
    </>
  );
};

export default DropdownInput;
