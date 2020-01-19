import React from 'react';
import PropTypes from 'prop-types';

import './ImageUploader.css';
import {StyledImageUploader, StyledImageUploaderCustomElem} from "./StyledImageUploader";

class ImageUploader extends React.PureComponent {
  static propTypes = {
    uploadCallback: PropTypes.func.isRequired,
    label: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.props.uploadCallback({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file)
  };

  buttonRenderer = () => {
    const { children, label } = this.props;

    return (
      children ?
        children
        : <StyledImageUploaderCustomElem>
          { label ? label : 'Upload a file'}
        </StyledImageUploaderCustomElem>
    )
  };

  render() {
    return (
      <StyledImageUploader>
        <div className="ImageUploader__btn">
          { this.buttonRenderer() }
        </div>
        <input
          className="ImageUploader__fileInput"
          type="file"
          onChange={(e)=>this._handleImageChange(e)}
        />
      </StyledImageUploader>
    )
  }
}

export default ImageUploader;