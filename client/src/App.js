import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import NoteView from "./components/NoteView";
import Nav from "./components/Nav";
import { selectView } from "./actions/notes";

const App = props => {
  const { selectedView, selectView } = props;
  return (
    <div>
      <Nav selectedView={selectedView} selectView={selectView} />
      {selectedView === "CREATE" && <NoteForm />}
      {selectedView === "LIST" && <NoteList />}
      {selectedView === "VIEW" && <NoteView />}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedView: state.selectedView
});

const mapDispatchToProps = dispatch => ({
  selectView: view => dispatch(selectView(view))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
