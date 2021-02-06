import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather, Foundation } from '@expo/vector-icons';

import Expense from '../../components/Expense';
import { useNavigation } from '@react-navigation/native';

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
        <ProfileInfoContainer>
          <PersonalInfoRow>
            <InformationText>Tomás Lopes</InformationText>
            <Dot />
            <InformationText>18 years</InformationText>
            <Dot />
            <InformationText>Student</InformationText>
          </PersonalInfoRow>

          {hidden ? (
            <HiddenBalance>
              <TouchableOpacity onPress={toggleHidden}>
                <Feather
                  name="eye"
                  size={22}
                  color={light.colors.primaryDark}
                  style={{ marginBottom: -4 }}
                />
              </TouchableOpacity>
              <HiddenText>Hidden Balance</HiddenText>
            </HiddenBalance>
          ) : (
            <BalanceRow>
              <BalanceTextContainer>
                <BalanceText>1276,50</BalanceText>
                <CurrencyText>EUR</CurrencyText>
              </BalanceTextContainer>
              <TouchableOpacity onPress={toggleHidden}>
                <Feather
                  name="eye-off"
                  size={22}
                  color={light.colors.primaryDark}
                  style={{ marginTop: 8 }}
                />
              </TouchableOpacity>
            </BalanceRow>
          )}
        </ProfileInfoContainer>
      </View>

      <AvatarContainer>
        <AvatarButton onPress={toggleAvatarFocus}>
          <Avatar
            imageStyle={{ borderRadius: 120 / 2 }}
            source={{ uri: 'http://www.github.com/tomas050302.png' }}
          >
            {avatarFocused && (
              <AvatarOverlay>
                <ViewProfileTextButton onPress={navigateToProfile}>
                  <ViewProfileText>View Profile</ViewProfileText>
                </ViewProfileTextButton>
              </AvatarOverlay>
            )}
          </Avatar>
        </AvatarButton>
      </AvatarContainer>

      <MainContainer>
        <Header>your last expenses</Header>

        <Expense name="Salary" date="20/10/2020" amount={800.8} />
        <Expense name="Salary" date="20/10/2020" amount={-500.8} />
        <Expense name="Salary" date="20/10/2020" amount={800} />
        <Expense name="Salary" date="20/10/2020" amount={800.8} />

        <MoreButton>
          <MoreButtonText>+ More</MoreButtonText>
        </MoreButton>

        <ButtonsContainer>
          <AddExpenseButton>
            <Foundation name="euro" size={32} color="white" />
            <ButtonText>add an expense</ButtonText>
          </AddExpenseButton>

          <ManageActivityButton>
            <Feather name="activity" size={18} />
            <ButtonText>manage activity</ButtonText>
          </ManageActivityButton>
        </ButtonsContainer>

        <TotalExpensesContainer>
          <TotalExpensesText>
            Total of 87 expenses registered.
          </TotalExpensesText>
        </TotalExpensesContainer>
      </MainContainer>
    </View>
  );
};

export default Home;
