import "./styles/style.less";
// import "./index.ejs";
import React from 'react';
import { render } from 'react-dom';
import { GOOGLE_API_KEY } from './constants';
import Root from './containers/Root';
import store from './store';
const rootElement = document.getElementById('root');
const JSONP_CALLBACK_NAME = 'initAutocomplete';
const googleURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=${JSONP_CALLBACK_NAME}`;

window[JSONP_CALLBACK_NAME] = function() {
	render(<Root store={store} />, rootElement);
}
const autocompleteScript = document.createElement('script');
autocompleteScript.setAttribute('src', googleURL);
rootElement.parentNode.insertBefore(autocompleteScript, null);
