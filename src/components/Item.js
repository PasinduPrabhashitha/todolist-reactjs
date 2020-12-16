import React from "react";
import "./styles/Item.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";

const List = ({ name, items, setItems, id }) => {
  function handleClick(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="list-item">
      <p> {name} </p>
      <IconButton
        aria-label="delete"
        color="primary"
        onClick={() => handleClick(id)}
      >
        <DeleteOutlineRoundedIcon />
      </IconButton>
    </div>
  );
};

export default List;
