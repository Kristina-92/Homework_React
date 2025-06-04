import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFail,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFail,
} from "./actions";
import { getUsers, removeUser } from "./../../../api/usersApi";

export const fetchUsers = (requestParams) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest(requestParams));
    return getUsers(requestParams)
      .then((res) => {
        dispatch(fetchUsersSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(fetchUsersFail(err.message));
        return err.message;
      });
  };
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    dispatch(deleteUserRequest(userId));
    return removeUser(userId)
      .then((res) => {
        dispatch(deleteUserSuccess(userId));
        return res;
      })
      .catch((err) => {
        dispatch(deleteUserFail(err.message));
        return err.message;
      });
  };
};
