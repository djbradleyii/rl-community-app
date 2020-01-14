import React from 'react';
import { withRouter } from 'react-router-dom';
import './LandingPage.css';

function LangingPage() {
  return (
    <section className="landing-page">
      <p>The Rocket League Trading App is where you can trade unwanted items, find desired items and find a teammates.  After you have created an account, you can begin your journey to expanding your Rocket League network.</p>

      <p>As a User, you have access to the following features:</p>

      <p>
        <b>Create &amp; view Trades</b>
        {' '}
        - Create trades based on your personal inventory.
        - Search/View trades other users posted.
        - Coming soon: Post trades based on items you desire.
      </p>

      <p>
        <b>Create &amp; view Team Requests</b>
        {' '}
        - Create Team Requests.
        - Search/View Team Requests based on search criteria.
        - Your Dashboard will only show Team Requests based on your rank and platform. 
      </p>

      <p>
        <b>Manage your Inventory, Trades and Team Requests</b>
        {' '}
        - After creating, viewing, and accepting trade/team requests, you can return to your Dashboard to see all of the details for each. Here you can confirm trades so that they can be removed from your inventory or cancel the trade if it never took place. Team requests will just show as cards on your dashboard based on your rank and platform.
      </p>
      <p>Enjoy!</p>
    </section>
  );
}

export default withRouter(LangingPage);
