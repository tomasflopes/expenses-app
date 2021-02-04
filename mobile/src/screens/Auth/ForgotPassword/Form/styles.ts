import styled from 'styled-components/native';

import { TouchableOpacityProps } from 'react-native';

import { CustomThemeProps } from '../../../../styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View<CustomThemeProps>`
  padding: 0 ${props => props.theme.units.margin.xlg}px;
`;

export const HeaderText = styled.Text<CustomThemeProps>`
  color: ${props => props.theme.colors.textHeaders};
  font-size: ${props => props.theme.units.fontSize.bigHeader}px;

  font-family: ${props => props.theme.fonts.Poppins.bold};

  text-transform: capitalize;

  margin-top: ${props => props.theme.units.margin.md}px;
`;

export const Paragraph = styled.Text<CustomThemeProps>`
  margin-top: ${props => props.theme.units.margin.md}px;

  font-size: ${props => props.theme.units.fontSize.md}px;

  color: ${props => props.theme.colors.black};

  font-family: ${props => props.theme.fonts.Archivo.regular};
`;

export const Input = styled.TextInput<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  font-size: ${props => props.theme.units.fontSize.input}px;
  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.inputText};
  border: 1px solid ${props => props.theme.colors.secondaryDark};
  border-radius: ${props => props.theme.units.borderRadius.sm}px;
  padding: ${props => props.theme.units.margin.sm}px
    ${props => props.theme.units.margin.md}px;

  margin-top: ${props => props.theme.units.margin.xlg}px;
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

  text-transform: capitalize;
`;
