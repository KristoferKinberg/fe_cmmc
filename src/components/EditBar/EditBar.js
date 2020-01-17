import React from 'react';
import PropTypes from 'prop-types';
import {StyledEditBar, StyledEditBarContainer, StyledEditIcon, StyledPlusIcon, StyledTrashIcon} from "./StyledEditBar";

class EditBar extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    size: PropTypes.number,
    editEvent: PropTypes.func,
    removeEvent: PropTypes.func,
    addEvent: PropTypes.func,
    callBack: PropTypes.func,
    hasBorder: PropTypes.bool,
    configure: PropTypes.shape({
      add: PropTypes.bool,
      update: PropTypes.bool,
      remove: PropTypes.bool,
    }).isRequired
  };

  static defaultProps = {
    size: 20,
    hasBorder: true,
    editEvent: () => {},
    removeEvent: () => {},
    addEvent: () => {},
    callBack: () => {},
  };

  setClasses = () => {
    return classNames({
      'EditBar': true,
      'has_border': this.props.hasBorder,
    });
  };

  clickEvent = (clickEvent) => () => {
    this.props[clickEvent](this.props.id);
    this.props.callBack(this.props.id, clickEvent)
  };

  render() {
    const { size, configure } = this.props;

    const
      add = configure.add ?
        (<StyledPlusIcon size={size} onClick={this.clickEvent('addEvent')} />)
        : null,

      update = configure.update ?
        (<StyledEditIcon size={size} onClick={this.clickEvent('editEvent')} />)
        : null,

      remove = configure.remove ?
        (<StyledTrashIcon size={size} onClick={this.clickEvent('removeEvent')} />)
        : null;


    return (
      <StyledEditBar hasBorder={this.props.hasBorder}>
        <StyledEditBarContainer>
          { add }
          { update }
          { remove }
        </StyledEditBarContainer>
      </StyledEditBar>
    )
  }
}

export default EditBar;
