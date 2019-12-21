import React from 'react';
import ActivitySection from './activity_section'
import FadeIn from 'react-fade-in';
import ReactLoading from 'react-loading';
import defaultImage from 'assets/images/default-profile.jpg';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
    this.state = { 
      username: "User Does Not Exist",
      description: undefined,
      done: false
    }
    this.fetchPage = this.fetchPage.bind(this);
  }

  componentDidMount() {
    this.props.clearActivities();
    this.props.fetchUser(this.props.match.params.userId)
      .then(res => {
        this.props.fetchActivityPage(res.user.id, 1)
          .then(action => this.setState({ done: true, last: action.res.last }));
      }, () => this.setState({ done: true }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.clearActivities();
      this.setState({ done: false }, () => {
        this.props.fetchUser(this.props.match.params.userId)
          .then(res => {
            this.props.fetchActivityPage(res.user.id, 1)
              .then(action => this.setState({ done: true, last: action.res.last }));
          }, () => this.setState({ done: true }))
      })
    }
  }

  componentWillUnmount() {
    this.props.clearActivities();
  }

  handleModal(e) {
    e.preventDefault();
    this.props.openModal('userEdit');
  }

  fetchPage(page) {
    if (this.state.last) return; 
    this.props.fetchActivityPage(this.props.match.params.userId, page)
      .then(action => this.setState({ last: action.res.last }));
  }

  render() {
    if (!this.state.done) {
      return <ReactLoading type={"bars"} color={"white"} />;
    } else if (this.props.user === undefined) {
      return <div className="no-tracks-shown"><h2>Error!</h2><p>The user you are looking for does not exist!</p></div>
    };

    const { user, activities } = this.props; 
    const bannerStyle = { backgroundImage: `url(${this.props.user.image_url})` };
    return (
      <div className="profile-grid-container">
        <div className="profile-banner" style={this.props.user.image_url ? bannerStyle : null}/>
        <div id="profile-picture-container">
          <div className="content">
            <img id="profile-picture"
              src={this.props.user.image_url || defaultImage}
              onError={e => e.target.src = defaultImage}
            />
          </div>
        </div>
        <div className="profile-column-1">
          <span className="profile-name">@{this.props.user.username}</span>
          {this.props.currentUserPage === true ?
            <button 
              onClick={this.handleModal} 
              className="profile-button modal">
              <i className="fas fa-pencil-alt" /> Edit
            </button>
            : (this.props.currentUser ? <button className="profile-button">Follow</button> : null)
          }
          <span className="profile-description"></span>
          <p id="profile-description">{this.props.user.description}</p>
        </div>
        <div className="profile-column-2">
          { activities && activities.length > 0 &&
            <ActivitySection 
              activities={activities} 
              username={user.username}
              fetchPage={this.fetchPage}
              last={this.state.last}/>
          }
          { activities.length === 0 && 
            <p className="no-activities">The user has no activities yet.</p>
          }
        </div>
      </div>
    )
  }
}

export default UserProfile;