import React from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native';

import styles from './styles';

interface Props extends TextInputProps {
  expanded?: boolean;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  style?: StyleProp<TextStyle>;
}

const Input: React.FC<Props> = ({
  expanded,
  placeholder,
  setValue,
  style,
  value,
  ...rest
}) => (
  <TextInput
    style={
      expanded
        ? [style, styles.input, { textAlignVertical: 'top' }]
        : [style, styles.input]
    }
    placeholder={placeholder}
    numberOfLines={expanded ? 8 : 1}
    onChangeText={setValue}
    value={value}
    {...rest}
  />
);

export default Input;
