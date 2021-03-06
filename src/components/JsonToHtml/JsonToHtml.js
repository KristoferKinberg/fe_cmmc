import React from 'react';
import draftToHtml from 'draftjs-to-html';
import { StyledJsonToHtml } from "./StyledJsonToHtml";
import DefaultJson from "../Admin/ComponentEdit/SidebarBlock/WysiwygBlock/defaultJson";

export default ({ json }) => {
  const getJson = json
    ? JSON.parse(json)
    : DefaultJson;

  /**
   * Preps object for dangerous HTML
   * @returns {{__html: *}}
   */
  const createMarkup = () => ({__html: draftToHtml(getJson)});

  return <StyledJsonToHtml dangerouslySetInnerHTML={createMarkup()} />
};
