import React, { Component } from 'react';
import TodoList from './components/Todos/TodoList'
import UserList from './components/Users/UserList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      seeUsers: true
    }
  }
  handleChange(val) {
    console.log('HandleChange===', val)
    this.setState({ loading: val });
  }
  handleView(val) {
    this.setState({ seeUsers: val });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <p onClick={e => this.handleView(false)} className={this.state.seeUsers ? '' : 'active'}>Todos</p>
          <p onClick={e => this.handleView(true)} className={this.state.seeUsers ? 'active' : ''}>Users</p>
        </div>
        {this.state.seeUsers ? <UserList loading={this.state.loading} handleChange={(a) => this.handleChange(a)} /> : <TodoList loading={this.state.loading} handleChange={(a) => this.handleChange(a)} />}
      </div>
    );
  }
}


export default App;