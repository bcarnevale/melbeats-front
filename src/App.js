import React, { Component } from 'react';
import './App.css';
import Places from './Places';
import Place from './Place';
import Form from './Form';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  
  // state = { places: [] }

  // componentDidMount() {
  //     const url = 'http://localhost:5000/places'
  //     fetch(url)
  //         .then(resp => resp.json())
  //         .then(json => {
  //             const places = json.results
  //             this.setState({ places })
  //     })
  // }

  handleNewPlace = (place) => {
    axios.post('http://localhost:5000', place)
      .then(resp => console.log(resp.data))
      .catch(error => console.log(error))
  }

  render() {
    // console.log(places)
    return (
      <div className="App">
        <h1 id="title">MELBOURNE EATERIES</h1>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Places} />
            <Route exact path="/places" component={Places} />
            <Route path="/places/:id" component={Place} />
            <Route exact path="/" component={Form} submitForm={this.handleNewPlace} />
            <Route exact path="/places" component={Form} submitForm={this.handleNewPlace} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
