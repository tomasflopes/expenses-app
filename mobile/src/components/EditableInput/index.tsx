import React from 'react';

import { View, Text, TextInput, TextInputProps } from 'react-native';

import styles from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  editable?: boolean;
}

const EditableInput: React.FC<Props> = ({ placeholder, editable, ...rest }) => {
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
          <Text style={styles.disabledPlaceholder}>{placeholder}</Text>
        </View>
      )}
    </View>
  );
};

export default EditableInput;
