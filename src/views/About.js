import React from 'react';
import {ABOUT} from "../constants/viewsConstants";
import UseGetViewData from "../effects/useGetViewData";

export default () => {
  UseGetViewData({ view: ABOUT });

  return <h1>ABOUT</h1>;
}
