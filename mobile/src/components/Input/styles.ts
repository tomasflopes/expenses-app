import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  input: {
    fontFamily: theme.fonts.Archivo.regular,
    fontSize: theme.units.fontSize.input,

    backgroundColor: theme.colors.secondaryLight,

    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: theme.units.borderRadius.sm,

    height: theme.units.margin.sm * 2 + theme.units.fontSize.input + 10,

    paddingVertical: theme.units.margin.sm,
    paddingHorizontal: theme.units.margin.md,

    textAlignVertical: 'top'
  }
});

export default styles;
