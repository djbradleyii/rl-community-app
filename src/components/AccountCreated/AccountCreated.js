import React from 'react';
import { withRouter } from 'react-router-dom';
import './AccountCreated.css';

function AccountCreated() {
  return (
    <section className="account-created">
      <p>Account Created Succesfully. Sign in to begin your journey.</p>

      <p>Enjoy!</p>
    </section>
  );
}

export default withRouter(AccountCreated);
