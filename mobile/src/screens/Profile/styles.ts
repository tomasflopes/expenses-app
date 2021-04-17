import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',

    backgroundColor: theme.colors.background
  },

  mainScroll: {
    width: '100%',
    flex: 1
  },

  scrollContent: {
    width: '100%',
    backgroundColor: theme.colors.primary,

    paddingBottom: theme.units.margin.lg,
    alignItems: 'center',
    justifyContent: 'center'
  },

  avatar: {
    height: theme.constants.AVATAR_WIDTH,
    width: theme.constants.AVATAR_WIDTH,
    borderRadius: theme.constants.AVATAR_WIDTH / 2
  },

  userInformationContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginVertical: theme.units.margin.sm
  },

  username: {
    color: theme.colors.secondaryLight,

    fontSize: theme.units.fontSize.md,
    fontFamily: theme.fonts.Poppins.bold
  },

  occupation: {
    color: theme.colors.secondaryLight,

    fontSize: theme.units.fontSize.sm,
    fontFamily: theme.fonts.Archivo.regular
  },

  personalInfoContainer: {
    width: '80%',

    top: -20,
    marginBottom: theme.units.margin.md,

    backgroundColor: theme.colors.secondaryLight,
    borderRadius: theme.units.borderRadius.md,

    paddingHorizontal: theme.units.margin.sm
  },

  headerText: {
    color: theme.colors.textHeaders,

    fontFamily: theme.fonts.Poppins.bold,
    fontSize: theme.units.fontSize.big,

    marginBottom: theme.units.margin.sm,

    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,

    marginTop: theme.units.margin.lg
  },

  logoutContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',

    marginRight: theme.units.margin.sm,
    alignItems: 'center'
  },

  logoutIcon: {
    fontSize: theme.units.fontSize.input,
    color: theme.colors.cancel,
    marginRight: theme.units.margin.xsm
  },

  logoutText: {
    fontSize: theme.units.fontSize.input,
    color: theme.colors.cancel
  },

  spacer: {
    height: theme.units.margin.lg
  },

  inputContainer: {
    marginTop: theme.units.margin.sm
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    height: theme.constants.BUTTON_HEIGHT,
    borderRadius: theme.units.borderRadius.md,

    marginTop: theme.units.margin.md,
    marginBottom: theme.units.margin.xlg,

    backgroundColor: theme.colors.primary
  },

  saveButton: {
    backgroundColor: theme.colors.confirm
  },

  buttonText: {
    fontFamily: theme.fonts.Poppins.semiBold,

    fontSize: theme.units.fontSize.bigHeader,

    textTransform: 'capitalize',

    color: theme.colors.secondaryLight
  }
});

export default styles;
