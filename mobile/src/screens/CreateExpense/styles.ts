import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.units.margin.lg
  },

  header: {
    fontSize: theme.units.fontSize.big,
    color: theme.colors.textHeaders,
    fontFamily: theme.fonts.Poppins.bold,

    marginVertical: theme.units.margin.sm
  },

  formContainer: {
    justifyContent: 'center'
  },

  input: {
    marginBottom: theme.units.margin.sm
  },

  confirmButton: {
    marginBottom: theme.units.margin.xlg
  },

  currencyText: {
    fontSize: theme.units.fontSize.big,
    position: 'absolute',
    right: theme.units.margin.md,
    top: theme.units.margin.sm + theme.units.margin.tiny,

    color: theme.colors.secondaryDark
  }
});

export default styles;
