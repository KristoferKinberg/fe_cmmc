import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ListBlock from "./ListBlock";
import PropTypes from "prop-types";

const blockStyle = {
  width: '400px',
  borderLeft: '1px solid #cecece',
  borderRight: '1px solid #cecece',
  height: '450px',
  padding: '0 20px'
};

const fakeData = [ 0, 1, 2, 3 ];

class Temp extends React.PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.lastInsertedId = 3;

    this.state = {
      checkedRows: [],
      rows: fakeData
    }
  };

  setUpData = (arr) => {
    return arr.map((id) => {
      return { id: id, component: (<div>{id}</div>) };
    })
  };

  addRow = () => {
    this.lastInsertedId++;
    this.setState({
      rows: [...this.state.rows, this.lastInsertedId]
    });
  };

  rowChecked = (id, newArr) => {
    this.setState({
      checkedRows: newArr
    })
  };

  editClicked = (id) => {};

  removeClicked = (id, newArr) => {
    this.setState({
      rows: newArr
    })
  };

  render() {
    const {  } = this.props;
    const setup = {
      hasCheckBox: true,
      isEditable: true
    };

    return (
      <div style={blockStyle}>
        <ListBlock
          title={'ListBlock'}
          data={this.setUpData(this.state.rows)}
          rowCheck={this.rowChecked}
          checkedRows={this.state.checkedRows}
          setup={setup}
          addCallback={this.addRow}
          editCallback={this.editClicked}
          removeCallback={this.removeClicked}
        >
        </ListBlock>
      </div>
    )
  }
}

storiesOf('Admin.ListBlock', module).add('Simple ListBlock', () => (
  <div style={{width: "100%", height: "100vh"}}>
    <Temp />
  </div>
));
