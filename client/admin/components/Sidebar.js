import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'redux-router5'
import { createSelector } from 'reselect';
import NavItem from './sidebar/NavItem'
import { setTitle } from '../actions/breadcrumb';

const reducerSelector = createSelector(
  state => state.breadcrumb,
  state => state.router,
  (breadcrumb, router) => ({
    title: breadcrumb.title,
    error: hasCannotDeactivateError(router.transitionError)
  })
);

function hasCannotDeactivateError(error) {
  return error && error.code === 'CANNOT_DEACTIVATE' && error.segment === 'compose';
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setTitle, navigateTo: actions.navigateTo }, dispatch);
}

class Sidebar extends Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
  }

  render() {
    const { setTitle, navigateTo } = this.props;

    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-title">
              Pop Art
            </li>
            <NavItem router={this.router} navigateTo={navigateTo} name="dashboard" setTitle={ setTitle } title="Pop Art > Dashboard">
              <i className="icon-speedometer"></i> Dashboard
            </NavItem>
            <li className="nav-title">
              Management
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-puzzle"></i> Function</a>
              <ul className="nav-dropdown-items">
                <NavItem router={this.router} navigateTo={navigateTo} name="addfunc" setTitle={ setTitle } title="Function > Add Function">
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

export default connect(reducerSelector, mapDispatchToProps)(Sidebar);
