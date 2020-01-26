import { combineReducers } from 'redux';
import initialState from "./initialState";
import {reducer as toastr} from 'react-redux-toastr'
import page from '../page/pageReducer';
import home from '../home/homeReducer';
import draft from '../draft/draftReducer';
import admin from '../admin/adminReducer';
import news from '../entities/news/newsReducer';
import slides from '../entities/slides/slidesReducer';
import intro from '../entities/intro/introReducer';
import benefits from '../entities/benefits/benefitsReducer';
import insuranceHowTo from '../entities/insuranceHowTo/insuranceHowToReducer';
import insuranceStaff from '../entities/insuranceStaff/insuranceStaffReducer';
import inspectionsStaff from '../entities/inspectionsStaff/inspectionsStaffReducer';
import users from '../entities/users/usersReducer';
import board from '../entities/board/boardReducer';
import officials from '../entities/officials/officialsReducer';
import contact from '../entities/contact/contactReducer';
import goals from '../entities/goals/goalsReducer';
import statues from '../entities/statues/statuesReducer';
import eventImages from '../entities/eventImages/eventImagesReducer';
import galleryEvents from '../entities/galleryEvents/galleryEventsReducer';
import galleryYears from '../entities/galleryYears/galleryYearsReducer';

const entities = combineReducers({
  news,
  slides,
  intro,
  benefits,
  insuranceHowTo,
  insuranceStaff,
  inspectionsStaff,
  users,
  board,
  officials,
  contact,
  goals,
  statues,
  eventImages,
  galleryEvents,
  galleryYears,
});

export default (initialData = initialState, location) => combineReducers({
  toastr,
  page,
  location,
  home,
  entities,
  admin,
  draft
});
