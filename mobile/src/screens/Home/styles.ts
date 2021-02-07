import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },

  deadZone: {
    height: theme.constants.DEADZONE_HEIGHT,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },

  profileInfoContainer: {
    width: '90%',
    backgroundColor: theme.colors.background,
    height: theme.constants.PROFILE_CONTAINER_HEIGHT,
    borderRadius: theme.units.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.units.margin.md
  },

  personalInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  informationText: {
    fontFamily: theme.fonts.Archivo.regular,
    color: theme.colors.primaryDark,
    marginRight: theme.units.margin.xsm,
    fontSize: theme.units.fontSize.sm
  },

  dot: {
    height: theme.constants.DOT_WIDTH,
    width: theme.constants.DOT_WIDTH,
    borderRadius: theme.constants.DOT_WIDTH / 2,
    backgroundColor: theme.colors.primaryDark,
    marginRight: theme.units.margin.xsm
  },

  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  balanceTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  balanceText: {
    fontSize: theme.units.fontSize.header,
    top: theme.units.margin.xsm,
    fontFamily: theme.fonts.Poppins.medium,
    color: theme.colors.primaryDark,
    marginRight: theme.units.margin.tiny
  },

  currencyText: {
    fontSize: theme.units.fontSize.sm,
    fontFamily: theme.fonts.Poppins.regular,
    color: theme.colors.primaryDark,
    marginRight: theme.units.margin.xsm
  },

  hiddenBalance: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  hiddenText: {
    fontFamily: theme.fonts.Poppins.light,
    color: theme.colors.primaryDark,
    fontSize: theme.units.fontSize.xsm
  },

  eyeOnIcon: {
    fontSize: 22,
    color: theme.colors.primaryDark,
    marginBottom: -4
  },

  eyeOffIcon: {
    marginTop: 8,

    color: theme.colors.primaryDark,
    fontSize: 22
  },

  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    position: 'absolute',

    top: theme.constants.DEADZONE_HEIGHT - theme.constants.AVATAR_WIDTH / 2
  },

  avatarButton: {
    height: theme.constants.AVATAR_WIDTH,
    width: theme.constants.AVATAR_WIDTH,

    borderRadius: theme.constants.AVATAR_WIDTH / 2
  },

  avatar: {
    height: theme.constants.AVATAR_WIDTH,
    width: theme.constants.AVATAR_WIDTH
  },
  avatarOverlay: {
    width: theme.constants.AVATAR_WIDTH,
    height: theme.constants.AVATAR_WIDTH,
    borderRadius: theme.constants.AVATAR_WIDTH / 2,
    backgroundColor: theme.colors.avatarOverlay,
    alignItems: 'center',
    justifyContent: 'center'
  },

  viewProfileTextButton: {
    padding: 2
  },

  viewProfileText: {
    fontFamily: theme.fonts.Poppins.bold,
    textAlign: 'center',
    fontSize: theme.units.fontSize.xsm,
    color: theme.colors.secondaryLight
  },

  mainContainer: {
    flex: 3,
    marginTop: theme.units.margin.xxl,
    paddingHorizontal: theme.units.margin.lg
  },

  header: {
    textTransform: 'capitalize',
    color: theme.colors.textHeaders,
    fontFamily: theme.fonts.Poppins.bold,
    fontSize: theme.units.fontSize.md,
    marginBottom: theme.units.margin.md
  },

  moreButton: {
    alignSelf: 'center',
    top: theme.units.margin.xsm
  },

  moreButtonText: {
    fontFamily: theme.fonts.Poppins.bold,
    fontSize: theme.units.fontSize.big,
    color: theme.colors.primary,
    marginBottom: theme.units.margin.md
  },

  buttonsContainer: {
    justifyContent: 'space-between'
  },

  addExpenseButton: {
    height: theme.constants.BUTTON_HEIGHT,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: theme.colors.confirm,
    borderRadius: theme.units.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.units.margin.sm
  },

  buttonText: {
    fontFamily: theme.fonts.Poppins.semiBold,
    color: theme.colors.secondaryLight,
    marginLeft: theme.units.margin.md,
    textTransform: 'capitalize',
    fontSize: theme.units.fontSize.header
  },

  manageActivityButton: {
    height: theme.constants.BUTTON_HEIGHT,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.units.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center'
  },

  totalExpensesContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  totalExpensesText: {
    fontSize: theme.units.fontSize.xsm,
    fontFamily: theme.fonts.Archivo.regular,
    color: theme.colors.secondaryDark,
    marginVertical: theme.units.margin.md
  }
});

export default styles;
