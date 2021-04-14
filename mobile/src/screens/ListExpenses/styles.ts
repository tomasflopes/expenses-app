import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,

    justifyContent: 'center'
  },

  expensesContainer: {
    flex: 1,

    paddingHorizontal: theme.units.margin.xlg,
    paddingTop: theme.units.margin.xlg
  },

  title: {
    fontSize: 16,
    color: theme.colors.textHeaders,

    fontFamily: theme.fonts.Poppins.bold,

    marginBottom: theme.units.margin.md
  },

  expenseContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginBottom: theme.units.margin.sm
  },

  expandDetailsContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  expandDetailsIcon: {
    fontSize: 16,
    color: theme.colors.secondaryDark,

    marginRight: theme.units.margin.xsm
  },

  expandDetailsText: {
    fontSize: theme.units.fontSize.md,

    color: theme.colors.black,

    fontFamily: theme.fonts.Poppins.light
  }
});

export default styles;
