import React, { Component } from 'react';

class BandItem extends Component {
	render() {
		const { url, title, description } = this.props;
		const backgoundImageStyle = {backgroundImage: `url('${url}')`};
		return (
			<div className="band-item">
				<div className="band-cover" style={backgoundImageStyle}></div>
				<div className="band-content">
					<h4 className="band-title">{title}</h4>
					<p className="band-description">{description}</p>
				</div>
			</div>
		)
	}
}

export default BandItem;
