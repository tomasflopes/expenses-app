import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import generateHeaders from '../../utils/generateAuthHeader';
import Expense from '../../components/Expense';
import IExpense from '../../types/IExpense';
import api from '../../services/api';

import styles from './styles';

const ListExpenses: React.FC = () => {
  const [userExpenses, setUserExpenses] = useState<IExpense[]>([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getUserExpenses() {
    const headers = await generateHeaders();
    const { data } = await api.get(
      `/expense?page=${page}&perPage=${10}`,
      headers
    );

    if (!data) {
      alert('Raia'); // TODO: Implement Custom alert
      return;
    }

    setTotalExpenses(data.nOfExpenses);
    setUserExpenses(data.expenses);

    setRefreshing(false);
    setLoading(false);
  }

  function handleLoadMoreItems() {
    setPage(page => page + 1);
  }

  function handleRefresh() {
    getUserExpenses();
    setRefreshing(true);
  }

  function renderFooter() {
    if (loading) return null;

    return (
      <View style={styles.footerSeparator}>
        <Text style={styles.totalExpenses}>
          {totalExpenses} expenses already registered.
        </Text>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  useEffect(() => {
    getUserExpenses();
  }, [page]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={styles.title}>Expenses Details</Text>
        )}
        style={styles.expensesContainer}
        ListFooterComponent={renderFooter}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        data={userExpenses}
        keyExtractor={item => item._id}
        onEndReached={handleLoadMoreItems}
        onEndReachedThreshold={0.5}
        initialNumToRender={15}
        renderItem={({ item }) => (
          <View key={item._id} style={styles.expenseContainer}>
            <Expense
              name={item.name}
              date={item.date}
              type={item.type}
              amount={item.value}
            />
            <View style={styles.expandDetailsContainer}>
              <Feather style={styles.expandDetailsIcon} name="maximize" />
              <Text style={styles.expandDetailsText}>Expand details</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListExpenses;
