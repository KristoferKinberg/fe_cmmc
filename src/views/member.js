import React from 'react';
import UseGetViewData from "../effects/useGetViewData";
import {MEMBER} from "../constants/viewsConstants";
import UseGetEntities from "../effects/useGetEntitites";

export default () => {
  UseGetViewData({ view: MEMBER });
  // const data = UseGetEntities([ SLIDES, NEWS, INTRO ]);

  // console.log(data);

  return <h1>MEMBER</h1>;
}
