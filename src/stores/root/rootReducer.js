import { combineReducers } from 'redux';
import {reducer as toastr} from 'react-redux-toastr'
import page from '../page/pageReducer';

export default (initialData = {}, location) => combineReducers({
    toastr,
    page,
    location
  });
