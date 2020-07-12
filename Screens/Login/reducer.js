import {
  LOGIN_REQUESTING,
  LOGOUT_SUCCESS,
  LOGOUT_REQUESTING,
  LOGOUT_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export const initialState = {
  requesting: false,
  successful: false,
  isLoggedin: false,
  userData: {},
  messages: [],
  errors: [],
};

const reducer = function loginReducer(state = initialState, action) {
  debugger;
  const reducerObject = {
    [LOGIN_REQUESTING]: () => ({
      requesting: true,
      successful: false,
      isLoggedin: false,
      messages: [{ body: 'Logging in...', time: new Date() }],
      errors: [],
    }),
    [LOGIN_SUCCESS]: () => ({
      errors: [],
      messages: [],
      requesting: false,
      successful: true,
      isLoggedin: true,
      userData: action.login.userData,
    }),
    [LOGIN_ERROR]: () => ({
      errors: state.errors.concat([{
        body: action.error.toString(),
        time: new Date(),
      }]),
      messages: [],
      requesting: false,
      successful: false,
      isLoggedin: false,
    }),
    [LOGOUT_REQUESTING]: () => ({
      requesting: true,
      successful: false,
      messages: [{ body: 'Logging out...', time: new Date() }],
      errors: [],
    }),
    [LOGOUT_ERROR]: () => ({
      errors: state.errors.concat([{
        body: action.error.toString(),
        time: new Date(),
      }]),
      messages: [],
      requesting: false,
      successful: false,
    }),
    [LOGOUT_SUCCESS]: () => ({
      errors: [],
      messages: [],
      requesting: false,
      successful: true,
      isLoggedin: false,
    }),
  }
  debugger;
  const newState = reducerObject[action.type] && reducerObject[action.type]();

return newState || state;
};

export default reducer;
