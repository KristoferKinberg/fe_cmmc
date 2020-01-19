import React from 'react';
import SidebarBlock from '../SidebarBlock';
import { Editor } from 'react-draft-wysiwyg';
import DefaultJson from './defaultJson';

import './WysiwygBlock.css';

const WysiwygBlock = ({ title, callBack, responsibility, inputValue }) => {
  const onContentStateChange = contentState => callBack(JSON.stringify(contentState));

  const val = () => inputValue
    ? JSON.parse(inputValue)
    : DefaultJson;

  return (
    <SidebarBlock title={title}>
      <Editor
        initialContentState={val()}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onContentStateChange={onContentStateChange}
      />
    </SidebarBlock>
  )
};

export default WysiwygBlock;
