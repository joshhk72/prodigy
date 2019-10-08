import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-grid-container">
        <div className="profile-banner"></div>
        <div className="profile-column-2"></div>
        <div className="profile-column-2"></div>
      </div>
    )
  }
}

export default UserProfile;