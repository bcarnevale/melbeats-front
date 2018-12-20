import React, { Component } from 'react';

class Form extends Component {

    handleInputChange = (e) => {
        const { value, name } = e.currentTarget
        this.setState({ [name]: value })
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.props)
        console.log(e)
        console.log(this.state)
        this.props.submitTheForm(this.state);
    }

    render() {
        return (
            <div>
                <h2>Create a new eatary...</h2>
                <form>
                    <h4>Eatery Name:</h4>
                    <input type="text" name="name" onChange={this.handleInputChange}/><br/>
                    <h4>Eatery Suburb:</h4>
                    <input type="text" name="suburb" onChange={this.handleInputChange}/><br/>
                    <h4>Eatery Style:</h4>
                    <input type="text" name="style" onChange={this.handleInputChange}/>
                    <h4>Eatery Price:</h4>
                    <input type="text" name="price" onChange={this.handleInputChange}/><br/>
                    <button onClick={this.submitForm}>Add Place</button>
                </form>
            </div>
        )
    }
}

export default Form;