import React from 'react';
import PropTypes from 'prop-types';
import AddButton from "../../../AddButton/AddButton";
import {
  StyledSidebarBlock,
  StyledSidebarBlockContent,
  StyledSidebarBlockHeader,
  StyledSidebarBlockHeaderTitle
} from './StyledSidebarBlock';

class SidebarBlock extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    addable: PropTypes.bool,
    callBack: PropTypes.func
  };

  static defaultProps = {
    addable: false
  };

  callback = () => this.props.callBack()

  addableRenderer = () => this.props.addable
    ? <div onClick={this.props.callBack}>
        <AddButton size={35}/>
      </div>
    : null;

  render() {
    const { children, title } = this.props;

    return (
      <StyledSidebarBlock>
        <StyledSidebarBlockHeader>
            <div>
              <StyledSidebarBlockHeaderTitle>
                { title }
              </StyledSidebarBlockHeaderTitle>
            </div>

          { this.addableRenderer() }
        </StyledSidebarBlockHeader>


        <StyledSidebarBlockContent style={this.props.styles}>
          { children }
        </StyledSidebarBlockContent>
      </StyledSidebarBlock>
    )
  }
}

export default SidebarBlock;
