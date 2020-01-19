import React from 'react';
import PropTypes from 'prop-types';
import {Facebook, Instagram, Play, Twitter} from "react-feather";
import ListBlock from "../ListBlock/ListBlock";

class SocialMediaIconLinks extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    responsibility: PropTypes.string,
    inputValue: PropTypes.array,
    callBack: PropTypes.func,
    placeholderText: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    placeholderText: 'Enter some text'
  };

  valueChange = (event, row, index) => {
    let newSocialArray = [...this.props.inputValue];
    const newObj = Object.assign(
      {},
      this.props.inputValue[index],
      {url: event.target.value}
    );
    newSocialArray.splice(index, 1, newObj);
    this.props.callBack(newSocialArray);
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
    return this.props.inputValue
      ? this.props.inputValue.map((row, index) => {

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
                onChange={(event) => {this.valueChange(event, row, index)}}
                value={row.url}
              />
            </div>
          )
        }
      })
      : null;
  };

  render() {
    return (
      <ListBlock title={'Social media'} data={this.socialInputRenderer()} setup={{ hasCheckBox: false }} addable={ false }/>
    )
  }
}

export default SocialMediaIconLinks;
