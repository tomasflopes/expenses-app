import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Animated from 'react-native-reanimated';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Feather, Foundation } from '@expo/vector-icons';

import Expense from '../../components/Expense';
import generateHeaders from '../../utils/generateAuthHeader';
import getAgeFromDate from '../../utils/getAgeFromDate';
import IExpense from '../../types/IExpense';
import IUser from '../../types/IUser';
import api from '../../services/api';

import styles from './styles';

const Home: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [avatarFocused, setAvatarFocused] = useState(false);

  const [userInformation, setUserInformation] = useState<IUser>();
  const [userBalance, setUserBalance] = useState(0.0);
  const [userExpenses, setUserExpenses] = useState<IExpense[]>([]);
  const [nOfExpenses, setNOfExpenses] = useState(0);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  function toggleHidden() {
    setHidden(state => !state);
  }

  function toggleAvatarFocus() {
    setAvatarFocused(state => !state);
  }

  function handleProfileNavigation() {
    navigation.navigate('Profile');
  }

  function handleAddExpense() {
    navigation.navigate('CreateExpense');
  }

  function handleExpandExpensesClick() {
    navigation.navigate('ListExpenses');
  }

  async function getUserExpenses() {
    const headers = await generateHeaders();

    const { data } = await api.get('/expense?perPage=5', headers);

    if (!data) {
      alert('Raia'); //TODO: Implement custom alert
      return;
    }

    setUserExpenses(data.expenses);
    setNOfExpenses(data.nOfExpenses);
  }

  async function getUserInformation() {
    const headers = await generateHeaders();

    const { data } = await api.get('/user', headers);

    setUserInformation(data);
  }

  async function getUserBalance() {
    const headers = await generateHeaders();

    const { data } = await api.get('/balance', headers);

    setUserBalance(data);
  }

  useEffect(() => {
    getUserInformation();
  }, []);

  useEffect(() => {
    getUserBalance();
  }, []);

  useEffect(() => {
    getUserExpenses();
  }, [isFocused]);

  const opacity = hidden ? 0 : 1; // TODO: Animate this value

  return (
    <View style={styles.container}>
      <View style={styles.deadZone}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.personalInfoRow}>
            <Text style={styles.informationText}>
              {userInformation?.firstName} {userInformation?.lastName}
            </Text>
            {userInformation?.birth && (
              <>
                <View style={styles.dot} />

                <Text style={styles.informationText}>
                  {getAgeFromDate(userInformation?.birth)} years
                </Text>
              </>
            )}

            {userInformation?.occupation && (
              <>
                <View style={styles.dot} />

                <Text style={styles.informationText}>
                  {userInformation?.occupation}
                </Text>
              </>
            )}
          </View>

          {hidden ? (
            <View style={styles.hiddenBalance}>
              <TouchableOpacity onPress={toggleHidden}>
                <Feather name="eye" style={styles.eyeOnIcon} />
              </TouchableOpacity>
              <Text style={styles.hiddenText}>Hidden Balance</Text>
            </View>
          ) : (
            <View style={styles.balanceRow}>
              <View style={styles.balanceTextContainer}>
                <Animated.Text style={[styles.balanceText, { opacity }]}>
                  {userBalance}
                </Animated.Text>
                <Animated.Text style={[styles.currencyText, { opacity }]}>
                  {userInformation?.financeSettings.defaultCurrency}
                </Animated.Text>
              </View>
              <TouchableOpacity onPress={toggleHidden}>
                <Feather name="eye-off" style={styles.eyeOffIcon} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View style={styles.avatarContainer}>
        <TouchableOpacity
          style={styles.avatarButton}
          onPress={toggleAvatarFocus}
        >
          <ImageBackground
            style={styles.avatar}
            imageStyle={{ borderRadius: 120 / 2 }}
            source={{ uri: 'http://www.github.com/tomas050302.png' }}
          >
            {avatarFocused && (
              <View style={styles.avatarOverlay}>
                <TouchableOpacity
                  style={styles.viewProfileTextButton}
                  onPress={handleProfileNavigation}
                >
                  <Text style={styles.viewProfileText}>View Profile</Text>
                </TouchableOpacity>
              </View>
            )}
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.mainContainer}>
        <Text style={styles.header}>your last expenses</Text>

        {userExpenses.map(expense => (
          <Expense
            key={expense._id}
            name={expense.name}
            type={expense.type}
            date={expense.date}
            amount={expense.value}
            style={styles.expense}
          />
        ))}

        <TouchableOpacity
          style={styles.moreButton}
          onPress={handleExpandExpensesClick}
        >
          <Text style={styles.moreButtonText}>+ More</Text>
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.addExpenseButton}
            onPress={handleAddExpense}
          >
            <Foundation name="euro" size={32} color="white" />
            <Text style={styles.buttonText}>add an expense</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.manageActivityButton}>
            <Feather name="activity" size={18} />
            <Text style={styles.buttonText}>manage activity</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.totalExpensesContainer}>
          <Text style={styles.totalExpensesText}>
            Total of {nOfExpenses} expenses registered.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
