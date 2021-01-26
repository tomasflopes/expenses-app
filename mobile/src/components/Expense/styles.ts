import styled from 'styled-components/native';

import { CustomThemeProps } from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ExpenseTitle = styled.Text<CustomThemeProps>`
  color: ${props => props.theme.colors.textHeaders};
  font-size: 15px;
  font-family: 'Archivo_400Regular';
`;

export const ExpenseDate = styled.Text<CustomThemeProps>`
  font-family: 'Archivo_400Regular';
  color: ${props => props.theme.colors.secondaryDark};
  font-size: 12px;
`;

export const IncomeAmount = styled.Text<CustomThemeProps>`
  font-family: 'Poppins_700Bold';
  color: ${props => props.theme.colors.confirm};
  font-size: 14px;
`;

export const ExpenseAmount = styled.Text<CustomThemeProps>`
  font-family: 'Poppins_700Bold';
  color: ${props => props.theme.colors.cancel};
  font-size: 14px;
`;
