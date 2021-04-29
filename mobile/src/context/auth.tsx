import React, { useState, createContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = createContext({
  signed: false,
  SignIn: () => {},
  SignOut: () => {}
});

export const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState(false);

  function SignIn(): void {
    setSigned(true);
  }

  async function SignOut() {
    await AsyncStorage.clear(); // Clears as the first time
    //await AsyncStorage.removeItem('jwt');
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
