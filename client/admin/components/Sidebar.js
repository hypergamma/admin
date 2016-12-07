import React from 'react'

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html"><i className="icon-speedometer"></i> Dashboard <span className="tag tag-info">NEW</span></a>
          </li>
          <li className="nav-title">
            Management
          </li>
          <li className="nav-item nav-dropdown">
            <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-puzzle"></i> Functions</a>
            <ul className="nav-dropdown-items">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="icon-puzzle"></i> Add Function</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}