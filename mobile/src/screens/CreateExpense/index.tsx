import React from 'react';
import { Text, View } from 'react-native';

import Input from '../../components/Input';

import styles from './styles';

const CreateExpense: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Expense Details</Text>
    <View style={styles.formContainer}>
      <Input editable placeholder="Name" style={styles.input} />
      <Input editable placeholder="Description" expanded style={styles.input} />
      <Input editable placeholder="Name" style={styles.input} />
      <Input editable placeholder="Name" style={styles.input} />
    </View>
  </View>
);

export default CreateExpense;
