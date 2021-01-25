import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { Feather, Foundation } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../styles/colors';

import Expense from '../../components/Expense';

const Home: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [avatarFocused, setAvatarFocused] = useState(false);

  function toggleHidden() {
    setHidden(state => !state);
  }

  function toggleAvatarFocus() {
    setAvatarFocused(state => !state);
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
                <Feather
                  name="eye"
                  size={22}
                  color={colors.primaryDark}
                  style={styles.hiddenEyeIcon}
                />
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
                <Feather
                  name="eye-off"
                  size={22}
                  color={colors.primaryDark}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={toggleAvatarFocus}
        >
          <ImageBackground
            source={{ uri: 'http://www.github.com/tomas050302.png' }}
            style={styles.avatar}
            imageStyle={styles.avatar}
          >
            {avatarFocused && (
              <View style={styles.avatarOverlay}>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            )}
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.header}>your last expenses</Text>

        <Expense name="Salary" date="20/10/2020" amount={800.8} />
        <Expense name="Salary" date="20/10/2020" amount={-500.8} />
        <Expense name="Salary" date="20/10/2020" amount={800} />
        <Expense name="Salary" date="20/10/2020" amount={800.8} />

        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>+ More</Text>
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.addExpenseButton}>
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
            Total of 87 expenses registered.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
