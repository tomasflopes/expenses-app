import styled from 'styled-components/native';

import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const DeadZone = styled.View`
  flex: 2;
  background: ${colors.primary};
  align-items: center;
`;

export const LogoContainer = styled.View`
  width: 350px;
  height: 230px;
  position: relative;
`;

export const Slogan = styled.Text`
  font-family: 'Archivo_400Regular';
  font-size: 18px;
  color: ${colors.primaryLight};
  position: absolute;
  bottom: 0;
  left: 85px;
`;

export const MainContainer = styled.View`
  flex: 3;
  background: ${colors.background};
  padding: 0 32px;
`;

export const FirstRow = styled.View`
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LoginHeader = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 22px;
  color: ${colors.textHeaders};
`;

export const CreateAccountRedirect = styled.Text`
  font-family: 'Archivo_400Regular';
  color: ${colors.primary};
`;

export const InputContainer = styled.View`
  margin-top: 40px;
`;

export const Input = styled.TextInput`
  font-family: 'Archivo_400Regular';
  font-size: 16px;
  background: ${colors.inputBackground};
  color: ${colors.inputText};
  border: 1px solid ${colors.secondaryDark};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 16px 24px;
`;

export const SecondInput = styled.TextInput`
  font-family: 'Archivo_400Regular';
  font-size: 16px;
  background: ${colors.inputBackground};
  color: ${colors.inputText};

  border: 1px solid ${colors.secondaryDark};
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

export const ForgotPassword = styled.Text`
  color: ${colors.inputText};
`;

interface ButtonProps {
  active: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  height: 65px;
  border-radius: 8px;

  background: ${props => (props.active ? colors.confirm : colors.secondary)};
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: 'Poppins_600SemiBold';
  color: ${props =>
    props.active ? colors.secondaryDark : colors.secondaryLight};

  font-size: 22px;
`;
