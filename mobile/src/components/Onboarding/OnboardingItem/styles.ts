import { StyleSheet } from 'react-native';

import theme from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center'
  },

  image: {
    flex: 6,
    justifyContent: 'center'
  },

  textContainer: {
    flex: 4
  },

  title: {
    fontFamily: theme.fonts.Poppins.bold,
    fontSize: theme.units.fontSize.onBoardingTitle,
    color: theme.colors.textHeaders,

    textAlign: 'center'
  },

  description: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,
    color: theme.colors.textBase,

    textAlign: 'center',

    paddingHorizontal: 48
  }
});

export default styles;
