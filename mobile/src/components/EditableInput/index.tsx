import React from 'react';

import { View, Text, TextInput, TextInputProps } from 'react-native';

import styles from './styles';

interface Props extends TextInputProps {
  editable?: boolean;
  placeholder: string;
  value?: string;
}

const EditableInput: React.FC<Props> = ({
  placeholder,
  editable,
  value,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{placeholder}</Text>
      {editable ? (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          {...rest}
        ></TextInput>
      ) : (
        <View style={styles.inputContainer}>
          <Text style={styles.disabledPlaceholder}>
            {value ? value : placeholder}
          </Text>
        </View>
      )}
    </View>
  );
};

export default EditableInput;
