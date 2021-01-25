import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const DeadZone = styled.View`
  height: 235px;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ProfileInfoContainer = styled.View`
  width: 90%;
  background: ${colors.background};
  height: 72px;
  border-radius: 8px;
  align-items: 'center';
  justify-content: 'center';
  margin-bottom: 24px;
`;

export const PersonalInfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InformationText = styled.Text`
  font-family: Archivo_400Regular;
  color: ${colors.primaryDark};
  margin-right: 8;
  font-size: 14;
`;

export const Dot = styled.View`
  height: 4px;
  width: 4px;
  border-radius: 2px;
  background: ${colors.primaryDark};
  margin-right: 8px;
`;

export const BalanceRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceTextContainer = styled.Text`
  flex-direction: row;
  align-items: flex-end;
`;

export const BalanceText = styled.Text`
  font-size: 20px;
  top: 8px;
  font-family: 'Poppins_500Medium';
  color: ${colors.primaryDark};
  margin-right: 4px;
`;

export const CurrencyText = styled.View`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: ${colors.primaryDark};
  margin-right: 8px;
  font-weight: bold;
`;

export const EyeIcon = styled.View`
  margin-top: 8px;
`;

export const HiddenBalance = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

export const HiddenText = styled.Text`
  font-family: 'Poppins_300Light';
  color: ${colors.primaryDark};
  font-size: 13;
`;

export const AvatarContainer = styled.TouchableOpacity`
  align-items: 'center';
  justify-content: 'center';
  position: 'absolute';
  width: '100%';
  flex: 1;
  top: ${235 - 120 / 2}px;
  border-radius: ${120 / 2}px;
`;

export const Avatar = styled.ImageBackground`
  height: 120px;
  width: 120px;
  border-radius: ${120 / 2}px;
`;

export const AvatarOverlay = styled.View`
  width: 120px;
  height: 120px;
  border-radius: ${120 / 2};
  background: 'rgba(0, 119, 194, 0.65)';
  align-items: center;
  justify-content: center;
`;

export const ViewProfileTextButton = styled.TouchableOpacity`
  padding: 2px;
`;

export const ViewProfileText = styled.Text`
  font-family: 'Poppins_700Bold';
  text-align: 'center';
  font-size: 13;
  color: ${colors.secondaryLight};
`;

export const MainContainer = styled.ScrollView`
  flex: 3;
  margin-top: 80;
  padding: 32px 0;
`;

export const Header = styled.Text`
  text-transform: capitalize;
  color: ${colors.textHeaders};
  font-family: 'Poppins_700Bold';
  font-size: 16px;
  margin-bottom: 24px;
`;

export const MoreButton = styled.TouchableOpacity`
  align-self: center;
  top: 8px;
`;

export const MoreButtonText = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 18px;
  color: ${colors.primary};
  margin-bottom: 24px;
`;

export const ButtonsContainer = styled.View`
  justify-content: space-between;
`;

export const AddExpenseButton = styled.TouchableOpacity`
  height: 60;
  width: 100%;
  flex-direction: row;
  background: ${colors.confirm};
  border-radius: 8;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  color: ${colors.secondaryLight};
  margin-left: 24px;
  text-transform: capitalize;
  font-size: 20px;
  top: 1px;
`;

export const ManageActivityButton = styled.TouchableOpacity`
  height: 60;
  width: 100%;
  flex-direction: row;
  background: ${colors.primary};
  border-radius: 8;
  align-items: center;
  justify-content: center;
`;

export const TotalExpensesContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const TotalExpensesText = styled.Text`
  font-size: 12px;
  font-family: 'Archivo_400Regular';
  color: ${colors.secondaryDark};
  margin: 24px 0;
`;
