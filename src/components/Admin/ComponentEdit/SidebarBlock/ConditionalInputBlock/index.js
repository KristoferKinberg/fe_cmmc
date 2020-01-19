import React from 'react';
import Checkbox from "../../../../../GeneralComponents/Checkbox";
import {StyledConditionalInputWrapper} from "./StyledConditionalInputBlock";
import SidebarBlock from "../SidebarBlock";
import DatePicker from "react-datepicker";

export default ({ title, inputValue, responsibility, callBack }) => {
  const [checkboxState, setCheckboxState] = React.useState(inputValue !== null);

  /**
   * Handle checkbox click
   */
  const handleCheckboxClick = () => {
    setCheckboxState(!checkboxState)
    handleChange(null);
  };

  /**
   * Handle change
   * @param value
   * @returns {*}
   */
  const handleChange = (value) => callBack(value);

  /**
   * Get value
   * @returns {Date}
   */
  const getValue = () => inputValue
    ? new Date(inputValue)
    : new Date();

  /**
   * Render input
   * @returns {*}
   */
  const renderInput = () => checkboxState
    ? <DatePicker
      selected={getValue()}
      onChange={handleChange}
      dateFormat="d MMMM, yyyy"
      peekNextMonth
      showMonthDropdown
      dropdownMode="select"
      disabled={!checkboxState}
    />
    : <input type="text" disabled={true}/>;


  return <SidebarBlock title={title}>
    <StyledConditionalInputWrapper>
      <Checkbox callBack={handleCheckboxClick} isActive={checkboxState}/>
      { renderInput() }
    </StyledConditionalInputWrapper>
  </SidebarBlock>;
};
