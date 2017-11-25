import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { props } = this;
		const { type, value, placeholder, attrs } = props;
		return (
			<div className="input-wrapper">
			<input
				className="input"
				type={type}
				value={value}
				placeholder={placeholder}
				{...attrs}
				/>
			</div>
    );
  }
}
