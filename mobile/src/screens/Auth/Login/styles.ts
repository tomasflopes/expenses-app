import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

import { CustomThemeProps } from '../../../styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const MainContainer = styled.View<CustomThemeProps>`
  flex: 3;
  background: ${props => props.theme.colors.background};
  padding: 0 ${props => props.theme.units.margin.lg}px;
`;

export const FirstRow = styled.View<CustomThemeProps>`
  margin-top: ${props => props.theme.units.margin.xlg}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LoginHeader = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Poppins.bold};
  font-size: ${props => props.theme.units.fontSize.bigHeader}px;
  color: ${props => props.theme.colors.textHeaders};
`;

export const CreateAccountRedirect = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  color: ${props => props.theme.colors.primary};
`;

export const InputContainer = styled.View<CustomThemeProps>`
  margin-top: ${props => props.theme.units.margin.xlg}px;
`;

export const Input = styled.TextInput<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  font-size: ${props => props.theme.units.fontSize.input}px;
  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.inputText};
  border: 1px solid ${props => props.theme.colors.secondaryDark};
  border-top-left-radius: ${props => props.theme.units.borderRadius.sm}px;
  border-top-right-radius: ${props => props.theme.units.borderRadius.sm}px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: ${props => props.theme.units.margin.sm}px
    ${props => props.theme.units.margin.md}px;
`;

export const SecondInput = styled.TextInput<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  font-size: ${props => props.theme.units.fontSize.input}px;
  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.inputText};

  border: 1px solid ${props => props.theme.colors.secondaryDark};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: ${props => props.theme.units.borderRadius.sm}px;
  border-bottom-right-radius: ${props => props.theme.units.borderRadius.sm}px;
  border-top-width: 0;
  padding: ${props => props.theme.units.margin.sm}px
    ${props => props.theme.units.margin.md}px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity<CustomThemeProps>`
  margin-top: ${props => props.theme.units.margin.lg}px;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

export const ForgotPassword = styled.Text<CustomThemeProps>`
  color: ${props => props.theme.colors.inputText};
`;

interface ButtonProps extends CustomThemeProps, TouchableOpacityProps {
  active: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  margin-top: ${props => props.theme.units.margin.xlg}px;
  align-items: center;
  justify-content: center;
  height: ${props => props.theme.constants.BUTTON_HEIGHT}px;
  border-radius: ${props => props.theme.units.borderRadius.md}px;

  background: ${props =>
    props.active ? props.theme.colors.confirm : props.theme.colors.secondary};
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: ${props => props.theme.fonts.Poppins.semiBold};
  color: ${props =>
    props.active
      ? props.theme.colors.secondaryDark
      : props.theme.colors.secondaryLight};

  font-size: ${props => props.theme.units.fontSize.bigHeader}px;
`;
