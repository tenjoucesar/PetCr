import {
  take, call, put, takeLatest, takeEvery, fork,
} from 'redux-saga/effects';

import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUESTING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './constants';

import {
  loginRequestSuccessful
} from './actions';

function* loginFlow(action) {
  debugger;
  try {
    debugger;
    const userData = yield call(userLogInRequest);
    debugger;

    yield put(loginRequestSuccessful(userData));
    debugger;
    yield put({ type: LOGIN_SUCCESS});
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error });
  }

}

function* loginWatcher() {
  debugger;
  // while (true) {
  //   debugger;
  //   const userLoadingAction = yield take([LOGIN_REQUESTING]);
  //   if (userLoadingAction.type === 'LOGIN_REQUESTING'){
  //     debugger;
  //     const userData = yield call(facebookLogIn);
  //     debugger;
  //   }
  // }
      yield[
        takeLatest(LOGIN_REQUESTING, loginFlow)
      ]

}

export default loginWatcher;
