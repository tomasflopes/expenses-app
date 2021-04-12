import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Feather, Foundation } from '@expo/vector-icons';

import Expense from '../../components/Expense';
import generateHeaders from '../../utils/generateAuthHeader';
import IExpense from '../../types/IExpense';
import api from '../../services/api';

import styles from './styles';

const Home: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [avatarFocused, setAvatarFocused] = useState(false);

  const [userExpenses, setUserExpenses] = useState<IExpense[]>([]);

  const navigation = useNavigation();

  function toggleHidden() {
    setHidden(state => !state);
  }

  function toggleAvatarFocus() {
    setAvatarFocused(state => !state);
  }

  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  function handleAddExpense() {
    navigation.navigate('CreateExpense');
  }

  async function getUserExpenses() {
    const headers = await generateHeaders();

    const { data } = await api.get('/expense', headers);

    if (!data) {
      alert('Raia'); //TODO: Implement custom alert
      return;
    }

    setUserExpenses(data.expenses);
  }

  useEffect(() => {
    getUserExpenses();
  }, []);

  const opacity = hidden ? 0 : 1; // TODO: Animate this value

  return (
    <View style={styles.container}>
      <View style={styles.deadZone}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.personalInfoRow}>
            <Text style={styles.informationText}>Tomás Lopes</Text>
            <View style={styles.dot} />
            <Text style={styles.informationText}>18 years</Text>
            <View style={styles.dot} />
            <Text style={styles.informationText}>Student</Text>
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
                  1276,50
                </Animated.Text>
                <Animated.Text style={[styles.currencyText, { opacity }]}>
                  EUR
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
                  onPress={navigateToProfile}
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
            date={expense.date}
            amount={expense.value}
          />
        ))}

        <TouchableOpacity style={styles.moreButton}>
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
            Total of 91 expenses registered.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
