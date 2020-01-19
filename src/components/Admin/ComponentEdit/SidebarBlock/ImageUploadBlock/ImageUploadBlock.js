import React from 'react';
import PropTypes from 'prop-types';
import SidebarBlock from '../SidebarBlock';
import ImageUploader from "../../../../../GeneralComponents/ImageUploader/ImageUploader";
import { Upload } from 'react-feather';
import Button from '../../../../../components/Button';

class ImageUploadBlock extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    callBack: PropTypes.func,
    responsibility: PropTypes.string,
  };

  static defaultProps = {};

  /** TODO
   * I have to make sure that this part automatically uploads the image, and either returns the preview url,
   * or an actual url to the uploaded image
   */
  callBack = (item) => {
    this.props.callBack(this.props.responsibility, item.imagePreviewUrl);
  };

  render() {
    const { title } = this.props;

    return (
      <SidebarBlock title={title}>
        <div className="d-flex align-items-center justify-content-center">
          <ImageUploader uploadCallback={this.callBack} >
            <Button label="Ladda upp bild" icon={<Upload/>} />
          </ImageUploader>
        </div>
      </SidebarBlock>
    )
  }
}

export default ImageUploadBlock;