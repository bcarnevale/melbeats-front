import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

class Places extends Component {
    state = { places: [] }

    componentDidMount() {
        // const url = 'http://localhost:5000'
        // fetch(url)
        //     .then(resp => resp.json())
        //     .then(json => {
        //         const places = json.results
        //         this.setState({ places })
        // })
        axios.get('http://localhost:5000')
            .then(resp => {
                this.setState({places: resp.data})
            })
    }

    handleNewPlace = (place) => {
        axios.post('http://localhost:5000/places', place)
          .then(resp => console.log(resp.data))
      }

    render() {
        const { places } = this.state;

        return (
            <div>
                <div id="allPlaces">
                    {places.map((p, i) =>
                        <div key={i} className="place">
                            <Link to={`/places/${p._id}`} style={{textDecoration: 'none'}}>
                                <h3 className="name">{p.name}</h3>
                            </Link>
                            <h4><em>{p.suburb}</em></h4>
                            <p>{p.style}</p>
                            <p><b>{p.price}</b></p>
                        </div>
                    )} 
                </div>
                <Form submitTheForm={this.handleNewPlace} />
            </div>
        )
            
    }


}

export default Places;