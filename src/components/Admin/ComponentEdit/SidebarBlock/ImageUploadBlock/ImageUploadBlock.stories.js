import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ImageUploadBlock from "./ImageUploadBlock";

const blockStyle = {
  width: '300px',
  borderLeft: '1px solid #cecece',
  borderRight: '1px solid #cecece',
  height: '300px'
};


class Temp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: 'http://138.68.72.9:8000//images/thumbnails/42hYhvLCPALnJkvbeV0B5VG5aPu1ruySif43VDGQ.png',
    }
  };

  imageCallBack = (img) => {
    this.setState({
      imgUrl: img.imagePreviewUrl
    })
  };

  render() {
    const {  } = this.props;

    return (
      <div className="d-flex flex-row">
        <img src={this.state.imgUrl} alt=""/>

        <div style={blockStyle}>
          <ImageUploadBlock callBack={this.imageCallBack} title={'Byta bild'}/>
        </div>
      </div>

    )
  }
}
storiesOf('Admin.ImageUploaderBlock', module).add('Simple ImageUploaderBlock', () => (
  <div style={{width: "100%", height: "100vh"}}>
    <Temp />
  </div>
));
