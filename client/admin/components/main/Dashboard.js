import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect';
import { setTitle } from '../../actions/breadcrumb';

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
  return bindActionCreators({ setTitle }, dispatch);
}

class Dashboard extends Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
    const { setTitle } = this.props;
    setTitle('Dashboard');
  }

  render() {
    return (
      <div class="container d-table">
        <div class="d-100vh-va-middle">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="clearfix">
                <h1 class="float-xs-left display-3 mr-2">Dashboard</h1>
                <h4 class="pt-1">Oops! You're lost. Dashboard</h4>
                <p class="text-muted">The page you are looking for was not found.</p>
              </div>
              <div class="input-prepend input-group">
              <span class="input-group-addon"><i class="fa fa-search"></i>
              </span>
                <input id="prependedInput" class="form-control" size="16" type="text" placeholder="What are you looking for?" />
              <span class="input-group-btn">
                  <button class="btn btn-info" type="button">Search</button>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(reducerSelector, mapDispatchToProps)(Dashboard);
