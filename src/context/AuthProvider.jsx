import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { loginUser } from "../services/api";

const AuthProvider = ({ children }) => {
  // Читаем userInfo из localStorage только при монтировании
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("userInfo");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Ф-я для обновления и localStorage, и состояния
  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  // Логин: вызывает loginUser и сохраняет нормализованные данные
  const login = async ({ login, password }) => {
    const userData = await loginUser({ login, password });
    const normalizedUser = {
      id: userData.id || userData._id,
      name: userData.name,
      login: userData.login,
      email: userData.email, // если приходит, иначе см. login
      token: userData.token,
    };
    updateUserInfo(normalizedUser);
    return normalizedUser;
  };

  // Logout- очищаем стейт и localStorage
  const logout = () => {
    updateUserInfo(null);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
