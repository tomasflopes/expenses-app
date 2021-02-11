import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const FinanceAreasInputs: React.FC = () => {
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

export default FinanceAreasInputs;
