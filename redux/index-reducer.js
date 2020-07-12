import { combineReducers } from 'redux';
import pets from '../Screens/Pets/reducer';
import login from '../Screens/Login/reducer';

export default combineReducers({
  pets,
  login,
});