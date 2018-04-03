// React 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import { BrowserRouter } from 'react-router-dom';

// Components
import DNAList from './DNAList.js';

// Helpers
import './styles.css';
import axios from 'axios';
import data from './testData/data.js';
import logo from './logo.png';

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
const getSuggestions = value => {
    let result = null;
    if (value) {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') return [];

        const regex = new RegExp('^' + escapedValue, 'i');
        result = data.filter(item => regex.test(item['Gene']));
    }

    return result;
};

  const getSuggestionValue = suggestion => suggestion['Gene'];

  const renderSuggestion = suggestion => <span>{suggestion['Gene']}</span>
  
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
            .get("http://localhost:3001/all")
            .then(response => {
                console.log(response.data);
            })
            .catch(err => console.error(err));
    }

    onChange = (event, { newValue, method }) => {
        console.log('call onChange')
        this.setState({
          searchActive: true,
          value: newValue
        });
      };

    suggestionSelected = e => {
        if (e.key === 'Enter')  {
            this.setState({
                suggestions: [],
                genes: getSuggestions(this.state.value)
            });
        }
    }
    
      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
      onSuggestionsFetchRequested = ({ value }) => {
        // console.log('call onFetchReq')
        this.setState({
          suggestions: getSuggestions(value),
        });
      };
    
      // Autosuggest will call this function every time you need to clear suggestions.
      onSuggestionsClearRequested = () => {
        console.log('call clearReq')
        // this.setState({
        //   suggestions: []
        // });
      };
      
    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
          placeholder: 'Enter DNA',
          value,
          onChange: this.onChange,
        };

        const dnaList = this.state.searchActive ? <DNAList data={this.state.genes} /> : <p></p>;
    
        // Finally, render it!
        return (
            <BrowserRouter>
                <div className="main-header fadein">
                <img className="img-logo" src={logo} />
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
            </BrowserRouter>
        );
    }
  }
