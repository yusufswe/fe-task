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
  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Gunakan di dalam AuthProvider");
  }
  return context;
};
