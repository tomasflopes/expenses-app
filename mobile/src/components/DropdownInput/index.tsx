import React, { useState } from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';

import Animated, { interpolate } from 'react-native-reanimated';
import { Feather as Icon } from '@expo/vector-icons';

import { useTimingTransition } from 'react-native-redash';
import styles from './styles';
import configs from '../../configs';

interface Props {
  data: string[];
  placeholder: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  style?: StyleProp<TextStyle>;
  value?: string;
}

const DropdownInput: React.FC<Props> = ({
  data,
  placeholder,
  setSelected,
  style,
  value
}) => {
  const [visible, setVisible] = useState(false);

  function handleOpenDropdown() {
    setVisible(state => !state);
  }

  const isContainerVisible = useTimingTransition(visible, {
    duration: configs.dropdownAnimationTime
  });

  const opacityTransition = useTimingTransition(visible, {
    duration: configs.dropdownAnimationTime / 2
  });

  const maxHeight = data.length * configs.HEIGHT_PER_ITEM;

  const height = interpolate(isContainerVisible, {
    inputRange: [0, 0.5, 1],
    outputRange: [0, maxHeight + configs.ANIMATION_HEIGHT_THRESHOLD, maxHeight]
  });

  const opacity = interpolate(opacityTransition, {
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  function handleSelect(item: string) {
    setSelected(item);

    setVisible(false);
  }

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleOpenDropdown}>
        <Text style={styles.placeholder}>{value || placeholder}</Text>
        <Icon name="chevron-down" style={styles.icon} />
      </TouchableOpacity>
      <Animated.View
        style={[style, styles.dropdownContainer, { height, opacity }]}
      >
        {data.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => handleSelect(item)}
            style={styles.dropdownItemContainer}
          >
            <Text style={styles.dropdownItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </>
  );
};

export default DropdownInput;
