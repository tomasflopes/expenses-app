import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: theme.units.margin.md,
    paddingTop: theme.units.margin.xlg,

    backgroundColor: theme.colors.primary,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  backArrowButton: {
    flex: 1
  },

  arrowIcon: {
    fontSize: 24,
    color: theme.colors.secondaryLight
  },

  title: {
    textAlign: 'center',
    overflow: 'hidden',
    fontFamily: theme.fonts.Poppins.semiBold,
    color: theme.colors.secondaryLight,
    fontSize: theme.units.fontSize.sm,
    width: '80%'
  },

  emptySpace: {
    flex: 1
  }
});

export default styles;
