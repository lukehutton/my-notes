import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNote, viewNote } from "../actions/notes";
import Draggable from "react-draggable";
import { MdDeleteForever, MdPageview } from "react-icons/md";
import LongText from "./LongText";

class Note extends Component {
  render() {
    const { note, deleteNote, viewNote } = this.props;
    return (
      <Draggable>
        <div className="note">
          <div className="note-title">
            <LongText content={note.title} limit={18} />
          </div>
          <hr className="note-separator" />
          <div className="note-content">
            <LongText content={note.content} limit={100} />
          </div>
          <div className="actions">
            <span className="delete" onClick={() => deleteNote(note.id)}>
              <MdDeleteForever /> delete
            </span>
            <span className="view" onClick={() => viewNote(note)}>
              <MdPageview /> view
            </span>
          </div>
        </div>
      </Draggable>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteNote: id => dispatch(deleteNote(id)),
  viewNote: note => dispatch(viewNote(note))
});

export default connect(null, mapDispatchToProps)(Note);
