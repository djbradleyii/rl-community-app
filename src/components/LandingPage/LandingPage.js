import React from 'react';
import { withRouter } from 'react-router-dom';
import './LandingPage.css';

function LangingPage() {
  return (
    <section className="landing-page">
      <p>The Rocket League Community App is where you post your inventory, view user's inventory, and find users to join your squad.  Create your account and begin your journey expanding your Rocket League network.</p>

      <p>As a User, you have access to the following features:</p>

      <p>
        <b>Add your personal inventory</b>
        {' '}
        - Add Inventory to your account.
        - Remove items from inventory that have been traded.
        - Search your inventory by Category, Color, Rarity or Attribute.
      </p>

      <p>
        <b>Search for teammates</b>
        {' '}
        - Users who share your rank will be displayed on your dashboard.
        - Search/View users based on search criteria of Platform, Rank or Division.
      </p>

      <p>
        <b>Edit Personal Data</b>
        {' '}
        - Update Platform, Rank, or Division to ensure that the Available teams' section of your Dashboard is current. Always keep your information current so that other users can find you.
      </p>
      <p>
        <b>Users Posted Inventory</b>
        {' '}
        - Click on the Gamertag to view the users details and their posted inventory.
      </p>
      <p>Demo Account: Demoaccount@gmail.com Password: DemoPassword1!</p>
      <p>Enjoy!</p>
    </section>
  );
}

export default withRouter(LangingPage);
