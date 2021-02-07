import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Feather, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Expense from '../../components/Expense';
import styles from './styles';

const Home: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [avatarFocused, setAvatarFocused] = useState(false);

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
                <Text style={styles.balanceText}>1276,50</Text>
                <Text style={styles.currencyText}>EUR</Text>
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

        <Expense name="Salary" date="20/10/2020" amount={800.8} />
        <Expense name="Salary" date="20/10/2020" amount={-500.8} />
        <Expense name="Salary" date="20/10/2020" amount={800} />
        <Expense name="Salary" date="20/10/2020" amount={800.8} />

        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>+ More</Text>
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <View style={styles.addExpenseButton}>
            <Foundation name="euro" size={32} color="white" />
            <Text style={styles.buttonText}>add an expense</Text>
          </View>

          <View style={styles.manageActivityButton}>
            <Feather name="activity" size={18} />
            <Text style={styles.buttonText}>manage activity</Text>
          </View>
        </View>

        <View style={styles.totalExpensesContainer}>
          <Text style={styles.totalExpensesText}>
            Total of 87 expenses registered.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
