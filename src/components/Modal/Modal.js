import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton'
import {StyledCloseButtonWrapper, StyledModal, StyledModalContent, StyledModalContentWrapper} from "./StyledModal";

class Modal extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number,
    content: PropTypes.node,
    isActive: PropTypes.bool,
    hasCloseButton: PropTypes.bool,
    toggleModalCallback: PropTypes.func,
    closeModalCallback: PropTypes.func,
    closeOnSideClick: PropTypes.bool
  };

  static defaultProps = {
    isActive: false,
    hasCloseButton: true,
    closeOnSideClick: true,
    toggleModalCallback: () => {},
  };

  /**
   * Decides if a close-button should be rendered in the modal-content-area or not
   * @returns {null}
   */
  hasCloseButton  = () => {
    return this.props.hasCloseButton ?
      <StyledCloseButtonWrapper
        className="Modal__content-wrapper__close-button d-flex align-items-center justify-content-center"
      >
        <CloseButton callBack={() => {this.props.closeModalCallback(this.props.id)}} />
      </StyledCloseButtonWrapper>
      : null;
  };

  /**
   * Prevents modal from closing if its the modal-content-area that is clicked
   * @param event
   */
  stopClose = event => event.stopPropagation();

  /**
   * On click
   * @private
   */
  _onClick = () => this.closeModal(true)

  /**
   * Checks if the function was called from a click on the non-modal-content-area and if true, if
   * it should close the modal
   * @param {bool} sideClick
   */
  closeModal = (sideClick) => {
    if (this.props.closeOnSideClick && sideClick) this.props.closeModalCallback(this.props.id);
  };

  render() {
    const { content, isActive } = this.props;
    return (
      <StyledModal isActive={isActive} onClick={this._onClick}>
        <StyledModalContentWrapper>
          <div style={{position: 'relative'}} onClick={this.stopClose}>
            <StyledModalContent>
              { content }
            </StyledModalContent>
            {this.hasCloseButton()}
          </div>
        </StyledModalContentWrapper>
      </StyledModal>
    )
  }
}

export default Modal;
