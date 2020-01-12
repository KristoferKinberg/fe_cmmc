import React from 'react';
import UseGetViewData from '../effects/useGetViewData';
import UseGetEntities from '../effects/useGetEntitites';
import {HOME} from "./viewsConstants";
import {INTRO, NEWS, SLIDES} from "../constants";

export default () => {
  UseGetViewData({ view: HOME });
  const { slides, news, intro } = UseGetEntities([ SLIDES, NEWS, INTRO ]);

  console.log(slides, news, intro)

  return <h1>HOME</h1>;
}
