import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class ReactNoUnmountHide extends Component {
  constructor() {
    super();
  }

  toggle(value) {
    if (value) {
      this.dom.style.display = 'none';
    } else {
      this.dom.style.display = null;
    }
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this.refs.container);

    this.toggle(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== void 0) {
      this.toggle(nextProps.value);
    }
  }


  render() {
    return React.cloneElement(this.props.children, { ref: 'container' });
  }
};
