import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Power } from 'react-feather'
import Modal from './';
import Button from '../Button/';

class Temp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    }
  }

  openModal = () => {
    this.setState({
      isActive: true
    });
  };

  closeModal = () => {
    this.setState({
      isActive: false
    })
  };

  render () {
    const modalContent = (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          height: '200px',
          width: '200px',
          background: '#fff'
        }}
      >
        Content
      </div>
    );

    return (
      <div>
        <Button label="Open Modal" icon={<Power />} callBack={this.openModal} />
        <Modal isActive={this.state.isActive} content={modalContent} hasCloseButton={true} closeModalCallback={this.closeModal}/>
      </div>
    )
  }
}

storiesOf('Modal', module).add('Simple OverviewModal', () => (
  <div style={{height: "100vh", position: 'relative'}} className="d-flex justify-content-center">
    <Temp />
  </div>
));
