import React from 'react'


export default function AddFunc(props) {
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
                  <input type="text" id="nuser" name="nuser" className="form-control" placeholder="로그인 생기면 없어집니당"></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="select">Platform</label>
                <div className="col-md-9">
                  <select id="select" name="select" className="form-control" size="1">
                    <option value="node">nodejs</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="select">Version</label>
                <div className="col-md-9">
                  <select id="select" name="select" className="form-control" size="1">
                    <option value="0">Please select</option>
                    <option value="6.9">6.9 LTS</option>
                    <option value="7.2">7.2</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="text-input">Function Name</label>
                <div className="col-md-9">
                  <input type="text" id="nfunc" name="nfunc" className="form-control" placeholder="함수 이름"></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="textarea-input">Function</label>
                <div className="col-md-9">
                  <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Function..."></textarea>
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
              /*
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="text-input">Text Input</label>
                <div className="col-md-9">
                  <input type="text" id="text-input" name="text-input" className="form-control" placeholder="Text">
                    <span className="help-block">This is a help text</span>
                  </input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="email-input">Email Input</label>
                <div className="col-md-9">
                  <input type="email" id="email-input" name="email-input" className="form-control" placeholder="Enter Email">
                    <span className="help-block">Please enter your email</span>
                  </input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="password-input">Password</label>
                <div className="col-md-9">
                  <input type="password" id="password-input" name="password-input" className="form-control" placeholder="Password" >
                    <span className="help-block">Please enter a complex password</span>
                  </input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="textarea-input">Textarea</label>
                <div className="col-md-9">
                  <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Content.."></textarea>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="select">Select</label>
                <div className="col-md-9">
                  <select id="select" name="select" className="form-control" size="1">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="select">Select Large</label>
                <div className="col-md-9">
                  <select id="select" name="select" className="form-control input-lg" size="1">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="select">Select Small</label>
                <div className="col-md-9">
                  <select id="select" name="select" className="form-control input-sm" size="1">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="select">Disabled Select</label>
                <div className="col-md-9">
                  <select id="disabledSelect" className="form-control" disabled="">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label">Radios</label>
                <div className="col-md-9">
                  <div className="radio">
                    <label for="radio1">
                      <input type="radio" id="radio1" name="radios" value="option1">Option 1</input>
                    </label>
                  </div>
                  <div className="radio">
                    <label for="radio2">
                      <input type="radio" id="radio2" name="radios" value="option2">Option 2</input>
                    </label>
                  </div>
                  <div className="radio">
                    <label for="radio3">
                      <input type="radio" id="radio3" name="radios" value="option3">Option 3</input>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label">Inline Radios</label>
                <div className="col-md-9">
                  <label className="radio-inline" for="inline-radio1">
                    <input type="radio" id="inline-radio1" name="inline-radios" value="option1">One</input>
                  </label>
                  <label className="radio-inline" for="inline-radio2">
                    <input type="radio" id="inline-radio2" name="inline-radios" value="option2">Two</input>
                  </label>
                  <label className="radio-inline" for="inline-radio3">
                    <input type="radio" id="inline-radio3" name="inline-radios" value="option3">Three</input>
                  </label>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="file-input">File input</label>
                <div className="col-md-9">
                  <input type="file" id="file-input" name="file-input" />
                </div>
              </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
            <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
          </div>
        </div>
      </div>
    </div>*/
  )
}


