import styled from 'styled-components/native';

import { CustomThemeProps } from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.units.margin.sm}px;
`;

export const ExpenseTitle = styled.Text<CustomThemeProps>`
  color: ${props => props.theme.colors.textHeaders};
  font-size: ${props => props.theme.units.fontSize.md}px;
  font-family: ${props => props.theme.fonts.Archivo.regular};
`;

export const ExpenseDate = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Archivo.regular};
  color: ${props => props.theme.colors.secondaryDark};
  font-size: ${props => props.theme.units.fontSize.xsm}px;
`;

export const IncomeAmount = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Poppins.bold};
  color: ${props => props.theme.colors.confirm};
  font-size:  ${props => props.theme.units.fontSize.md}px;
`;

export const ExpenseAmount = styled.Text<CustomThemeProps>`
  font-family: ${props => props.theme.fonts.Poppins.bold};
  color: ${props => props.theme.colors.cancel};
  font-size: ${props => props.theme.units.fontSize.md}px;
`;
