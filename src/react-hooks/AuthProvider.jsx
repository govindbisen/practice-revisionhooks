import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Simulate a login process, set isLoggedIn to true when successful
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Simulate a logout process, set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children prop is provided
};

export function useAuth() {
  return useContext(AuthContext);
}
export { AuthProvider };
