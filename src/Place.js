import React, { Component } from 'react';
import axios from 'axios';

class Place extends Component {
    state = { places: [] }

    componentDidMount() {
        axios.get('http://localhost:5000')
            .then(resp => {
                this.setState({places: resp.data})
            })
    }
    
    render() {
        const { id } = this.props.match.params
        console.log(id)
        const place = this.state.places.find(p => p.id == id);
        return (place) ? (
            <div className="place">
                <h2 className="name">{place.name}</h2>
                <h4><em>{place.suburb}</em></h4>
                <p>{place.style}</p>
                <p><b>{place.price}</b></p>
            </div>
        ) : <h2>Sorry, try again!</h2>
    }

}

export default Place;