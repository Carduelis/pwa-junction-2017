import React, { Component } from 'react';
import Input from '../components/Input';

class CitySearch extends Component {
	componentDidMount() {
		console.log(this.textInput);
		window['autocomplete'] = new google.maps.places.Autocomplete(this.textInput);	
	}
	render() {
    const { props } = this;
		const { type, value, placeholder, attrs } = props;
		return (
			<div className="input-wrapper">
				<input
				 	ref={(input) => { this.textInput = input; }}
					className="input"
					type={type}
					value={value}
					placeholder={placeholder}
					{...attrs}
					/>
				</div>
		)
	}
}

export default CitySearch
