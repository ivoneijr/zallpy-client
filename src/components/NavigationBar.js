import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Zallpy</Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup" className="navbar-brand">Sign up</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}