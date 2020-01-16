import React from 'react';
import UseGetViewData from '../effects/useGetViewData';
import UseGetEntities from '../effects/useGetEntitites';
import {HOME} from "../constants/viewsConstants";
import {INTRO, NEWS, SLIDES} from "../constants/entitiesConstants";
import {useDispatch} from "react-redux";
import {actionUpdateEntity} from "../stores/entities/entitiesActions";

export default () => {
  UseGetViewData({ view: HOME });
  const { slides, news, intro } = UseGetEntities([ SLIDES, NEWS, INTRO ]);
  // console.log(slides, news, intro)

  const dispatch = useDispatch();

  return <div>
    <h1>HOME</h1>
    <button onClick={() => dispatch(actionUpdateEntity(SLIDES, [ 'knixen', 'madixen' ]))}>:D</button>
  </div>;
}
