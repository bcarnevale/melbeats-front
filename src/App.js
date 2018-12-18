import React, { Component } from 'react';
import './App.css';
import Places from './Places';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  
  // state = { places: [] }

  // componentDidMount() {
  //     const url = 'https://localhost:5000/places'
  //     fetch(url)
  //         .then(resp => resp.json())
  //         .then(json => {
  //             const places = json.results
  //             this.setState({ places })
  //     })
  // }

  render() {
    // console.log(places)
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Places} />
            <Route exact path="/places" component={Places} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
