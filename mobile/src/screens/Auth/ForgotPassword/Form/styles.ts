import { StyleSheet } from 'react-native';

import theme from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.background
  },

  content: {
    paddingHorizontal: theme.units.margin.xlg
  },

  headerText: {
    color: theme.colors.textHeaders,
    fontSize: theme.units.fontSize.bigHeader,

    fontFamily: theme.fonts.Poppins.bold,

    textTransform: 'capitalize',

    marginTop: theme.units.margin.md
  },

  paragraph: {
    marginTop: theme.units.margin.md,
    fontSize: theme.units.fontSize.md,

    color: theme.colors.black,

    fontFamily: theme.fonts.Archivo.regular
  },

  input: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,
    backgroundColor: theme.colors.inputBackground,
    color: theme.colors.inputText,
    borderWidth: 1,
    borderColor: theme.colors.secondaryDark,
    borderRadius: theme.units.borderRadius.sm,
    paddingVertical: theme.units.margin.sm,
    paddingHorizontal: theme.units.margin.md,
    marginTop: theme.units.margin.xlg
  }
});

export default styles;
