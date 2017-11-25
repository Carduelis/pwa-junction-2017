import React, { Component } from 'react';
import BandItem from './BandItem';
class BandsList extends Component {
	renderBand(band) {
		console.log(band)
		return (
			<div key={band.id}>
				<BandItem {...band} />
			</div>
		)
	}
	render() {
		const { bands } = this.props;
		return bands.map(this.renderBand);
	}
}

export default BandsList;
