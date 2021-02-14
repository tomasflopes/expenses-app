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

    width: '100%',
    height: theme.constants.BUTTON_HEIGHT,
    borderRadius: theme.units.borderRadius.md,

    position: 'absolute'
  },

  disabledButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: theme.constants.BUTTON_HEIGHT,
    borderRadius: theme.units.borderRadius.md,

    position: 'absolute'
  },

  buttonText: {
    fontFamily: theme.fonts.Poppins.semiBold,

    fontSize: theme.units.fontSize.bigHeader,

    textTransform: 'capitalize',

    position: 'absolute',
    top: theme.constants.BUTTON_HEIGHT / 4
  },

  disabledButtonText: {
    fontFamily: theme.fonts.Poppins.semiBold,

    fontSize: theme.units.fontSize.bigHeader,

    textTransform: 'capitalize',

    position: 'absolute',
    top: theme.constants.BUTTON_HEIGHT / 4
  }
});

export default styles;
