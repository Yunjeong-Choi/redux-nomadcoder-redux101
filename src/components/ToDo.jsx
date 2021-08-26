import React from "react";
import { actionCreators } from "../store";
import { connect } from "react-redux";

const ToDo = ({ text, delToDo }) => {
  const onClick = () => {
    delToDo();
  };
  return (
    <>
      <li>
        {text}
        <button onClick={onClick}>delete</button>
      </li>
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { delToDo: () => dispatch(actionCreators.delToDo(ownProps.id)) };
};

export default connect(null, mapDispatchToProps)(ToDo);
