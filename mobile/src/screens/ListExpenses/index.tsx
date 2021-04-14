import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import generateHeaders from '../../utils/generateAuthHeader';
import Expense from '../../components/Expense';
import IExpense from '../../types/IExpense';
import api from '../../services/api';

import styles from './styles';

const ListExpenses: React.FC = () => {
  const [userExpenses, setUserExpenses] = useState<IExpense[]>([]);

  async function getUserExpenses() {
    const headers = await generateHeaders();
    const { data } = await api.get('/expense', headers);

    if (!data) {
      alert('Raia'); // TODO: Implement Custom alert
      return;
    }

    setUserExpenses(data.expenses);
  }

  useEffect(() => {
    getUserExpenses();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.expensesContainer}>
        <Text style={styles.title}>Expenses Details</Text>

        {userExpenses.map(expense => (
          <View style={styles.expenseContainer}>
            <Expense
              key={expense._id}
              name={expense.name}
              date={expense.date}
              amount={expense.value}
            />
            <View style={styles.expandDetailsContainer}>
              <Feather style={styles.expandDetailsIcon} name="maximize" />
              <Text style={styles.expandDetailsText}>Expand details</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListExpenses;
