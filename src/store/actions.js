export const LoginFunction = (username, password) => {
  const token = username + password;
  return {
    type: "LOGIN",
    payload: token,
  };
};
