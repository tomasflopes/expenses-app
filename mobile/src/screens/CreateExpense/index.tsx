import React from 'react';
import { Text, View } from 'react-native';

import DropdownInput from '../../components/DropdownInput';

import Input from '../../components/Input';

import styles from './styles';

const CreateExpense: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Expense Details</Text>
    <View style={styles.formContainer}>
      <Input editable placeholder="Name" style={styles.input} />
      <Input editable placeholder="Description" expanded style={styles.input} />
      <Input
        editable
        placeholder="Value"
        keyboardType="numeric"
        style={styles.input}
      />
      <DropdownInput data={['Job', 'Food']} placeholder="Type" />
    </View>
  </View>
);

export default CreateExpense;
