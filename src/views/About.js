import React from 'react';
import UseGetViewData from "../effects/useGetViewData";
import {ABOUT} from "../constants/viewsConstants";

export default () => {
  UseGetViewData({ view: ABOUT });

  return <h1>ABOUT</h1>;
}
