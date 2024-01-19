import {LOGOUT, SAVE_USER} from '../../assets/constant/actionTypes';

export function saveUser(user) {
  console.log('user ssd :>> ', user);
  return {
    type: SAVE_USER,
    payload: user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
