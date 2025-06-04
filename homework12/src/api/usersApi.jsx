import { api } from "./../config/properties";
import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get(`${api.root}/users`);
    return await Promise.resolve(res.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const removeUser = async (userId) => {
  try {
    const res = await axios.delete(`${api.root}/users/${userId}`);
    return await Promise.resolve(res.data);
  } catch (err) {
    return await Promise.reject(err);
  }
};
