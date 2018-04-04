// React 
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { BrowserRouter } from 'react-router-dom';

// Components
import DNAList from './DNAList.js';
import Footer from './Footer';

// Helpers
import './styles.css';
import axios from 'axios';
import logo from './logo.png';

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const getSuggestionValue    = suggestion => suggestion['Gene'];
const renderSuggestion      = suggestion => <span>{suggestion['Gene']}</span>
  
export default class App extends Component {
    constructor() {
        super()
        this.state = {
           searchActive: false,
           suggestions: [],
           genes: [],
           data: [],
           value: ''
        }
    }

    componentDidMount() {
        axios
        //   .get("http://localhost:3001/all")
          .get("/all")
            .then(response => {
                console.log(response.data)
                this.setState({
                    data: response.data
                })
            })
            .catch(err => console.error(err));
    }

    getSuggestions = value => {
        let result = null;
        if (value) {
            const escapedValue = escapeRegexCharacters(value.trim());

            if (escapedValue === '') return [];

            const regex = new RegExp('^' + escapedValue, 'i');
                result = this.state.data.filter(item => regex.test(item['Gene']));
    }

    return result.slice(0, 5);
};

    onChange = (event, { newValue, method }) => {
        this.setState({
          value: newValue,
        });
      };

    suggestionSelected = e => {
        if (e.key === 'Enter')  {
            if (!this.state.searchActive) {
                this.setState({
                    searchActive: true
                })
            } else {
                this.setState({
                    searchActive: false
                })
                setTimeout( () => 
                    this.setState({
                        searchActive: true
                    }), 200
                )
            }
            
            this.setState({
                suggestions: [],
                genes: this.getSuggestions(this.state.value),
            });
        }
    }
    
      onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: this.getSuggestions(value),
        });
      };
    
      onSuggestionsClearRequested = () => {
        // this.setState({
        //   searchActive: false
        // });
      };
      
    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
          placeholder: 'Enter DNA',
          value,
          onChange: this.onChange,
        };

        const dnaList = this.state.searchActive ? <DNAList data={this.state.genes} /> : <p></p>;
    
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="main-header fadeinLeft">
                        <img className="img-logo" src={logo} alt="invitae-logo"/>
                            <Autosuggest
                                onSuggestionSelected={this.suggestionSelected}
                                suggestions={suggestions}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                            />
                        {dnaList}
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
  }
