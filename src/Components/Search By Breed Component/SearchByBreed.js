import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import "./style.css"

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'black',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
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
            <div className = "search">
                <div className = "container">
                <h2> SEARCH BY BREED </h2>
                <Select
                styles = {this.customStyles}
                    onChange = {this.handleChange.bind(this)}
                    options = {this.state.breeds}
                />
                </div>
            </div>
        );
    }
}

export default SearchByBreed;
