import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state).then(() => this.props.closeModal());
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    if (this.props.user !== undefined) {
      return (
        <div className="modal-container modal-hide" id="profile-modal-container">
          <form onSubmit={this.handleSubmit} className="profile-modal-form modal-hide" id="modal-form">
            <label>Change Username
                  <input type="text" onChange={this.update("username")} value={this.state.username}/>
            </label>
            <label>Change Profile Pic
                  <input type="text" onChange={this.update("image_url")} value={this.state.image_url} />
            </label>
            <label>Change Bio</label>
            <textarea cols="30" rows="5" onChange={this.update("description")} value={this.state.description || ''}/>
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