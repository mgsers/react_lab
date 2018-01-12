import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [{label: 'a', value: 'a'},
              {label: 'b', value: 'b'}];

const format = (arr) => {
  return arr.map(i => i.label);
}

const domer = () => {
  return (
    <div style={{backgroundColor: '#ccc'}}>
      这是一个div
    </div>
  )
}

function Web(props) {
  console.log(props);
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.label}</span>
    </div>
  )
}

class Parent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <Children>
          <p>this is the slot</p>
        </Children>
      </div>
    )
  }
}

class Children extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>children</div>
        <p>{props.children}</p>
      </div>
    )
  }
}

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      list: [{label: 'a', value: 1},{label: 'b', value: 2}, {label: 'c', value: 3}]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createListItem = this.createListItem.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    console.log(`${this.state.value} is submited`);
  }

  createListItem() {
    return this.state.list.map(i => 
      <li key={i.value}>
        {i.label}
      </li>
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {this.createListItem()}
      </form>
    )
  }
} 

class App extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler() {
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <span>{format(data)}</span>
        </p>
        {domer()}
        <Web name="tt" label="TT" />
        <button onClick={this.handler}>dsdsd</button>

        <NameForm />


        <Parent />
      </div>
    );
  }
}

export default App;
