import React from 'react';
import {useDispatch} from "react-redux";
import {actionGetHomeData} from "../stores/home/homeActions";

export default () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actionGetHomeData());
  }, []);

  return <h1>HOME</h1>;
}
