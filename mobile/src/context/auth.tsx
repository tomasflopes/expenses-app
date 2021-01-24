import React, { useState } from 'react';
import { createContext } from 'react';

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

  function SignOut() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
