import React from 'react';
import './Social.css';

function Social() {
  return (
    <div id="social" className="social__media">
        <a href="#" className="social__link">
          <i className="fa fa-facebook-f fa-2x"></i>
        </a>
        <a href="#" className="social__link">
          <i className="fa fa-twitter fa-2x"></i>
        </a>
        <a href="#" className="social__link">
          <i className="fa fa-instagram fa-2x"></i>
        </a>
        <a href="/activity/register/" className="social__link">
          <i className="fa fa-puzzle-piece fa-2x" aria-hidden="true"></i>
        </a>
        <a href="/counsellor/register" className="social__link">
          <i className="fa fa-user-md fa-2x" aria-hidden="true"></i>
        </a>
    </div>
  )
}

export default Social