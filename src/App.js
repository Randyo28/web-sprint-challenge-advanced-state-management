import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { fetchSmurfData } from './actions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfData() // fetchSmurf action needs to be rendered on mount using this.props
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

export default connect(null, {fetchSmurfData})(App); //connected fetchSmurfData action to App.js no need for state

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.