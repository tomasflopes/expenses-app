import { StyleSheet } from 'react-native';

import theme from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: theme.constants.ALERT_HEIGHT,
    justifyContent: 'flex-end'
  },

  contentContainer: {
    width: '100%',

    paddingHorizontal: theme.units.margin.md,
    height: theme.constants.BUTTON_HEIGHT,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    opacity: 0.95,
    elevation: 60,

    borderTopLeftRadius: theme.units.borderRadius.sm,
    borderTopRightRadius: theme.units.borderRadius.sm
  },

  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  messageIcon: {
    color: theme.colors.textBase,
    fontSize: 14
  },

  messageText: {
    color: theme.colors.textBase,
    marginLeft: theme.units.margin.xsm
  },

  undoButtonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.textBase
  },

  undoButtonText: {
    color: theme.colors.textBase,
    fontSize: theme.units.fontSize.md
  }
});

export default styles;
