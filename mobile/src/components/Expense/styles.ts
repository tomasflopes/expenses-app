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

  incomeAmount: {
    textAlign: 'right',
    flex: 1,
    fontFamily: theme.fonts.Poppins.bold,
    color: theme.colors.confirm,
    fontSize: theme.units.fontSize.md
  },

  expenseAmount: {
    fontFamily: theme.fonts.Poppins.bold,
    color: theme.colors.cancel,
    fontSize: theme.units.fontSize.md
  }
});

export default styles;
