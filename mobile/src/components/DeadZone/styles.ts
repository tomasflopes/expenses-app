import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: theme.constants.DEADZONE_HEIGHT,
    backgroundColor: theme.colors.primary,
    alignItems: 'center'
  },

  logoContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  slogan: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.big,
    color: theme.colors.primaryLight,
    position: 'absolute',
    top: theme.constants.DEADZONE_HEIGHT - 64,
    left: '24%'
  }
});

export default styles;
