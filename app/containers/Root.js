import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from './App';

export default class Root extends Component {
  render() {
    /* eslint-disable no-underscore-dangle */
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
    );
    /* eslint-enable */
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
