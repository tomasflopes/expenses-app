import React from 'react';

import {
  Container,
  ExpenseTitle,
  ExpenseDate,
  IncomeAmount,
  ExpenseAmount
} from './styles';

interface Props {
  name: string;
  date: string;
  amount: number;
}

const Expense: React.FC<Props> = ({ name, date, amount }) => {
  return (
    <Container>
      <ExpenseTitle>{name}</ExpenseTitle>
      <ExpenseDate>{date}</ExpenseDate>
      {amount > 0 ? (
        <IncomeAmount>+{amount.toFixed(2)}€</IncomeAmount>
      ) : (
        <ExpenseAmount>{amount.toFixed(2)}€</ExpenseAmount>
      )}
    </Container>
  );
};

export default Expense;
