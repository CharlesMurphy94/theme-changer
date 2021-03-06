import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }
  // componentWillReceiveProps
  
  componentWillReceiveProps(newProps){
    this.setState({
      allowEdit: newProps.allowEdit
    })
  }

  render() {
    return (
      <select className="dropDownContainer"
              onChange={(e) => this.props.updateColor(e.target.value)}
              disabled={this.state.allowEdit === "false"}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}