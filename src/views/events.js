import React from 'react';
import UseGetViewData from "../effects/useGetViewData";
import {PAST_EVENTS} from "../constants/viewsConstants";

export default () => {
  UseGetViewData({ view: 'past-events' });

  return <h1>EVENTS</h1>;
}
