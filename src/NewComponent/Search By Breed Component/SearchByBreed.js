import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import "./style.css"


class SearchByBreed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breedName: "",
            breedID: "",
            breeds : [],
            cats:[]
        }
    }

    customStyles = {
        container: (base, state) => ({
          ...base,
          border: state.isFocused ? null : null,
          transition:
            "border-color 0.2s ease, box-shadow #d9d9d9, padding #d9d9d9",
          "&:hover": {
            boxShadow: "0 2px 4px 0  #d9d9d9"
          }
        }),
        control: (base, state) => ({
          ...base,
          background: "#d9d9d9"
        }),
        valueContainer: (base, state) => ({
          ...base,
          background: "#d9d9d9"
        }),
        multiValue: (base, state) => ({
          ...base,
          background: "#d9d9d9",
          maxWidth: "50px"
        })
      };

    handleChange(breed){
        this.setState({
            breedID : breed.value,
            breedName : breed.label
        });
        axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${this.state.breedID}&include_breeds=true&limit=100&mime_types=jpg,png`,{headers: {
            'x-api-key': '8b7d4780-a628-4ff2-b8a5-dc2c4cdbdfe4'
          }}).then(res =>{ 
              var filtredCats = [];
            for(var i = 0 ; i<res.data.length ; i++){
                if(res.data[i]['breeds'].length > 0){
                    filtredCats.push(res.data[i])
                }
            }  
            this.setState({
                cats : filtredCats
            });
            // console.log(this.props.bis);
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
            <div className = "search">
                <div className = "container">
                <h2> SEARCH BY BREED </h2>
                <Select
                styles = {this.customStyles}
                    onChange = {this.handleChange.bind(this)}
                    options = {this.state.breeds}
                />
                <h2>{this.state.breedName}</h2>
                </div>
            </div>
        );
    }
}

export default SearchByBreed;