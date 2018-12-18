import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            .then(resp => console.log(resp.data))
    }


    // state = {
    //     places: [
    //         {
    //             id: 1,
    //             name: "Hawker Hall",
    //             suburb: "Windsor",
    //             style: "Modern Asian Tapas",
    //             price: "$"
    //         },
    //         {
    //             id: 2,
    //             name: "Hanoi Hannah",
    //             suburb: "Richmond",
    //             style: "Vietnamese",
    //             price: "$$"
    //         },
    //         {
    //             id: 3,
    //             name: "Shop Ramen",
    //             suburb: "Collingwood",
    //             style: "Ramen",
    //             price: "$"
    //         }
    //     ]    
        
    // }

    render() {
        const { places } = this.state;
        console.log(places)
        return (
            <div>
                <h1>Melbourne Eateries</h1>
                {
                    places.map((place, index) => {
                        const path = `/places/${place.id}`
                        return (
                            <Link to={path} key={index}>
                                <p>{place.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }


}

export default Places;