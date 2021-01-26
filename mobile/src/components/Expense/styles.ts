import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ExpenseTitle = styled.Text`
  color: ${colors.textHeaders};
  font-size: 15px;
  font-family: 'Archivo_400Regular';
`;

export const ExpenseDate = styled.Text`
  font-family: 'Archivo_400Regular';
  color: ${colors.secondaryDark};
  font-size: 12px;
`;

export const IncomeAmount = styled.Text`
  font-family: 'Poppins_700Bold';
  color: ${colors.confirm};
  font-size: 14px;
`;

export const ExpenseAmount = styled.Text`
  font-family: 'Poppins_700Bold';
  color: ${colors.cancel};
  font-size: 14px;
`;
