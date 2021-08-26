import { createStore } from "redux";

const ADD = "ADD";
const DEL = "DEL";

const addToDo = (text) => {
  return { type: ADD, text };
};

const delToDo = (id) => {
  return { type: DEL, id };
};

export const actionCreators = { addToDo, delToDo };

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newToDo = { text: action.text, id: Date.now() };
      return [newToDo, ...state];
    case DEL:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return [];
  }
};

const store = createStore(reducer);

export default store;
