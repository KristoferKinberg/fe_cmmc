import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../../../node_modules/bootstrap/scss/bootstrap.scss';

// import { linkTo } from '@storybook/addon-links';
import SidebarBlock from "./SidebarBlock";

const blockStyle = {
  width: '300px',
  borderLeft: '1px solid #cecece',
  borderRight: '1px solid #cecece',
  height: '450px'
};

storiesOf('Admin.SidebarBlock', module).add('Simple SidebarBlock', () => (
  <div style={{width: "100%", height: "100vh"}}>

    <div style={blockStyle}>
      <SidebarBlock title={'Block title 1'} addable={true}>
        <span style={{ color: '#999' }}>/** Place block-content here */</span>
      </SidebarBlock>

      <SidebarBlock title={'Block title 2'} addable={true}>
        <span style={{ color: '#999' }}>/** Place block-content here */</span>
      </SidebarBlock>

      <SidebarBlock title={'Block title 3'}>
        <span style={{ color: '#999' }}>/** Place block-content here */</span>
      </SidebarBlock>
    </div>
  </div>
));
