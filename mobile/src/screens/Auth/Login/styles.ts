import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  deadZone: {
    flex: 2,
    backgroundColor: colors.primary,
    alignItems: 'center'
  },

  logoContainer: {
    width: 350,
    height: 230,
    position: 'relative'
  },

  slogan: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 18,
    color: colors.primaryLight,
    position: 'absolute',
    bottom: 0,
    left: 85
  },

  mainContainer: {
    flex: 3,
    backgroundColor: colors.background,
    paddingHorizontal: 32
  },

  firstRow: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  loginHeader: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 22,
    color: colors.textHeaders
  },

  createAccountRedirect: {
    fontFamily: 'Archivo_400Regular',
    color: colors.primary
  },

  inputContainer: {
    marginTop: 40
  },

  input: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 16,
    backgroundColor: colors.inputBackground,
    color: colors.inputText,
    borderWidth: 1,
    borderColor: colors.secondaryDark,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingHorizontal: 24,
    paddingVertical: 16
  },

  bottomInput: {
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },

  forgotPasswordContainer: {
    marginTop: 32,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  forgotPassword: {
    color: colors.inputText
  },

  button: {
    marginTop: 40,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    borderRadius: 8
  },

  buttonDisabled: {
    marginTop: 40,
    backgroundColor: colors.confirm,
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    borderRadius: 8
  },

  buttonText: {
    color: colors.secondaryLight,
    fontSize: 22,
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonTextDisabled: {
    color: colors.secondaryDark,
    fontSize: 22,
    fontFamily: 'Poppins_600SemiBold'
  }
});

export default styles;
