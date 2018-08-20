import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log('Increment Clicked', this);
  // }

  handleIncrement = () => {
    console.log('Increment Clicked', this);
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log('>>> props', this.props);
    // JSX compiles to React.createElement
    return (
      <React.Fragment>
        {this.props.children}
        {/* 
          [ Embedding Expressions ]
          access the javascript expression
         */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.state.tags.length === 0 ? (
          <div>Please create a new tag!</div>
        ) : null}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? <span>Zero</span> : value;
  }
}

export default Counter;
