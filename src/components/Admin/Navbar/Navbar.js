import React from 'react';
import {
  StyledColumn,
  StyledIcon,
  StyledIconWrapper,
  StyledLink,
  StyledLinkWrapper,
  StyledMainBar,
  StyledNavbar,
  StyledSubBar,
  StyledSubLink,
  StyledSubLinkWrapper,
  StyledTitle
} from "./StyledNavbar";
import Links from './Links';
import {actionChangeView} from "../../../stores/page/pageActions";
import {useDispatch} from "react-redux";

export default () => {
  const [subBar, setSubBar] = React.useState(false);
  const dispatch = useDispatch();

  console.log('LINKS', Links);

  /**
   * Change view
   * @param view
   * @returns {Function}
   */
  const changeView = (view, payload = {}) => () => {
    console.log(':DAS', view, payload);
    dispatch(actionChangeView(view, payload));
  };

  /**
   * Sets sub bar
   * @param view
   * @returns {function(): void}
   * @private
   */
  const _setSubBar = view => () => setSubBar(view);

  /**
   * Render view links
   * @returns {*[]}
   */
  const renderViewLinks = () => Object.values(Links).map(({ label, key }) => <StyledLinkWrapper
    onMouseEnter={_setSubBar(key)}
    onMouseLeave={_setSubBar(false)}
    key={key}
  >
    <StyledLink>{ label }</StyledLink>

    { renderSubBar(key) }
  </StyledLinkWrapper>);

  /**
   * Render logo
   * @returns {*}
   */
  const renderLogo = () => <StyledIconWrapper>
    <StyledIcon src="/img/logo.png" />
  </StyledIconWrapper>;

  /**
   * Render title
   * @returns {*}
   */
  const renderTitle = () => <StyledTitle>
    CMMC
  </StyledTitle>;

  /**
   * Render main bar
   * @returns {*}
   */
  const renderMainBar = () => <StyledMainBar>
    <StyledColumn algin={'left'} width={'200px'}>
      { renderLogo() }
      { renderTitle() }
    </StyledColumn>

    <StyledColumn align={'right'}>
      { renderViewLinks() }
    </StyledColumn>
  </StyledMainBar>;

  /**
   * Render sub bar
   * @returns {*}
   */
  const renderSubBar = view => subBar === view
    ? <StyledSubBar isActive={subBar}>
      { renderSubBarLinks(view) }
    </StyledSubBar>
    : null;

  /**
   * Render sub bar links
   * @param view
   * @returns {*}
   */
  const renderSubBarLinks = (view) => {
    console.log(view);

    return Links[view].children.map(({ path, payload, label }) =>
      <StyledSubLinkWrapper onClick={changeView(path, payload)} key={label}>
        <StyledSubLink>
          { label }
        </StyledSubLink>
      </StyledSubLinkWrapper>
    );
  }

  return <StyledNavbar>
    { renderMainBar() }
  </StyledNavbar>
};
