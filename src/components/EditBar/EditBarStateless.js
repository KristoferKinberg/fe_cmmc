import React from 'react';
import PropTypes from 'prop-types';
import { Edit2, Trash2, Plus } from 'react-feather';

class EditBarStateless extends React.PureComponent {
  static propTypes = {
    size: PropTypes.number,
    editEvent: PropTypes.func,
    removeEvent: PropTypes.func,
    addEvent: PropTypes.func
  };

  static defaultProps = {
    size: 20,
    editEvent: () => {},
    removeEvent: () => {},
    addEvent: () => {},
  };

  constructor(props) {
    super(props)
  };

  render() {
    const { size } = this.props;

    return (
      <div className="EditBar">
        <div className='EditBar__container d-flex flex-row align-items-center justify-content-around'>
          <Edit2 size={size} className="EditBar__container__icon"/>
          <Trash2 size={size} className="EditBar__container__icon"/>
          <Plus size={size} className="EditBar__container__icon"/>
        </div>
      </div>
    )
  }
}

export default EditBarStateless;
