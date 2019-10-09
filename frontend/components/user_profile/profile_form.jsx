import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = props.user;
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
    const screen = document.getElementById("modal-screen");
    const form = document.getElementById("modal-form");
    screen.classList.add("modal-hide");
    form.classList.add("modal-hide");
  }

  handleModalClick() {
    const screen = document.getElementById("modal-screen");
    const form = document.getElementById("modal-form");
    screen.classList.add("modal-hide");
    form.classList.add("modal-hide");
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    if (this.props.user !== undefined) {
      return (
        <div className="modal-container">
          <div onClick={this.handleModalClick} className="modal-screen modal-hide" id="modal-screen"/>
          <form onSubmit={this.handleSubmit} className="profile-modal-form modal-hide" id="modal-form">
            <label>Change Username
                  <input type="text" onChange={this.update("username")} value={this.state.username}/>
            </label>
            <label>Change Profile Pic
                  <input type="text" onChange={this.update("image_url")} value={this.state.image_url} />
            </label>
            <label>Change Bio</label>
            <textarea cols="30" rows="5" onChange={this.update("description")} value={this.state.description}/>
            <label>Change Email
                  <input type="text" onChange={this.update("email")} value={this.state.email}/>
            </label>
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default ProfileForm;