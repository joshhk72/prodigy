import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    const linkUrl = this.props.formType === "login" ? "/signup" : "/login"
    const linkText = this.props.formType === "login" ? "Sign up here." : "Sign in here." // just like Genius!

    const errorLis = this.props.errors.map((error, i) => {
      return (
        <li key={i}>{error}</li>
      )
    });

    return (
      <div className='session-form-container'>
        <h2>{this.props.formType}</h2>
        {this.props.errors.length > 0 && 
          <ul>
            {errorLis}
          </ul>
        }
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
              <input type="text" value={this.state.username} onChange={this.update("username")} />
          </label>
          {this.props.formType === 'signup' &&
            <label> Email:
              <input type="text" value={this.state.email} onChange={this.update("email")} />
            </label>
          }
          <label>
            Password:
              <input type="password" value={this.state.password} onChange={this.update("password")} />
          </label>
          <button>{this.props.formType}</button>
          <Link to={linkUrl}>{linkText}</Link>
        </form>
      </div>)
  }
}

export default SessionForm;