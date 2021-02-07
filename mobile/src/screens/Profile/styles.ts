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

    marginTop: theme.units.margin.sm
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

    marginTop: -20,

    backgroundColor: theme.colors.secondaryLight,
    borderRadius: theme.units.borderRadius.md,

    paddingVertical: theme.units.margin.lg,
    paddingHorizontal: theme.units.margin.sm
  },

  headerText: {
    color: theme.colors.textHeaders,

    fontFamily: theme.fonts.Poppins.bold,
    fontSize: theme.units.fontSize.big,

    paddingBottom: theme.units.margin.sm,

    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary
  },

  spacer: {
    height: theme.units.margin.lg
  },

  inputContainer: {
    marginTop: theme.units.margin.sm
  }
});

export default styles;
