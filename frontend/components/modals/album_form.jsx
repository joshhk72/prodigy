import React from 'react';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentAlbum;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.closeModal();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateAlbum(this.state)
      .then(this.props.closeModal())
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    return (
      <form className="album-form" onSubmit={this.handleSubmit}>
        <label>Album Title
          <br />
          <input type="text" onChange={this.update("title")} value={this.state.title || ''} />
        </label>
        <label>Album Image
          <br />
          <input type="text" onChange={this.update("image_url")} value={this.state.image_url || ''} />
        </label>
        <label>Banner Image
          <br />
          <input type="text" onChange={this.update("banner_image_url")} value={this.state.banner_image_url || ''} />
        </label>
        <label>Description
          <br />
          <textarea onChange={this.update("description")} value={this.state.description || ''} />
        </label>
        <button>Save</button>
      </form>
    )
  }
};

export default AlbumForm;