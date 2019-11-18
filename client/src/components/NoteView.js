import React, { Component } from "react";
import { connect } from "react-redux";

class NoteView extends Component {
  render() {
    const { note } = this.props;
    return (
      <div className="note-view">
        <div className="note-title">{note.title}</div>
        <hr className="note-separator" />
        <div className="note-content-view">{note.content}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  note: state.note
});

export default connect(mapStateToProps, null)(NoteView);
