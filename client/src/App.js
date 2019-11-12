import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/launches';
import Launch from './components/launch';
import './App.css';
import logo from './logo192.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="container">
            <img src={logo} alt="SpaceX" style={{width:300, display: 'block', margin: 'auto'}}/>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
