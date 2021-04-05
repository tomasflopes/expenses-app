import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View
} from 'react-native';

import styles from './styles';

type Ref = TextInput;

interface Props extends TextInputProps {
  children?: React.ReactNode;
  expanded?: boolean;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  style?: StyleProp<TextStyle>;
}

const Input = React.forwardRef<Ref, Props>(
  (
    { expanded, placeholder, setValue, style, value, children, ...rest },
    ref
  ) => (
    <View style={styles.container}>
      <TextInput
        style={
          expanded
            ? [style, styles.input, { textAlignVertical: 'top' }]
            : [style, styles.input]
        }
        ref={ref}
        placeholder={placeholder}
        numberOfLines={expanded ? 8 : 1}
        onChangeText={setValue}
        value={value}
        {...rest}
      />
      {children}
    </View>
  )
);

export default Input;
