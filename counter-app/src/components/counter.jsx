import React, { Component } from 'react';

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('>>> prevProps:', prevProps);
    console.log('>>> prevState:', prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax Call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log('>>> counter - Unmount');
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log('Increment Clicked', this);
  // }

  render() {
    console.log('>>> counter - Rerendered');
    // JSX compiles to React.createElement
    return (
      <div className="row">
        {this.props.children}
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value <= 0 ? true : false}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <span>Zero</span> : value;
  }
}

export default Counter;
