import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAuth from 'react-icons/lib/md/account-circle';
import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';
import MdLoop from 'react-icons/lib/md/loop';
import Button from '../components/Button';
import SpinIt from '../hoc/SpinIt';
import { toggleSidebar } from '../store/actions/interface';

class Header extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }
  signIn() {
    console.log('signIn');
    this.props.authModalToggle({
      show: true
    });
  }
  render() {
    const { props } = this;
    const { sidebarVisibility } = props;
    return (
      <div className="header fixed">
				<div className="header-title">
					Get your dream music festival!
				</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.warn(state);
  return {
    sidebarVisibility: state.ui.sidebarVisibility,
    auth: state.auth
  };
}
export default connect(mapStateToProps, { toggleSidebar })(Header);
