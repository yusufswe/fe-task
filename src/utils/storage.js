export const getUserAuth = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : { isAuthenticated: false, user: null };
};

export const setUserAuth = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
