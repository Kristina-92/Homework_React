export const getToken = () => {
  return localStorage.getItem("token"); //proverka dali ke imame token
};

export const setUserStorage = (token, user) => {
  localStorage.setItem("token", token); // da go zacuva tokenot
  localStorage.setItem("user", user); // da go zacuva user-ot (kako string)
};

export const removeUserStorage = () => {
  localStorage.removeItem("token"); // Remove token
  localStorage.removeItem("user"); // Remove user
  window.location.reload(); // Reload page to reset state
};
