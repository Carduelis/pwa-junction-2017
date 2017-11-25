import React, { Component } from 'react';
import BandsList from './BandsList';

class BandsListPage extends Component {
  render() {
    return (
      <div className="test">
				<Header />
				<BandsList bands={bands} />
      </div>
    );
  }
}

const bands = [
	{
		id: 1,
		title: 'Red Hot Chilly Peppers',
		description: 'kek',
		url: '//placecage.com/200/200'
	},{
		id: 2,
		title: '21 Pilots',
		description: 'kek',
		url: '//placecage.com/201/201'
	},{
		id: 3,
		title: 'The Beatles',
		description: 'kek',
		url: '//placecage.com/202/202'
	},
]

export default BandsListPage;
