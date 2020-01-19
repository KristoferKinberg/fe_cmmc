import React from 'react';

// import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../../node_modules/bootstrap/scss/bootstrap.scss';
import ComponentEdit from './';
import PresentationCard from '../../../components/PresentationCard';
import InputBlock from './SidebarBlock/InputBlock';
import TextareaBlock from './SidebarBlock/TextareaBlock';
import ListBlock from './SidebarBlock/ListBlock';
import ImageUploadBlock from "./SidebarBlock/ImageUploadBlock/ImageUploadBlock";
import {Facebook, Instagram, Play, Twitter} from "react-feather";

class Temp extends React.PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      imgUrl: 'http://138.68.72.9:8000//images/thumbnails/42hYhvLCPALnJkvbeV0B5VG5aPu1ruySif43VDGQ.png',
      firstname: 'Anita Sarkeesian',
      company: 'FemFreq',
      socialIcons : [
        {
          id: 0,
          platform: 'facebook',
          url: 'http://www.facebook.com'
        },
        {
          id:1,
          platform: 'twitter',
          url: 'http://www.twitter.com'
        },
        {
          id: 2,
          platform: 'instagram',
          url: 'http://www.instagram.com'
        },
        {
          id: 3,
          platform: 'youtube',
          url: 'http://www.youtube.com'
        }
      ],
      text: 'Anita Sarkeesian is an award-winning media critic and the creator and executive director of Feminist Frequency, an educational nonprofit that explores the representations of women in pop culture narratives.',
    }
  };

  callback = (firstname) => {
    this.setState({ firstname });
  };

  callback1 = (company) => {
    this.setState({ company });
  };

  callback2 = (text) => {
    this.setState({ text });
  };

  imageCallBack = (img) => {
    this.setState({
      imgUrl: img.imagePreviewUrl
    })
  };

  valueChange = (event) => {
    this.props.callBack(event.target.value);
  };

  socialIconRenderer = (icon) => {
    const
      SIZE = 20,
      icons = {
      facebook: <Facebook size={SIZE}/>,
      twitter: <Twitter size={SIZE}/>,
      instagram: <Instagram size={SIZE}/>,
      youtube: <Play size={SIZE}/>,
    };

    return icons[icon]
  };

  socialInputRenderer = () => {
    return this.state.socialIcons.map((row) => {
      return {
        id: row.id,
        component: (
          <div
            key={row.id}
            style={{ width: '100%', padding: '0 10px' }}
            className="d-flex flex-row align-items-center"
          >
            <div style={{ width: '20%', padding: '0 10px' }}>
              { this.socialIconRenderer( row.platform ) }
            </div>
            <input
              style={{width: '100%', height: '100%', fontSize: '.9em', padding: '0 10px'}}
              type="text"
              onChange={this.valueChange}
              value={row.url}
            />
          </div>
        )
      }
    });
  };

  render() {
    const {  } = this.props;
    const component = (<PresentationCard data={this.state} />);

    return (
      <ComponentEdit component={component}>
        <ImageUploadBlock title="Byta bild" callBack={this.imageCallBack} />
        <InputBlock title={'Namn'} callBack={this.callback} inputValue={this.state.firstname}/>
        <InputBlock title={'Företag'} callBack={this.callback1} inputValue={this.state.company}/>
        <TextareaBlock title={'Beskrivning'} callBack={this.callback2} inputValue={this.state.text} height={'160'}/>
        <ListBlock title={'Social media'} data={ this.socialInputRenderer() } setup={{ hasCheckBox: false }} addable={ false }/>
      </ComponentEdit>
    )
  }
}




storiesOf('Admin.ComponentEdit', module).add('Simple ComponentEdit', () => (
  <div style={{widht: "100%", height: "100vh"}}>
    <Temp />
  </div>
));
