import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes } from "../actions/notes";
import Note from "./Note";

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const { notes } = this.props;

    if (!notes.length) {
      return <div>No Notes</div>;
    }

    const list = notes.map((note, index) => {
      return <Note key={index} index={index} note={note} />;
    });

    return <div className="note-list">{list}</div>;
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
