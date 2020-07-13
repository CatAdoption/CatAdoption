import React from 'react';
import Select from 'react-select';
import axios from 'axios';

class SearchByBreed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breedName: "",
            breedID: "",
            breeds : [],
            cats:[]
        };
    };

    handleChange(breed){
        this.setState({
            breedID : breed.value,
            breedName : breed.label
        });
        axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${this.state.breedID}&include_breeds=true&limit=48&mime_types=jpg,png`).then(res =>{           
            this.setState({
                cats : res.data
            });
            // console.log(this.state.cats);
            this.props.getCats(this.state.cats)
        })
        .catch((err)=>{
            console.error(err)
        })
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