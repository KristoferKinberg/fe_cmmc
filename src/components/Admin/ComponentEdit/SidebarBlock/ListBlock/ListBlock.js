// TODO!! Add functionality so that a removed item is also removed from checkedList in case item is checked when removed
import React from 'react';
import PropTypes from 'prop-types';
import SidebarBlock from '../SidebarBlock';
import { AddOrRemoveId, idExistInArray } from "../../../../../utils";
import Checkbox from "../../../../../components/Checkbox";
import EditBar from "../../../../../components/EditBar";
import {
  StyledListBlock,
  StyledListBlockRow,
  StyledListBlockRowComponent,
  StyledListBlockCheckbox,
  StyledListBlockEditable,
  StyledListBlockList,
  StyledListBlockNoRecords,
} from './StyledListBlock';

class ListBlock extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    addable: PropTypes.bool,
    height: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        component: PropTypes.node
      })
    ),
    rowCheck: PropTypes.func,
    checkedRows: PropTypes.arrayOf(
      PropTypes.number
    ),
    setup: PropTypes.shape({
      hasCheckBox: PropTypes.bool,
      isEditable: PropTypes.bool,
    }),
    newInstance: PropTypes.shape({
      data: PropTypes.object,
      component: PropTypes.func,
    }),
    editCallback: PropTypes.func,
    removeCallback: PropTypes.func,
    addCallback: PropTypes.func,
  };

  static defaultProps = {
    addable: true,
    height: '300px',
    setup: {
      hasCheckBox: true,
      isEditable: false
    },
    data: [],
    checkedRows: [],
    showIcons: true,

    rowCheck: () => {}
  };

  editEvent = (id) => this.props.editCallback(id);

  filterChecked = (id) => AddOrRemoveId(this.props.checkedRows, id);

  rowCheckedCallback = (id) => this.props.rowCheck(id, this.filterChecked(id));

  removeEvent = (id) => {
    this.props.removeCallback(id, AddOrRemoveId(this.props.data.map((item) => {return item.id}), id));
  };

  editRenderer = (id) => {
    return (
      <StyledListBlockEditable>
        <EditBar
          id={id}
          configure={{ add: false, update: true, remove: true }}
          hasBorder={false}
          size={15}
          editEvent={this.editEvent}
          removeEvent={this.removeEvent}
        />
      </StyledListBlockEditable>
    )
  };

  checkBoxRenderer = (id, checked) => {
    return (
      <StyledListBlockCheckbox>
        <Checkbox
          isActive={checked}
          callBack={this.rowCheckedCallback}
          size={15}
          id={id}
        />
      </StyledListBlockCheckbox>
    )
  };

  rowRenderer = () => {
    const { setup: { hasCheckBox, isEditable }} = this.props;

    if ( this.props.data ) {
      return this.props.data.map((child, index) => {
        return (
          <StyledListBlockRow key={child.id}>
            { hasCheckBox ? this.checkBoxRenderer(child.id, idExistInArray(this.props.checkedRows, child.id)) : null }
            <StyledListBlockRowComponent>
              { child.component }
            </StyledListBlockRowComponent>
            { isEditable ? this.editRenderer(child.id, idExistInArray(this.props.checkedRows, child.id)) : null }
          </StyledListBlockRow>
        )
      });
    } else {
      return (
        <StyledListBlockNoRecords>
          <p>No records exists</p>
        </StyledListBlockNoRecords>
      );
    }
  };

  renderNew = () => this.props.newInstance
    ? this.props.newInstance.component()
    : null;

  render() {
    const { title, addable, height, addCallback } = this.props;

    return (
      <SidebarBlock
        title={title}
        addable={addable}
        callBack={addCallback}
      >
        <StyledListBlock>
          <StyledListBlockList style={{ height }}>
            { this.renderNew() }
            { this.rowRenderer() }
          </StyledListBlockList>
        </StyledListBlock>
      </SidebarBlock>
    )
  }
}

export default ListBlock;
