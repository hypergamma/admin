import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'redux-router5'
import NavItem from './sidebar/NavItem'

class Sidebar extends Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
  }

  render() {
    const { navigateTo } = this.props;

    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-title">
              Pop Art
            </li>
            <NavItem router={this.router} navigateTo={navigateTo} name="dashboard">
              <i className="icon-speedometer"></i> Dashboard
            </NavItem>
            <li className="nav-title">
              Management
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-puzzle"></i> Functions</a>
              <ul className="nav-dropdown-items">
                <NavItem router={this.router} navigateTo={navigateTo} name="addfunc">
                  <i className="icon-puzzle"></i> Add Function
                </NavItem>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default connect(
  state => state.router.route,
  dispatch => bindActionCreators({ navigateTo: actions.navigateTo }, dispatch)
)(Sidebar);
