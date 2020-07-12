import React from 'react';
import Select from 'react-select';
import axios from 'axios';

class SearchByBreed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breedName: "",
            breedID: "",
            breeds : []
        };
    };

    handleChange(breed){
        this.setState({
            breedID : breed.value,
            breedName : breed.label
        });
    };

    componentDidMount(){
        var allBreeds = [];
        axios.get('https://api.thecatapi.com/v1/breeds').then(res =>{
            res.data.forEach((breed) => {
                allBreeds.push( {value: breed.id, label: breed.name} );
            });            
            this.setState({
                breeds : allBreeds
            });
            console.log(this.state.breeds);
        });
    }

    render() {
        return (
            <div>
                <Select
                    onChange = {this.handleChange.bind(this)}
                    options = {this.state.breeds}
                />
                <h5>{this.state.breedName}</h5>
            </div>
        );
    }
}

export default SearchByBreed;