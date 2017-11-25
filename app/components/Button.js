import React, { Component } from 'react';
import Ink from 'react-ink';
import ClassName from '../helpers/ClassName';


export default class Button extends Component {
  render() {
    const className = new ClassName('btn');
    const { props } = this;
    const htmlType = props.submit ? 'submit' : 'button';
    const attrs = props.attrs || {};
    if (props.type) {
      className.push(props.type);
    }
    if (props.size) {
      className.push(props.size);
    }
    if (props.filled || props.fill) {
      className.push('fill');
    }
    if (props.bordered) {
      className.push('bordered');
    }
    if (props.loading === true) {
      className.push('loading');
      attrs.disabled = true;
    } else {
      delete attrs.disabled;
    }
    if (props.styles) {
      props.styles.map(classPart => className.push(classPart));
    }

    return (
      <button
        className={className.getClass()}
        onClick={props.handleClick}
        type={htmlType}
        {...attrs}
      >
        <Ink />
        {props.icon}
        {props.loading && <span className="loading-bar" />}
        {props.label && <span className="label">{props.label}</span>}
        {props.children}
      </button>
    );
  }
}
