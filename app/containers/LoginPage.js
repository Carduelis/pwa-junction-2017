import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GOOGLE_API_KEY, BACKEND_ROOT } from  '../constants';
import Loader from '../components/Loader';
import Input from '../components/Input';
import Button from '../components/Button';

import MdArrowForward from 'react-icons/lib/md/arrow-forward';
class LoginPage extends Component {
	componentDidMount() {
		console.log(this.textInput);
		window.autocomplete = new google.maps.places.Autocomplete(this.textInput);
	}
  render() {
		const btnProps = {
			label: 'Continue via Spotify',
			size: 'lg',
			styles: ['white'],
			handleClick: (e) => {

				let lat = 60.17; // helsinki
				let lng = 24.94; // helsinki
				const place = window.autocomplete.getPlace();
				console.log(place);
				if (place) {
					if (!place.geometry) {
						alert('City is not found, try another one');
					} else {
						lat = place.geometry.location.lat();
						lng = place.geometry.location.lng();
					}
				}
				const href = `${BACKEND_ROOT}login?city=testing&lat=${lat}&long=${lng}`;
				window.location.href = href;

			}
		}
		console.log(this.props);
    return (
			<div className="login-page">
				<div className="logo-wrapper">
					<div className="logo">
						<div className="logo-letter">Fly
						</div>
					</div>
					<div className="logo-text">
						Make a concert come true!
					</div>
				</div>
				<div className="login-form">
					<div className="input-wrapper">
						<input
							ref={(input) => { this.textInput = input; }}
							className="input"
							type="text"
							placeholder="Helsinki"
							/>
					</div>
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
