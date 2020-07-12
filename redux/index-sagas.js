
import LoginSaga from '../Screens/Login/sagas';

export default function* IndexSaga() {
  yield [
    LoginSaga(),
  ]
}