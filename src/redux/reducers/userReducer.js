import {SAVE_USER} from '../../assets/constant/actionTypes';

const initialState = null;

const userReducer = (state = initialState, action) => {
  console.log('action :>> ', action.type);
  switch (action.type) {
    case SAVE_USER:
      let newState = {...state, ...action.payload};
      return newState;

    default:
      return state;
  }
};
export default userReducer;
