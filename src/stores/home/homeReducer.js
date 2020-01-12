import { combineReducers } from 'redux'
import rootReducer, {abc} from '../../services/createReducer';

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state;
      // return state.concat([action.text])
    default:
      return state
  }
};

// export default abc('NEWS')
