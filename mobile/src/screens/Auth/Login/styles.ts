import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

import { CustomThemeProps } from '../../../styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const DeadZone = styled.View<CustomThemeProps>`
  flex: 2;
  background: ${props => props.theme.colors.primary};
  align-items: center;
`;

export const LogoContainer = styled.View`
  width: 350px;
  height: 230px;
  position: relative;
`;

export const Slogan = styled.Text<CustomThemeProps>`
  font-family: 'Archivo_400Regular';
  font-size: 18px;
  color: ${props => props.theme.colors.primaryLight};
  position: absolute;
  bottom: 0;
  left: 85px;
`;

export const MainContainer = styled.View<CustomThemeProps>`
  flex: 3;
  background: ${props => props.theme.colors.background};
  padding: 0 32px;
`;

export const FirstRow = styled.View`
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LoginHeader = styled.Text<CustomThemeProps>`
  font-family: 'Poppins_700Bold';
  font-size: 22px;
  color: ${props => props.theme.colors.textHeaders};
`;

export const CreateAccountRedirect = styled.Text<CustomThemeProps>`
  font-family: 'Archivo_400Regular';
  color: ${props => props.theme.colors.primary};
`;

export const InputContainer = styled.View`
  margin-top: 40px;
`;

export const Input = styled.TextInput<CustomThemeProps>`
  font-family: 'Archivo_400Regular';
  font-size: 16px;
  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.inputText};
  border: 1px solid ${props => props.theme.colors.secondaryDark};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 16px 24px;
`;

export const SecondInput = styled.TextInput<CustomThemeProps>`
  font-family: 'Archivo_400Regular';
  font-size: 16px;
  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.inputText};

  border: 1px solid ${props => props.theme.colors.secondaryDark};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-width: 0;
  padding: 16px 24px;
`;

export const ForgotPasswordContainer = styled.View`
  margin-top: 32px;
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
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  height: 65px;
  border-radius: 8px;

  background: ${props =>
    props.active ? props.theme.colors.confirm : props.theme.colors.secondary};
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: 'Poppins_600SemiBold';
  color: ${props =>
    props.active
      ? props.theme.colors.secondaryDark
      : props.theme.colors.secondaryLight};

  font-size: 22px;
`;
