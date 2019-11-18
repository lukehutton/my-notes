import * as types from "./actionTypes";
const axios = require("axios");
const API_URL = "http://localhost:3001/api/notes";

export const createNote = note => dispatch => {
  return axios.post(API_URL, note).then(function(response) {
    dispatch({ type: types.CREATE_NOTE, note: response.data });
  });
};

export const deleteNote = id => dispatch => {
  return axios.delete(`${API_URL}/${id}`).then(function() {
    dispatch({ type: types.DELETE_NOTE, id: id });
  });
};

export const getNotes = () => dispatch => {
  return axios.get(API_URL).then(function(response) {
    dispatch({ type: types.GET_NOTES, notes: response.data });
  });
};

export const viewNote = note => dispatch => {
  return dispatch({ type: types.VIEW_NOTE, note });
};

export const selectView = view => dispatch => {
  dispatch({ type: types.SELECT_VIEW, view });
};
