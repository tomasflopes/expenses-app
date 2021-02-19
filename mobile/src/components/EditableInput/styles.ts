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
    borderWidth: 1,
    borderColor: theme.colors.secondaryDark,
    borderRadius: theme.units.borderRadius.sm,

    backgroundColor: theme.colors.disabledInputBackground,

    paddingVertical: theme.units.margin.sm,
    paddingHorizontal: theme.units.margin.md
  },

  input: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,

    backgroundColor: theme.colors.secondaryLight,

    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: theme.units.borderRadius.sm,

    paddingVertical: theme.units.margin.sm,
    paddingHorizontal: theme.units.margin.md
  },

  disabledPlaceholder: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,
    color: theme.colors.textBase
  }
});

export const placeholderColor = theme.colors.textBase;

export default styles;
