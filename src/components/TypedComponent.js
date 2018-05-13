import React from 'react'
import Typed from 'typed.js'

class TypedComponent extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
    	strings: strings,
      typeSpeed: 40,
      backSpeed: 10,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <span
        style={{ whiteSpace: 'pre' }}
        ref={(el) => { this.el = el; }}
      />
    );
  }
}

export default TypedComponent