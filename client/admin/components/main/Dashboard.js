import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect';
import { setTitle } from '../../actions/breadcrumb';
import Line from '../graph/Line';


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
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-block">
              <div className="chart-wrapper">
                <Line />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(reducerSelector, mapDispatchToProps)(Dashboard);
