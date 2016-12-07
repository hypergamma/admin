import React from 'react'


export default function Dashboard(props) {
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


