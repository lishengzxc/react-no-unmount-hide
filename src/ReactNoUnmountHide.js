import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ReactNoUnmountHide extends Component {
  constructor() {
    super();

    this.ref = React.createRef();
  }

  toggle(value) {
    this.dom.style.display = value ? null : "none";
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this.ref.current);
    this.toggle(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== void 0) {
      this.toggle(nextProps.value);
    }
  }

  render() {
    return React.cloneElement(this.props.children, { ref: this.ref });
  }
}
