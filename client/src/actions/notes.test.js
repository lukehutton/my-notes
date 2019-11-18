import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./notes";
import * as types from "./actionTypes";
import MockAdapter from "axios-mock-adapter";
import expect from "expect";
import axios from "axios";

describe("notes actions", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const API_URL = "http://localhost:3001/api/notes";
  let mock;

  beforeEach(function() {
    mock = new MockAdapter(axios);
  });

  it("creates CREATE_NOTE when posting note", () => {
    const note = {
      title: "Title",
      content: "Content"
    };
    mock.onPost(API_URL).reply(201, note);

    const expectedActions = [{ type: types.CREATE_NOTE, note }];
    const store = mockStore({ notes: [] }, expectedActions);

    return store.dispatch(actions.createNote(note)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates DELETE_NOTE when deleting note", () => {
    const note = {
      id: "123"
    };
    mock.onDelete(`${API_URL}/${note.id}`).reply(200);

    const expectedActions = [{ type: types.DELETE_NOTE, id: note.id }];
    const store = mockStore({ notes: [] }, expectedActions);

    return store.dispatch(actions.deleteNote(note.id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates GET_NOTES when getting notes", () => {
    const notes = [
      { title: "Title 1", content: "Content 1" },
      { title: "Title 2", content: "Content 2" }
    ];
    mock.onGet(API_URL).reply(200, notes);

    const expectedActions = [{ type: types.GET_NOTES, notes: notes }];
    const store = mockStore({ notes: [] }, expectedActions);

    return store.dispatch(actions.getNotes()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates VIEW_NOTE", () => {
    const note = {
      title: "Title",
      content: "Content"
    };
    const expectedActions = [{ type: types.VIEW_NOTE, note: note }];
    const store = mockStore({ notes: [] }, expectedActions);
    store.dispatch(actions.viewNote(note));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates SELECT_VIEW", () => {
    const view = "LIST";
    const expectedActions = [{ type: types.SELECT_VIEW, view: view }];
    const store = mockStore({ notes: [] }, expectedActions);
    store.dispatch(actions.selectView(view));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
