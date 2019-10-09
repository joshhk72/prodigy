import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = props.user;
  }

  componentDidMount() {
    $(".modal-container *").addClass("modal");
    $(".modal-screen").removeClass("modal");
  }

  handleClick(e) {

  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal-screen modal-hide" id="modal-screen"/>
        <form onClick={this.handleClick} className="profile-modal-form modal-hide" id="modal-form">
          <label>Change Username
                <input type="text" />
          </label>
          <label>Change Profile Pic
                <input type="text" />
          </label>
          <label>Change Bio</label>
          <textarea cols="30" rows="5" />
          <label>Change Email
                <input type="text" />
          </label>
          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm;