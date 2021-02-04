import { useState, useEffect } from 'react';

import { Keyboard } from 'react-native';

const useOpenKeyboard = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });

    return () => {
      Keyboard.removeListener('keyboardDidShow', () => {
        setKeyboardOpen(true);
      });
      Keyboard.removeListener('keyboardDidHide', () => {
        setKeyboardOpen(false);
      });
    };
  }, []);

  return keyboardOpen;
};

export default useOpenKeyboard;
