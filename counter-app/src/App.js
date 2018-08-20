import React, { Component } from 'react';

import NavBar from './components/navbar';
import Counters from './components/counters';

import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log('>>> App - Constructor');
  }

  componentDidMount() {
    // AJAX Call
    console.log('>>> App - Mounted');
  }

  handleIncrement = counter => {
    // clone counters array
    // clone 的是記憶體位置，因為不是基本型別，有 ref 的問題！！
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // clone 基本型別，所以沒有 ref 的問題！！
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleDecrement = counter => {
    // clone counters array
    // clone 的是記憶體位置，因為不是基本型別，有 ref 的問題！！
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // clone 基本型別，所以沒有 ref 的問題！！
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({ counters });
  };

  handleReset = () => {
    console.log('>>> [ Before ] state val:', this.state.counters);
    const counters = this.state.counters.map(counter => {
      const temp = { ...counter };
      temp.value = 0;
      return temp;
    });

    console.log('>>> [ clone ] state val :', counters);
    console.log('>>> [ After ] state val:', this.state.counters);

    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    console.log('>>> App - Rendered');

    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
