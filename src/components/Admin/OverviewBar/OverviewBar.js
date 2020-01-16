import React from 'react';
import {StyledOverviewBar} from "./StyledOverviewBar";
import YearPicker from "../../../../components/YearPicker/YearPicker";

export default ({ entry }) => <StyledOverviewBar>
  <YearPicker entry={entry}/>
</StyledOverviewBar>
