import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Feather, Foundation } from '@expo/vector-icons';
import {
  Container,
  DeadZone,
  ProfileInfoContainer,
  PersonalInfoRow,
  InformationText,
  Dot,
  BalanceRow,
  BalanceTextContainer,
  BalanceText,
  CurrencyText,
  EyeIcon,
  HiddenEyeIcon,
  HiddenBalance,
  HiddenText,
  AvatarContainer,
  Avatar,
  AvatarOverlay,
  ViewProfileTextButton,
  ViewProfileText,
  MainContainer,
  Header,
  MoreButton,
  MoreButtonText,
  ButtonsContainer,
  AddExpenseButton,
  ButtonText,
  ManageActivityButton,
  TotalExpensesContainer,
  TotalExpensesText
} from './styles';

import colors from '../../styles/colors';

import Expense from '../../components/Expense';

const Home: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const [avatarFocused, setAvatarFocused] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

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
    <Container>
      <DeadZone>
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
                  color={colors.primaryDark}
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
                  color={colors.primaryDark}
                  style={{ marginTop: 8 }}
                />
              </TouchableOpacity>
            </BalanceRow>
          )}
        </ProfileInfoContainer>
      </DeadZone>

      <AvatarContainer onPress={toggleAvatarFocus}>
        <Avatar source={{ uri: 'http://www.github.com/tomas050302.png' }}>
          {avatarFocused && (
            <AvatarOverlay>
              <ViewProfileTextButton onPress={navigateToProfile}>
                <ViewProfileText>View Profile</ViewProfileText>
              </ViewProfileTextButton>
            </AvatarOverlay>
          )}
        </Avatar>
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
    </Container>
  );
};

export default Home;
