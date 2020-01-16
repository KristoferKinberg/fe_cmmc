import React from 'react';
import Button from "../../../components/Button";
import {Check, X} from "react-feather";
import Modal from "../../../components/Modal";
import {
  StyledModal,
  StyledModalButtons,
  StyledModalTitle,
  StyledModalTitleWrapper
} from "./StyledOverviewModal";

export default ({ isActive, text, removeCallback, closeModal }) => {
  /**
   * Render header
   * @returns {*}
   */
  const renderHeader = () => (
    <StyledModalTitleWrapper>
      <StyledModalTitle>
        Are you sure you wish to remove { text }?
      </StyledModalTitle>
    </StyledModalTitleWrapper>
  );

  /**
   * Render buttons
   * @returns {*}
   */
  const renderButton = (type, icon, label, callback) => <Button
    type={type}
    icon={icon}
    label={label}
    transparent={true}
    callBack={callback}
  />;

  /**
   * Render content
   * @returns {*}
   */
  const renderContent = () => (
    <StyledModal>
      { renderHeader() }

      <StyledModalButtons>
        { renderButton('success', <Check size={30}/>, 'Remove', removeCallback) }
        { renderButton('danger', <X size={30}/>, 'Cancel', closeModal) }
      </StyledModalButtons>
    </StyledModal>
  );

  return <Modal
    content={renderContent()}
    isActive={isActive}
    closeModalCallback={closeModal}
    hasCloseButton={false}
    closeOnSideClick={false}
  />
}
