import { LOGIN_REQUESTING, LOGOUT_REQUESTING, LOGIN_SUCCESS } from './constants';


export const loginRequest = () => ({
  type: LOGIN_REQUESTING,
});

export const loginRequestSuccessful = function loginRequestSuccessful(userData) {
  debugger;
  return {
    type: LOGIN_SUCCESS,
    userData,
  }
}

export const logoutRequest = function logoutRequest() {
  return {
    type: LOGOUT_REQUESTING,
  };
};
