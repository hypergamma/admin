import React from 'react';


export default function App(props) {
    return (
        <div>
          <header className="navbar">
            <div className="container-fluid">
              <button className="navbar-toggler mobile-toggler hidden-lg-up" type="button">&#9776;</button>
              <a className="navbar-brand" href="#"></a>
              <ul className="nav navbar-nav hidden-md-down">
                <li className="nav-item">
                  <a className="nav-link navbar-toggler layout-toggler" href="#">&#9776;</a>
                </li>
                ...
              </ul>
              <ul className="nav navbar-nav pull-right hidden-md-down">
                ...
                <li className="nav-item">
                  <a className="nav-link navbar-toggler aside-toggle" href="#">&#9776;</a>
                </li>
              </ul>
            </div>
          </header>
          <div className="sidebar">
            <nav className="sidebar-nav">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html"><i className="icon-speedometer"></i> Dashboard <span className="tag tag-info">NEW</span></a>
                </li>
                <li className="nav-title">
                  UI Elements
                </li>
                <li className="nav-item nav-dropdown">
                  <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-puzzle"></i> Components</a>
                  <ul className="nav-dropdown-items">
                    <li className="nav-item">
                      <a className="nav-link" href="components-buttons.html"><i className="icon-puzzle"></i> Buttons</a>
                    </li>
                    ...
                  </ul>
                </li>
                ...
              </ul>
            </nav>
          </div>
          <main className="main">
            <ol className="breadcrumb">
              ...
            </ol>
            <div className="container-fluid">
              <div className="animated fadeIn">
              </div>
            </div>
          </main>
          <aside className="aside-menu">
            <ul className="nav nav-tabs" role="tablist">
              ...
            </ul>
            <div className="tab-content">
              ...
            </div>
          </aside>
          <footer className="footer">
            <span className="text-left">
                <a href="http://coreui.io">CoreUI</a> &copy; 2016 creativeLabs.
            </span>
            <span className="pull-right">
                Powered by <a href="http://coreui.io">CoreUI</a>
            </span>
          </footer>
        </div>
    );
}
