import {combineReducers} from 'redux';
import userReducer from './userReducer';
import {LOGOUT} from '../../assets/constant/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const mainReducer = combineReducers({
  user: userReducer,
});

export default rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    AsyncStorage.clear();
    state = undefined;
  }

  return mainReducer(state, action);
};
