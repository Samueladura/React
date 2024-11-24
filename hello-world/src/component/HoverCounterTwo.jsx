import { Component } from 'react';

class HoverCounterTwo extends Component {

  render() {
    const {count, incrementsCount} = this.props
    return <h2 onMouseOver={incrementsCount}>Hovered {count} times</h2>
  }
}

export default HoverCounterTwo;
