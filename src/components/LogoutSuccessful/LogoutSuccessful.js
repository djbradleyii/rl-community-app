import React from 'react';
import { withRouter } from 'react-router-dom';
import './LogoutSuccessful.css';

function LogoutSuccessful() {
  return (
    <section className="logout-page">
      <p>Logout Successful</p>
    </section>
  );
}

export default withRouter(LogoutSuccessful);
