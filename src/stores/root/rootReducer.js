import { combineReducers } from 'redux';
import {reducer as toastr} from 'react-redux-toastr'
import page from '../page/pageReducer';
import home from '../home/homeReducer';
import news from '../news/newsReducer';
import slides from '../slides/slidesReducer';
import intro from '../intro/introReducer';

const entities = combineReducers({
  news,
  slides,
  intro,
});

export default (initialData = {}, location) => combineReducers({
  toastr,
  page,
  location,
  home,
  entities
});
