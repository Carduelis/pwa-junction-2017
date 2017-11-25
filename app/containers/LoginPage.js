import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GOOGLE_API_KEY, BACKEND_ROOT } from  '../constants';
import Loader from '../components/Loader';
import Input from '../components/Input';
import CitySearch from './CitySearch';
import Button from '../components/Button';

import MdArrowForward from 'react-icons/lib/md/arrow-forward';
class LoginPage extends Component {
  render() {
		const btnProps = {
			label: 'Continue via Spotify',
			size: 'lg',
			styles: ['white'],
			href: `${BACKEND_ROOT}login?city=AWS`,
			// handleClick: (e) => {
			// 	alert('Auth action')
			// }
		}
		const inputProps = {
			type: 'text',
			attrs: {
				// onChange: (e) => {
				// 	console.log(e);
				// },
			},
			placeholder: 'Helsinki'
		}
		console.log(this.props);
    return (
			<div className="login-page">
				<div className="logo-wrapper">
					<div className="logo">
						<div className="logo-letter">М
						</div>
					</div>
					<div className="logo-text">
						Make a consert come true!
					</div>
				</div>
				<div className="login-form">
					<CitySearch {...inputProps} />
					<Button {...btnProps}>
						<span className="arrow"><MdArrowForward /></span>
					</Button>
				</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.ui.loggedIn
  };
}
export default connect(mapStateToProps)(LoginPage);
