import { StyleSheet } from 'react-native';

import theme from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.background
  },

  mainContainer: {
    flex: 3,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.units.margin.lg
  },

  firstRow: {
    marginTop: theme.units.margin.xlg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  loginHeader: {
    fontFamily: theme.fonts.Poppins.bold,
    fontSize: theme.units.fontSize.bigHeader,
    color: theme.colors.textHeaders
  },

  createAccountRedirect: {
    fontFamily: theme.fonts.Archivo.regular,
    color: theme.colors.primary
  },

  inputContainer: {
    marginTop: theme.units.margin.xlg
  },

  input: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,
    backgroundColor: theme.colors.inputBackground,
    color: theme.colors.inputText,
    borderWidth: 1,
    borderColor: theme.colors.secondaryDark,
    borderTopLeftRadius: theme.units.borderRadius.sm,
    borderTopRightRadius: theme.units.borderRadius.sm,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: theme.units.margin.sm,
    paddingHorizontal: theme.units.margin.md
  },

  secondInput: {
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: theme.units.borderRadius.sm,
    borderBottomRightRadius: theme.units.borderRadius.sm
  },

  forgotPasswordButton: {
    marginTop: theme.units.margin.lg,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  forgotPassword: {
    color: theme.colors.inputText
  }
});

export default styles;
