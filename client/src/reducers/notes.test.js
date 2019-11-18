import reducer from "./notes";
import * as types from "../actions/actionTypes";

describe("notes reducer", () => {
  const note1 = {
    title: "Title 1",
    content: "Content 1"
  };
  const note2 = {
    title: "Title 2",
    content: "Content 2"
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      notes: [],
      note: {},
      selectedView: "LIST"
    });
  });

  it("should handle CREATE_NOTE", () => {
    expect(
      reducer(
        { notes: [] },
        {
          type: types.CREATE_NOTE,
          note: note1
        }
      )
    ).toEqual({ notes: [note1], selectedView: "LIST" });

    expect(
      reducer(
        { notes: [note1] },
        {
          type: types.CREATE_NOTE,
          note: note2
        }
      )
    ).toEqual({ notes: [note1, note2], selectedView: "LIST" });
  });

  it("should handle DELETE_NOTE", () => {
    expect(
      reducer(
        { notes: [note1] },
        {
          type: types.DELETE_NOTE,
          note: note1
        }
      )
    ).toEqual({ notes: [] });
  });
});
