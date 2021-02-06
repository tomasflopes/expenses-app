import { StyleSheet } from 'react-native';

import theme from '../../styles';
const styles = StyleSheet.create({
  container: {
    marginBottom: theme.units.margin.sm
  },

  label: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.md,
    color: theme.colors.secondaryDark,

    marginBottom: theme.units.margin.xsm
  },

  inputContainer: {
    backgroundColor: theme.colors.inputBackground,
    borderWidth: 1,
    borderColor: theme.colors.secondaryDark,
    borderRadius: theme.units.borderRadius.sm,
    paddingVertical: theme.units.margin.sm,
    paddingHorizontal: theme.units.margin.md
  },

  input: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.big,
    color: theme.colors.textBase,
    backgroundColor: theme.colors.inputBackground,
    borderWidth: 1,
    borderColor: theme.colors.secondaryDark,
    paddingVertical: theme.units.margin.sm,
    paddingHorizontal: theme.units.margin.md
  },

  disabledPlaceholder: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,
    color: theme.colors.inputText
  }
});

export default styles;
