import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
    this.state = { username: "loading",
      image_url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      description: undefined
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
      this.setState(this.props.user);
    } else if (this.props.user && this.state.description === undefined) {
      console.log(this.props.user);
      console.log(this.state);
      this.setState(this.props.user);
    }
  }

  handleModal(e) {
    e.preventDefault();

    const modal = document.getElementsByClassName("modal-hide");

    Array.from(modal).forEach(ele => {
      ele.classList.remove("modal-hide");
    })
    window.addEventListener('click', this.handleOtherClick);
  }

  handleOtherClick(e) {
    if (!e.target.matches('.modal')) {
      const screen = document.getElementById("modal-screen");
      const form = document.getElementById("modal-form");
      screen.classList.add("modal-hide");
      form.classList.add("modal-hide");
    };
    window.removeEventListener("click", this.handleOtherClick);
  }

  render() {
    return (
      <div className="profile-grid-container">
        <div className="profile-banner"></div>
        <div className="profile-column-1">
          <img id="profile-picture" src={this.state.image_url} />
          <span className="profile-name">@{this.state.username}</span>
          <button onClick={this.handleModal}className="profile-edit-button modal"><i className="fas fa-pencil-alt"></i> Edit</button>
          <span className="profile-description"></span>
          <p id="profile-description">{this.state.description}</p>
        </div>
        <div className="profile-column-2"></div>
      </div>
    )
  }
}

export default UserProfile;