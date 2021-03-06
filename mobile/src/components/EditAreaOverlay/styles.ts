import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginHorizontal: theme.units.margin.sm,

    justifyContent: 'center',
    alignItems: 'center'
  },

  contentContainer: {
    elevation: 16,
    height: 280,
    width: '95%',

    justifyContent: 'center',

    borderRadius: theme.units.borderRadius.md,

    backgroundColor: theme.colors.background,

    paddingHorizontal: theme.units.margin.md,
    paddingVertical: theme.units.margin.md
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
    position: 'absolute',
    right: 0,
    top: theme.units.margin.md,

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
  },

  confirmButton: {
    alignItems: 'center',
    justifyContent: 'center',

    height: theme.constants.BUTTON_HEIGHT,
    borderRadius: theme.units.borderRadius.md,

    marginTop: theme.units.margin.lg,

    backgroundColor: theme.colors.confirm
  },

  confirmButtonText: {
    fontFamily: theme.fonts.Poppins.semiBold,

    fontSize: theme.units.fontSize.bigHeader,

    textTransform: 'capitalize',

    color: theme.colors.secondaryLight
  }
});

export default styles;
