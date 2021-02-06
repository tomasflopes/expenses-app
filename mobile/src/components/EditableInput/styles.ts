import styled from 'styled-components/native';

import { CustomThemeProps } from '../../styles/theme';

export const Container = styled.View<CustomThemeProps>`
  margin-bottom: ${props => props.theme.units.margin.sm}px;
`;

export const Label = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  font-size: ${props => props.theme.units.fontSize.md}px;
  color: ${props => props.theme.colors.secondaryDark};

  margin-bottom: ${props => props.theme.units.margin.xsm}px;
`;

export const InputContainer = styled.View<CustomThemeProps>`
  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid ${props => props.theme.colors.secondaryDark};
  border-radius: ${props => props.theme.units.borderRadius.sm}px;
  padding: ${props => props.theme.units.margin.sm}px
    ${props => props.theme.units.margin.md}px;
`;

export const Input = styled.TextInput<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  font-size: ${props => props.theme.units.fontSize.big}px;
  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.textBase};
  border: 1px solid ${props => props.theme.colors.secondaryDark};
  border-radius: ${props => props.theme.units.borderRadius.sm}px;
  padding: ${props => props.theme.units.margin.sm}px
    ${props => props.theme.units.margin.md}px;
`;

export const DisabledPlaceholder = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  font-size: ${props => props.theme.units.fontSize.input}px;
  color: ${props => props.theme.colors.inputText};
`;
