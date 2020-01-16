import React from 'react';
import Button from "../Button/Button";
import {
  StyledSaveCancelContainer,
  StyledSaveCancelBtnWrp
} from "./StyledSaveCancelBtnGrp";

const SaveCancelBtnGrp = ({ onSaveCallback, onCancelCallback, fullSize = false, disableButtons, usePadding = true }) => {
  return (
    <StyledSaveCancelContainer usePadding={usePadding}>
      <StyledSaveCancelBtnWrp fullSize={fullSize}>
        <Button
          callBack={onSaveCallback}
          label={'Save'}
          type={'SUCCESS'}
          transparent={false}
          fullWidth={false}
          disabled={disableButtons}
        />
        <Button
          callBack={onCancelCallback}
          label={'Abort'}
          type={'DANGER'}
          transparent={false}
          fullWidth={false}
          disabled={disableButtons}
        />
      </StyledSaveCancelBtnWrp>
    </StyledSaveCancelContainer>
  )
};

export default SaveCancelBtnGrp;
