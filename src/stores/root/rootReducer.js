import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import page from '../page/pageReducer';

export default (initialData = {}, rd) => {
  return combineReducers({
    toastr: toastrReducer,
    page,
    location: rd
  })
};
