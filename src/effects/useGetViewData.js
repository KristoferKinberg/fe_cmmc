import {useDispatch} from "react-redux";
import React from "react";
import {actionGetViewData} from "../stores/views/viewActions";


export default ({ view }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actionGetViewData(view));
  }, []);

  return null
};

