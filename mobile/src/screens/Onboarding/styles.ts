import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    paddingTop: theme.units.margin.md
  },

  paginator: {
    flexDirection: 'row',
    height: 64
  },

  dot: {
    height: 10,
    borderRadius: 10 / 2,

    marginHorizontal: theme.units.margin.xsm
  },

  nextIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: theme.units.margin.xlg,

    width: 80,
    height: 80,
    borderRadius: 80 / 2
  },

  animatedCircle: {
    position: 'absolute',
    bottom: 0
  },

  icon: {
    fontSize: 40,
    color: theme.colors.primary
  }
});

export default styles;
