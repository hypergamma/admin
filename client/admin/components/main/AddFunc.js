import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect';
import { setTitle } from '../../actions/breadcrumb';
import { setNuser, setNfunc, setFuncEnv, setFuncEnvVer, setFunc } from '../../actions/func';
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
  return bindActionCreators({ setTitle, setNuser, setNfunc, setFuncEnv, setFuncEnvVer, setFunc }, dispatch);
}

class AddFunc extends Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
    const { setTitle } = this.props;
    setTitle('Function > Add Function');
  }



  render() {
    const { setNuser, setNfunc, setFuncEnv, setFuncEnvVer, setFunc } = this.props;

    // 매우 마음이 안드는 부분이다...
    const handleNuser = (event) => {
      setNuser(event.target.value);
    };

    const handleNfunc = (event) => {
      setNfunc(event.target.value);
    };

    const handleFuncEnv = (event) => {
      setFuncEnv(event.target.value);
    };

    const handleFuncEnvVer = (event) => {
      setFuncEnvVer(event.target.value);
    };

    const handleFunc = (event) => {
      setFunc(event.target.value);
    };

    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <strong>Add</strong> Function
            </div>
            <div className="card-block">
              <form action="" method="post" enctype="multipart/form-data" className="form-horizontal ">
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="text-input">User Name</label>
                  <div className="col-md-9">
                    <input type="text" id="nuser" name="nuser" className="form-control" placeholder="로그인 생기면 없어집니당" onChange={handleNuser}></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="select">Platform</label>
                  <div className="col-md-9">
                    <select id="select" name="select" className="form-control" size="1" onChange={handleFuncEnv}>
                      <option value="node">nodejs</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="select">Version</label>
                  <div className="col-md-9">
                    <select id="select" name="select" className="form-control" size="1" onChange={handleFuncEnvVer}>
                      <option value="0">Please select</option>
                      <option value="6.9">6.9 LTS</option>
                      <option value="7.2">7.2</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="text-input">Function Name</label>
                  <div className="col-md-9">
                    <input type="text" id="nfunc" name="nfunc" className="form-control" placeholder="함수 이름" onChange={handleNfunc}></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="textarea-input">Function</label>
                  <div className="col-md-9">
                    <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Function..." onChange={handleFunc}></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(reducerSelector, mapDispatchToProps)(AddFunc);



