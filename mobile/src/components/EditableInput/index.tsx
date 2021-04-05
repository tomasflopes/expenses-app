import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import styles, { placeholderColor } from './styles';

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (value) setVisible(true);
  }, [value]);

  return (
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
          <ShimmerPlaceholder visible={visible}>
            <Text style={styles.disabledPlaceholder}>
              {value || placeholder}
            </Text>
          </ShimmerPlaceholder>
        </View>
      )}
    </View>
  );
};

export default EditableInput;
