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
    backgroundColor: theme.colors.disabledInputBackground,
    borderWidth: 1,
    borderColor: theme.colors.secondaryDark,
    borderRadius: theme.units.borderRadius.sm,
    padding: theme.units.margin.sm
  },

  disabledPlaceholder: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,
    color: theme.colors.textBase
  },

  addNewAreaContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center'
  },

  addNewAreaIcon: {
    fontSize: 18,
    color: theme.colors.textBase,

    marginRight: theme.units.margin.tiny
  },

  addNewAreaText: {
    fontFamily: theme.fonts.Archivo.semiBold,
    fontSize: theme.units.fontSize.md,
    color: theme.colors.textBase,

    marginBottom: 2
  }
});

export default styles;
