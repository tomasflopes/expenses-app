import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },

  deadZone: {
    height: 235,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },

  profileInfoContainer: {
    width: '90%',
    backgroundColor: colors.background,
    height: 72,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24
  },

  personalInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  informationText: {
    fontFamily: 'Archivo_400Regular',
    color: colors.primaryDark,
    marginRight: 8,
    fontSize: 14
  },

  dot: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: colors.primaryDark,
    marginRight: 8
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
    fontSize: 20,
    top: 8,
    fontFamily: 'Poppins_500Medium',
    color: colors.primaryDark,
    marginRight: 4
  },

  currencyText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: colors.primaryDark,
    marginRight: 8,
    fontWeight: 'bold'
  },

  eyeIcon: {
    marginTop: 8
  },

  hiddenEyeIcon: {
    marginBottom: -4
  },

  hiddenBalance: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  hiddenText: {
    fontFamily: 'Poppins_300Light',
    color: colors.primaryDark,
    fontSize: 13
  },

  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    flex: 1,
    top: 235 - 120 / 2,
    borderRadius: 120 / 2
  },

  avatar: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2
  },

  avatarOverlay: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: 'rgba(0, 119, 194, 0.65)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  viewProfileTextButton: {
    padding: 2
  },

  viewProfileText: {
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    fontSize: 13,
    color: colors.secondaryLight
  },

  mainContainer: {
    flex: 3,
    marginTop: 80,
    paddingHorizontal: 32
  },

  header: {
    textTransform: 'capitalize',
    color: colors.textHeaders,
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    marginBottom: 24
  },

  moreButton: {
    alignSelf: 'center',
    top: 8
  },

  moreButtonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: colors.primary,
    marginBottom: 24
  },

  buttonsContainer: {
    justifyContent: 'space-between'
  },

  addExpenseButton: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.confirm,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },

  buttonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: colors.secondaryLight,
    marginLeft: 24,
    textTransform: 'capitalize',
    fontSize: 20,
    top: 1
  },

  manageActivityButton: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  totalExpensesContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  totalExpensesText: {
    fontSize: 12,
    fontFamily: 'Archivo_400Regular',
    color: colors.secondaryDark,
    flex: 1,
    marginVertical: 24
  }
});

export default styles;
