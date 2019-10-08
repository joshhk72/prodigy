import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-grid-container">
        <div className="profile-banner"></div>
        <div className="profile-column-1">
          <img id="profile-picture" src={this.props.user.image_url} />
          <span className="profile-name">@{this.props.user.username}</span>
          <button className="profile-edit-button"><i class="fas fa-pencil-alt"></i> Edit</button>
          <span className="profile-description"></span>
          <p id="profile-description"></p>
        </div>
        <div className="profile-column-2"></div>
      </div>
    )
  }
}

export default UserProfile;