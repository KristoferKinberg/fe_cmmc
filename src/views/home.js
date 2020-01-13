import React from 'react';
import UseGetViewData from '../effects/useGetViewData';
import UseGetEntities from '../effects/useGetEntitites';
import {HOME} from "../constants/viewsConstants";
import {INTRO, NEWS, SLIDES} from "../constants/entitiesConstants";

export default () => {
  UseGetViewData({ view: HOME });
  const { slides, news, intro } = UseGetEntities([ SLIDES, NEWS, INTRO ]);
  console.log(slides, news, intro)

  return <h1>HOME</h1>;
}
