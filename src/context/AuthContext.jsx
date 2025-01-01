import { createContext, useContext, useEffect, useState } from "react";
import { getUserAuth, setUserAuth } from "../utils/storage";
import { USER } from "../utils/constants";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getUserAuth());

  useEffect(() => {
    setUserAuth(user);
  }, [user]);

  const login = (username, password) => {
    if (username === USER.username && password === USER.password) {
      setUser({ isAuthenticated: true, user: USER });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser({ isAuthenticated: false, user: null });
  };

  const updateUserProfile = (username) => {
    if (user.user) {
      const updatedUser = { ...user.user, username };
      setUser({ ...user, user: updatedUser });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Gunakan di dalam AuthProvider");
  }
  return context;
};
