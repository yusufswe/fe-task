export const getUserAuth = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : { isAuthenticated: false, user: null };
};

export const setUserAuth = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getStoredItems = () => {
  const items = localStorage.getItem("items");
  return items ? JSON.parse(items) : [];
};

export const setStoredItems = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};
