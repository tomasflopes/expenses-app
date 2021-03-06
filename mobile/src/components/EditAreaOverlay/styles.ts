import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  modal: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  contentContainer: {
    height: 360,
    width: '90%',

    justifyContent: 'center',

    borderRadius: theme.units.borderRadius.md,

    backgroundColor: theme.colors.background,

    paddingHorizontal: theme.units.margin.md,
    paddingVertical: theme.units.margin.lg
  },

  inputContainer: {
    height: theme.constants.BUTTON_HEIGHT,

    backgroundColor: theme.colors.inputBackground,

    borderWidth: 1,
    borderColor: theme.colors.secondaryDark,
    borderRadius: theme.units.borderRadius.sm,

    padding: theme.units.margin.sm
  },

  closeIconContainer: {
    alignSelf: 'flex-end',
    marginBottom: theme.units.margin.sm,
    marginRight: theme.units.margin.md
  },

  closeIcon: {
    fontSize: 24,
    color: theme.colors.cancel
  },

  input: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,
    color: theme.colors.inputText,

    flex: 1
  }
});

export default styles;
