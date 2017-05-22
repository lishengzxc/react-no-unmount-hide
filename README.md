# react-no-unmount-hide ![](https://api.travis-ci.org/lishengzxc/react-no-unmount-hide.svg?branch=master)  ![](https://img.shields.io/npm/v/react-no-unmount-hide.svg)

> A react component that hide it's children and not umount them. No more other tag is inserted.

We often do this：

```js

class Bar extends React.Compoent { ... }

class Foo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: true,
    };
  }

  render() {
    return (
      <div>
        {
          this.state.value ? <Bar /> : null
        }
      </div>
    )
  }
}
```

If we do this, the `<Bar />` will be unmount because of `this.state.value` is `false`.  
When `this.state.value` is `true`, the `<Bar />` will be mount again. It needs through a series of life cycle.
Sometimes, We just want to hide `<Bar />`, not unmount it. 

Be forced to do:

```js
<div style={{display: this.state.value ? 'none' : null}}>...</div>
```

If you children is React Component, you need pass down the `value`, and manage it manually.

**So react-no-unmount-hide can DRY for you!!**

## Install

```bash
npm install --save react-no-unmount-hide
```

## Usage
```js
import ReactNoUnmountHide from 'react-no-unmount-hide';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: false,
      haha: 'haha'
    };
  }
  
  render() {
    return (
      <div>
        <ReactNoUnmountHide value={this.state.value}>
          <Sub haha={this.state.haha} />
        </ReactNoUnmountHide>
        <button onClick={() => this.setState({ value: !this.state.value, haha: Math.random() })}>toggle</button>
      </div>
    );
  }
}

class Sub extends React.Component {
  render() {
    return (
      <div>{this.props.haha}</div>
    )
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);

```

## Tests
todo