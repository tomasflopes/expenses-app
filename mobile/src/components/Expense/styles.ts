import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  expenseTitle: {
    flex: 1,
    color: theme.colors.textHeaders,
    fontSize: theme.units.fontSize.md,
    fontFamily: theme.fonts.Archivo.regular
  },

  expenseDate: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.Archivo.regular,
    color: theme.colors.secondaryDark,
    fontSize: theme.units.fontSize.xsm
  },

  amount: {
    flex: 1,
    textAlign: 'right',
    fontFamily: theme.fonts.Poppins.bold,
    fontSize: theme.units.fontSize.md
  },

  income: {
    color: theme.colors.confirm
  },

  expense: {
    color: theme.colors.cancel
  }
});

export default styles;
