import React, { Component } from 'react';

export default function (ComposedComponent) {
  class SpinIt extends Component {
    render() {
      return (
        <div className="spinner">
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }
  return SpinIt;
}
