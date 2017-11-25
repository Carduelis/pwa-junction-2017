import React, { Component } from 'react';
import { GOOGLE_API_KEY } from  '../constants';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
let languages = [{
	name: 'Helsinki',
	fullName: 2017
}];

function convertGoogleJSON({ predictions }) {
	return prediction.map(item => {
		return {
			name: item.structured_formatting.main_text,
			fullName: item.description
		}
	})
}

function getMatchingLanguages(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

/* ----------- */
/*    Utils    */
/* ----------- */

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* --------------- */
/*    Component    */
/* --------------- */

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

function getGoogleUrl(value) {
	const URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
	return `${URL}?input=${value}&types=(cities)&key=${GOOGLE_API_KEY}`
}

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      isLoading: false
    };
		this.loadSuggestions = this.loadSuggestions.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.lastRequestId = null;
  }

  loadSuggestions(value) {
    // Cancel the previous request
    if (this.lastRequestId !== null) {
      // clearTimeout(this.lastRequestId);
    }

    this.setState({
      isLoading: true
    });
    // Fake request
    // this.lastRequestId = setTimeout(() => {
    //   this.setState({
    //     isLoading: false,
    //     suggestions: getMatchingLanguages(value)
    //   });
    // }, 1000);
    //

		axios.get(getGoogleUrl(value))
			.then(response => {
				languages = convertGoogleJSON(response);
				this.setState({
	        isLoading: false,
	        suggestions: getMatchingLanguages(value)
	      });
			})
			.catch(response => {
				this.setState({
	        isLoading: false,
					isError: true,
	        suggestions: []
	      });
			})
  }

  onChange (event, { newValue }) {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested ({ value }) {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, isLoading } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };
    const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

    return (
      <div>
        <div className="status">
          <strong>Status:</strong> {status}
        </div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    );
  }
}


export default Search;
