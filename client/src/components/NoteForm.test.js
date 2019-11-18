import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NoteForm } from "./NoteForm";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    createNote: jest.fn()
  };
  const enzymeWrapper = shallow(<NoteForm {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("NoteForm", () => {
  it("should render self", () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find("h2").text()).toBe("Create Note");
  });

  it("should call createNote if length of title and content do not exceed maximums", () => {
    const { enzymeWrapper, props } = setup();
    const title = enzymeWrapper.find("input").at(0);
    title.simulate("change", { target: { name: "title", value: "Title" } });
    const content = enzymeWrapper.find("input").at(1);
    title.simulate("change", { target: { name: "content", value: "Content" } });
    const form = enzymeWrapper.find("form");
    form.simulate("submit", { preventDefault() {} });
    expect(props.createNote.mock.calls.length).toBe(1);
  });

  it("should not call createNote and display error if length of title exceeds maximum", () => {
    const { enzymeWrapper, props } = setup();
    const title = enzymeWrapper.find("input").at(0);
    title.simulate("change", {
      target: { name: "title", value: "T".repeat(256) }
    });
    const form = enzymeWrapper.find("form");
    form.simulate("submit", { preventDefault() {} });
    expect(props.createNote.mock.calls.length).toBe(0);
    expect(enzymeWrapper.find(".form-errors").text()).toContain(
      "Title is maximum 255 characters"
    );
  });
});
