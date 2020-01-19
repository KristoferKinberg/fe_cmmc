import {useDispatch} from "react-redux";
import React from "react";
import {actionGetEntityData} from "../stores/views/viewActions";


export default ({ entity }) => {
  const dispatch = useDispatch();

  console.log(entity)

  React.useEffect(() => {
    dispatch(actionGetEntityData(entity));
  }, []);

  return null
};

