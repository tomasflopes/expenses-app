import React from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native';

import styles from './styles';

interface Props extends TextInputProps {
  expanded?: boolean;
  placeholder: string;
  style?: StyleProp<TextStyle>;
}

const Input: React.FC<Props> = ({ expanded, placeholder, style, ...rest }) => (
  <TextInput
    style={[style, styles.input]}
    placeholder={placeholder}
    numberOfLines={expanded ? 8 : 1}
    {...rest}
  />
);

export default Input;
