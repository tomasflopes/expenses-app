import styled from 'styled-components/native';

import { CustomThemeProps } from '../../styles/colors';

export const Container = styled.View<CustomThemeProps>`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

export const DeadZone = styled.View<CustomThemeProps>`
  height: ${props => props.theme.constants.DEADZONE_HEIGHT}px;
  background: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ProfileInfoContainer = styled.View<CustomThemeProps>`
  width: 90%;
  background: ${props => props.theme.colors.background};
  height: ${props => props.theme.constants.PROFILE_CONTAINER_HEIGHT}px;
  border-radius: ${props => props.theme.units.borderRadius.md}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.units.margin.md}px;
`;

export const PersonalInfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InformationText = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  color: ${props => props.theme.colors.primaryDark};
  margin-right: ${props => props.theme.units.margin.xsm}px;
  font-size: ${props => props.theme.units.fontSize.sm}px;
`;

export const Dot = styled.View<CustomThemeProps>`
  height: ${props => props.theme.constants.DOT_WIDTH}px;
  width: ${props => props.theme.constants.DOT_WIDTH}px;
  border-radius: ${props => props.theme.constants.DOT_WIDTH / 2}px;
  background: ${props => props.theme.colors.primaryDark};
  margin-right: ${props => props.theme.units.margin.xsm}px;
`;

export const BalanceRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceTextContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const BalanceText = styled.Text<CustomThemeProps>`
  font-size: ${props => props.theme.units.fontSize.header}px;
  top: ${props => props.theme.units.margin.xsm}px;
  font-family: ${props => props.theme.fonts.Poppins.medium};
  color: ${props => props.theme.colors.primaryDark};
  margin-right: ${props => props.theme.units.margin.tiny}px;
`;

export const CurrencyText = styled.Text<CustomThemeProps>`
  font-size: ${props => props.theme.units.fontSize.sm}px;
  font-family: ${props => props.theme.fonts.Poppins.regular};
  color: ${props => props.theme.colors.primaryDark};
  margin-right: ${props => props.theme.units.margin.xsm}px;
`;

export const HiddenBalance = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

export const HiddenText = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Poppins.light};
  color: ${props => props.theme.colors.primaryDark};
  font-size: ${props => props.theme.units.fontSize.xsm}px;
`;

export const AvatarContainer = styled.View<CustomThemeProps>`
  align-items: center;
  justify-content: center;
  width: 100%;

  position: absolute;

  top: ${props =>
    props.theme.constants.DEADZONE_HEIGHT -
    props.theme.constants.AVATAR_WIDTH / 2}px;
`;

export const AvatarButton = styled.TouchableOpacity<CustomThemeProps>`
  height: ${props => props.theme.constants.AVATAR_WIDTH}px;
  width: ${props => props.theme.constants.AVATAR_WIDTH}px;

  border-radius: ${props => props.theme.constants.AVATAR_WIDTH / 2}px;
`;

export const Avatar = styled.ImageBackground<CustomThemeProps>`
  height: ${props => props.theme.constants.AVATAR_WIDTH}px;
  width: ${props => props.theme.constants.AVATAR_WIDTH}px;
`;

export const AvatarOverlay = styled.View<CustomThemeProps>`
  width: ${props => props.theme.constants.AVATAR_WIDTH}px;
  height: ${props => props.theme.constants.AVATAR_WIDTH}px;
  border-radius: ${props => props.theme.constants.AVATAR_WIDTH / 2}px;
  background: ${props => props.theme.colors.avatarOverlay};
  align-items: center;
  justify-content: center;
`;

export const ViewProfileTextButton = styled.TouchableOpacity`
  padding: 2px;
`;

export const ViewProfileText = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Poppins.bold};
  text-align: center;
  font-size: ${props => props.theme.units.fontSize.xsm}px;
  color: ${props => props.theme.colors.secondaryLight};
`;

export const MainContainer = styled.ScrollView<CustomThemeProps>`
  flex: 3;
  margin-top: ${props => props.theme.units.margin.xxl}px;
  padding: 0 ${props => props.theme.units.margin.lg}px;
`;

export const Header = styled.Text<CustomThemeProps>`
  text-transform: capitalize;
  color: ${props => props.theme.colors.textHeaders};
  font-family: ${props => props.theme.fonts.Poppins.bold};
  font-size: ${props => props.theme.units.fontSize.md}px;
  margin-bottom: ${props => props.theme.units.margin.md}px;
`;

export const MoreButton = styled.TouchableOpacity<CustomThemeProps>`
  align-self: center;
  top: ${props => props.theme.units.margin.xsm}px;
`;

export const MoreButtonText = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Poppins.bold};
  font-size: ${props => props.theme.units.fontSize.big}px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.units.margin.md}px;
`;

export const ButtonsContainer = styled.View`
  justify-content: space-between;
`;

export const AddExpenseButton = styled.TouchableOpacity<CustomThemeProps>`
  height: ${props => props.theme.constants.BUTTON_HEIGHT}px;
  width: 100%;
  flex-direction: row;
  background: ${props => props.theme.colors.confirm};
  border-radius: ${props => props.theme.units.borderRadius.md}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.units.margin.sm}px;
`;

export const ButtonText = styled.Text<CustomThemeProps>`
  font-family: 'Poppins_600SemiBold';
  color: ${props => props.theme.colors.secondaryLight};
  margin-left: ${props => props.theme.units.margin.md}px;
  text-transform: capitalize;
  font-size: ${props => props.theme.units.fontSize.header}px;
`;

export const ManageActivityButton = styled.TouchableOpacity<CustomThemeProps>`
  height: ${props => props.theme.constants.BUTTON_HEIGHT}px;
  width: 100%;
  flex-direction: row;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.units.borderRadius.md}px;
  align-items: center;
  justify-content: center;
`;

export const TotalExpensesContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const TotalExpensesText = styled.Text<CustomThemeProps>`
  font-size: ${props => props.theme.units.fontSize.xsm}px;
  font-family: 'Archivo_400Regular';
  color: ${props => props.theme.colors.secondaryDark};
  margin: ${props => props.theme.units.margin.md}px 0;
`;
