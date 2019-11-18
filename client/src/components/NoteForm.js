import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../actions/notes";

export class NoteForm extends Component {
  state = {
    title: "",
    content: "",
    errorMessages: []
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({ errorMessages: [] });

    let { title, content } = this.state;
    const errorMessages = [];

    if (!title) {
      errorMessages.push("Title is required");
    }
    if (title && title.length > 255) {
      errorMessages.push("Title is maximum 255 characters");
    }
    if (!content) {
      errorMessages.push("Content is required");
    }
    if (content && content.length > 1024) {
      errorMessages.push("Content is maximum 1024 characters");
    }

    if (errorMessages.length > 0) {
      this.setState({
        errorMessages: errorMessages
      });
      return;
    }

    this.props.createNote({ title, content });

    this.setState({ title: "", content: "" });
  };

  renderErrors = () => {
    return this.state.errorMessages.map((message, index) => {
      return <li key={index}>{message}</li>;
    });
  };

  onBlur = e => {
    this.setState({ errorMessages: [] });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Create Note</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <label htmlFor="content">Content:</label>
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.onChange}
            onBlur={this.onBlur}
            rows={20}
          />
          {this.state.errorMessages.length > 0 && (
            <div className="form-errors">
              <ul>{this.renderErrors()}</ul>
            </div>
          )}
          <button type="submit">Create</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note))
});

export default connect(null, mapDispatchToProps)(NoteForm);
