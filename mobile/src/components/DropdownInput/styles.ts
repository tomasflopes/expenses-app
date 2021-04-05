import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondaryLight,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: theme.units.borderRadius.sm,
    paddingVertical: theme.units.margin.sm,
    paddingHorizontal: theme.units.margin.md,

    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  placeholder: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,

    color: theme.colors.secondaryDark
  },

  icon: {
    fontSize: theme.units.fontSize.big,

    color: theme.colors.secondaryDark
  },

  dropdownContainer: {
    backgroundColor: theme.colors.secondaryLight,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: theme.colors.secondary,
    borderRadius: theme.units.borderRadius.sm
  },

  dropdownItemContainer: {
    paddingVertical: theme.units.margin.sm,
    paddingHorizontal: theme.units.margin.md
  },

  dropdownItem: {
    fontSize: theme.units.fontSize.input,
    color: theme.colors.black
  }
});

export default styles;
