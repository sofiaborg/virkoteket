import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface AuthContextData {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check if a token exists in session storage
    const token = sessionStorage.getItem("token");
    return !!token;
  });

  const login = () => {
    // Save the token to session storage
    sessionStorage.setItem("token", "your-token-here");
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Remove the token from session storage
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
