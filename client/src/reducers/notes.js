import * as types from "../actions/actionTypes";

const initialState = {
  notes: [],
  note: {},
  selectedView: "LIST"
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.note],
        selectedView: "LIST"
      };
    case types.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(({ id }) => id !== action.id)
      };
    case types.GET_NOTES:
      return {
        ...state,
        notes: action.notes
      };
    case types.VIEW_NOTE:
      return {
        ...state,
        note: action.note,
        selectedView: "VIEW"
      };
    case types.SELECT_VIEW:
      return {
        ...state,
        selectedView: action.view
      };

    default:
      return state;
  }
};

export default notesReducer;
