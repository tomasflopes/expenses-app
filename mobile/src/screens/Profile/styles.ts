import styled from 'styled-components/native';
import { CustomThemeProps } from '../../styles/theme';

export const Container = styled.View`
  flex: 1;

  align-items: center;
`;

export const DeadZone = styled.View<CustomThemeProps>`
  width: 100%;
  height: ${props => props.theme.constants.DEADZONE_HEIGHT}px;
  background: ${props => props.theme.colors.primary};

  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image<CustomThemeProps>`
  width: ${props => props.theme.constants.AVATAR_WIDTH}px;
  height: ${props => props.theme.constants.AVATAR_WIDTH}px;

  border-radius: ${props => props.theme.constants.AVATAR_WIDTH / 2}px;
`;

export const UserInformationContainer = styled.View<CustomThemeProps>`
  align-items: center;
  justify-content: flex-start;

  margin-top: ${props => props.theme.units.margin.sm}px;
`;

export const Username = styled.Text<CustomThemeProps>`
  color: ${props => props.theme.colors.secondaryLight};

  font-size: ${props => props.theme.units.fontSize.md}px;
  font-family: ${props => props.theme.fonts.Poppins.bold};
`;

export const Occupation = styled.Text<CustomThemeProps>`
  color: ${props => props.theme.colors.secondaryLight};

  font-size: ${props => props.theme.units.fontSize.sm}px;
  font-family: ${props => props.theme.fonts.Archivo.regular};
`;

export const PersonalInfoContainer = styled.ScrollView<CustomThemeProps>`
  width: 80%;

  top: -20px;

  background: ${props => props.theme.colors.secondaryLight};
  border-radius: ${props => props.theme.units.borderRadius.md}px;

  padding: ${props => props.theme.units.margin.lg}px
    ${props => props.theme.units.margin.sm}px;
`;

export const HeaderText = styled.Text<CustomThemeProps>`
  color: ${props => props.theme.colors.textHeaders};

  font-family: ${props => props.theme.fonts.Poppins.bold};
  font-size: ${props => props.theme.units.fontSize.big}px;

  padding-bottom: ${props => props.theme.units.margin.sm}px;

  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.secondary};
`;

export const InputContainer = styled.View``;

export const Label = styled.Text``;

export const Input = styled.View``;
