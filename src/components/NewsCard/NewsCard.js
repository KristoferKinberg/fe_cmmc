import React from 'react';
import CardBase from "../CardBase";
import JsonToHtml from "../JsonToHtml/";
import {
  StyledNewsCard,
  StyledNewsCardBg,
  StyledNewsCardBgImage,
  StyledNewsCardContainer,
  StyledNewsCardContent,
  StyledNewsCardContentCover,
  StyledNewsCardDate,
  StyledNewsCardDateContainer,
  StyledNewsCardTextContianer,
  StyledNewsCardTitle
} from "./StyledNewsCard";

export default ({ id, backgroundUrl, date, title, text, onClick, isAdmin = false }) => {
  /**
   * On click event handler
   * @returns {null}
   * @private
   */
  const _onClick = () => onClick
    ? onClick(id)
    : null;

  /**
   * Render background
   * @returns {*}
   */
  const renderBackground = () => <StyledNewsCardBg>
    <StyledNewsCardBgImage src={backgroundUrl} alt=""/>
  </StyledNewsCardBg>;

  /**
   * Render title
   * @returns {*}
   */
  const renderTitle = () => <div>
    <StyledNewsCardTitle>
      {this.props.data.title}
    </StyledNewsCardTitle>
  </div>;

  /**
   * Render date
   * @returns {*}
   */
  const renderDate = () => <StyledNewsCardDateContainer>
    <StyledNewsCardDate>
      {this.props.data.date}
    </StyledNewsCardDate>
  </StyledNewsCardDateContainer>;

  /**
   * Render content
   * @returns {*}
   */
  const renderContent = () => <StyledNewsCardContent>
    <StyledNewsCardContentCover />
    <StyledNewsCardContainer>
      { renderTitle() }
      { renderDate() }
      { renderText() }
    </StyledNewsCardContainer>
  </StyledNewsCardContent>;

  /**
   * Render text
   * @returns {*}
   */
  const renderText = () => <StyledNewsCardTextContianer>
    <JsonToHtml json={this.props.data.text} />
  </StyledNewsCardTextContianer>;

  /**
   * Render news card
   * @returns {*}
   */
  const renderNewsCard = () => <StyledNewsCard>
    { renderBackground() }
    { renderContent() }
  </StyledNewsCard>;

  return <CardBase
    maxWidth={"280px"}
    content={renderNewsCard()}
    clickable={true}
    callBack={_onClick}
    isAdmin={true}
  />
};
