import React from 'react';
import UseGetViewData from "../effects/useGetViewData";

export default () => {
  UseGetViewData({ view: 'planing' });

  return <h1>PLANING</h1>;
}
