import { useState, useEffect } from 'react';

import { Keyboard } from 'react-native';

const useOpenKeyboard = (): boolean => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardOpen(true)
    );

    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardOpen(false)
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  });

  return keyboardOpen;
};

export default useOpenKeyboard;
