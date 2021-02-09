import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  buttonOverlay: {
    marginTop: theme.units.margin.xlg,
    height: theme.constants.BUTTON_HEIGHT
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.colors.confirm,
    width: '100%',
    height: theme.constants.BUTTON_HEIGHT,
    borderRadius: theme.units.borderRadius.md,

    position: 'absolute'
  },

  disabledButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.colors.secondary,
    width: '100%',
    height: theme.constants.BUTTON_HEIGHT,
    borderRadius: theme.units.borderRadius.md,

    position: 'absolute'
  },

  buttonText: {
    fontFamily: theme.fonts.Poppins.semiBold,

    fontSize: theme.units.fontSize.bigHeader,

    textTransform: 'capitalize',

    color: theme.colors.secondaryLight,

    position: 'absolute',
    top: theme.constants.BUTTON_HEIGHT / 4
  },

  disabledButtonText: {
    fontFamily: theme.fonts.Poppins.semiBold,

    fontSize: theme.units.fontSize.bigHeader,

    textTransform: 'capitalize',

    color: theme.colors.secondaryDark,

    position: 'absolute',
    top: theme.constants.BUTTON_HEIGHT / 4
  }
});

export default styles;
