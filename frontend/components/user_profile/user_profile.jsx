import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
    this.state = { username: "User Does Not Exist",
      image_url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      description: undefined
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    const image = document.getElementById('profile-picture');
    image.onerror = function () {
      this.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  handleModal(e) {
    e.preventDefault();
    this.props.openModal('userEdit');
  }

  render() {
    if (this.props.user) {
      return (
        <div className="profile-grid-container">
          <div className="profile-banner"></div>
          <div className="profile-column-1">
            <img id="profile-picture" src={this.props.user.image_url} />
            <span className="profile-name">@{this.props.user.username}</span>
            {this.props.currentUser === true ?
              <button onClick={this.handleModal} className="profile-button modal"><i className="fas fa-pencil-alt"></i> Edit</button>
              : <button className="profile-button">Follow</button>
            }
            <span className="profile-description"></span>
            <p id="profile-description">{this.props.user.description}</p>
          </div>
          <div className="profile-column-2"></div>
        </div>
      )
    } else {
      return (
        <div className="profile-grid-container">
          <div className="profile-banner"></div>
          <div className="profile-column-1">
            <img id="profile-picture" src={this.state.image_url} />
            <span className="profile-name">{this.state.username}</span>
            { this.props.currentUser === true ? 
                <button onClick={this.handleModal} className="profile-button modal"><i className="fas fa-pencil-alt"></i> Edit</button>
                : <button className="profile-button">Follow</button>
            }
            <span className="profile-description"></span>
            <p id="profile-description">{this.state.description}</p>
          </div>
          <div className="profile-column-2"></div>
        </div>
      )
    }
  }
}

export default UserProfile;