import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  button: {
    marginTop: theme.units.margin.xlg,
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.constants.BUTTON_HEIGHT,
    borderRadius: theme.units.borderRadius.md,

    backgroundColor: theme.colors.secondary
  },

  activeButton: {
    backgroundColor: theme.colors.confirm
  },

  activeButtonText: {
    color: theme.colors.secondaryLight
  },

  buttonText: {
    fontFamily: theme.fonts.Poppins.semiBold,
    color: theme.colors.secondaryDark,

    fontSize: theme.units.fontSize.bigHeader,

    textTransform: 'capitalize'
  }
});

export default styles;
