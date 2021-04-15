import React from 'react';

import { View, Text, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
  name: string;
  date: string;
  amount: number;
  type: 'Expense' | 'Income';
  style?: StyleProp<ViewStyle>;
}

const Expense: React.FC<Props> = ({ amount, name, date, type, style }) => {
  return (
    <View style={[style, styles.container]}>
      <Text style={styles.expenseTitle}>{name}</Text>
      <Text style={styles.expenseDate}>{date}</Text>
      {type === 'Income' ? (
        <Text style={[styles.amount, styles.income]}>
          +{amount.toFixed(2)}€
        </Text>
      ) : (
        <Text style={[styles.amount, styles.expense]}>
          -{amount.toFixed(2)}€
        </Text>
      )}
    </View>
  );
};

export default Expense;
