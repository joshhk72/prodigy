import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserHistory } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount() {
    document.body.classList.add("dark-body");
    this.props.resetSessionErrors();
  }

  componentWillUnmount() {
    document.body.classList.remove("dark-body");
    this.props.resetSessionErrors();
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { username: "user1", password: "555555" }
    this.props.submitForm(user)
      .then(() => this.props.history.goBack());
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user)
      .then(() => this.props.history.goBack());
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    const [ linkText, headText, buttonText, altLinkUrl, altText ] 
      = this.props.formType === "login" ? 
      [ "Sign up here.", "Sign In", "Login", "/signup", "Don't" ] : 
      [ "Sign in here.", "Sign Up", "Create Account", "/login", "Already" ];
      

    const errorLis = this.props.errors.map((error, i) => {
      return (
        <li key={i}>{error}</li>
      )
    });

    return (
      <div className='session-form-container'>
        <h2>{headText}</h2>
        <form onSubmit={this.handleSubmit} className='session-form'>
          {this.props.errors.length > 0 &&
            <div className="session-error-list-container">
              <h3>Whoops</h3>
              <p>There must be some mistake</p>
              <ul className="session-error-list">
                {errorLis}
              </ul>
            </div>
          }
          <label>
            Genius Username
              <input type="text" value={this.state.username} onChange={this.update("username")} />
          </label>
          {this.props.formType === 'signup' &&
            <label> Email
              <input type="text" value={this.state.email} onChange={this.update("email")} />
            </label>
          }
          <label>
            Password
              <input type="password" value={this.state.password} onChange={this.update("password")} />
          </label>
          <button>{buttonText}</button>
        </form>
        <div id="alternative">
          <span>{altText} have an account? </span>
          <Link to={altLinkUrl}>{linkText}</Link>
          <br></br>
          {this.props.formType === "login" && <a className="demo" onClick={this.demoLogin}>Use a Demo Account Instead</a>}
        </div>
      </div>)
  }
}

export default SessionForm;