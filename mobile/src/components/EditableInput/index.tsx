import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import styles, { placeholderColor } from './styles';

interface Props extends TextInputProps {
  editable?: boolean;
  isDataFetched: boolean;
  placeholder: string;
  value?: string;
}

const EditableInput: React.FC<Props> = ({
  editable,
  isDataFetched,
  placeholder,
  value,
  ...rest
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{placeholder}</Text>
    {editable ? (
      <TextInput
        style={styles.input}
        placeholderTextColor={placeholderColor}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    ) : (
      <View style={styles.inputContainer}>
        <ShimmerPlaceholder visible={isDataFetched}>
          <Text style={styles.disabledPlaceholder}>{value || placeholder}</Text>
        </ShimmerPlaceholder>
      </View>
    )}
  </View>
);

export default EditableInput;
