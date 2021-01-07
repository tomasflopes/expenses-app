import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  expense: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },

  expenseTitle: {
    color: colors.textHeaders,
    fontSize: 15,
    fontFamily: 'Archivo_400Regular'
  },

  expenseDate: {
    fontFamily: 'Archivo_400Regular',
    color: colors.secondaryDark,
    fontSize: 12
  },

  incomeAmount: {
    fontFamily: 'Poppins_700Bold',
    color: colors.confirm,
    fontSize: 14
  },

  expenseAmount: {
    fontFamily: 'Poppins_700Bold',
    color: colors.cancel,
    fontSize: 14
  }
});

export default styles;
