import React from 'react';

import { View, Text, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
  name: string;
  date: string;
  amount: number;
  style?: StyleProp<ViewStyle>;
}

const Expense: React.FC<Props> = ({ name, date, amount, style }) => {
  return (
    <View style={[style, styles.container]}>
      <Text style={styles.expenseTitle}>{name}</Text>
      <Text style={styles.expenseDate}>{date}</Text>
      {amount > 0 ? (
        <Text style={styles.incomeAmount}>+{amount.toFixed(2)}€</Text>
      ) : (
        <Text style={styles.expenseAmount}>{amount.toFixed(2)}€</Text>
      )}
    </View>
  );
};

export default Expense;
