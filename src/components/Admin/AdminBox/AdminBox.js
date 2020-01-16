import React from 'react';
import {
  StyledBox,
  StyledBoxBody,
  StyledBoxHeader,
  StyledBoxHeaderTitle
} from "./StyledAdminBox";
import { PlusCircle } from 'react-feather';
import SaveCancelBtnGrp from "../../SaveCancelBtnGrp/SaveCancelBtnGrp";

const AdminBox = ({ title, children, cancelCallback, saveCallback, width, addable, disableButtons }) => {
  /**
   * Renders addable
   * @returns {null}
   */
  const renderAddable = () => addable
    ? <PlusCircle color='#fff' size="27" addable={false}/>
    : null;

  return (
    <StyledBox width={width}>
      <StyledBoxHeader>
        <StyledBoxHeaderTitle>
          { title }
        </StyledBoxHeaderTitle>

        { renderAddable() }

      </StyledBoxHeader>

      <StyledBoxBody>
        { children }

        <SaveCancelBtnGrp
          disableButtons={disableButtons}
          onSaveCallback={saveCallback}
          onCancelCallback={cancelCallback}
          usePadding={false}
        />
      </StyledBoxBody>
    </StyledBox>
  )
};

export default AdminBox;
