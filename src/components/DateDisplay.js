import React from "react";
import "./styles/DateDisplay.css";

const DateDisplay = ({ day, dayName, monthName }) => {
  return (
    <div>
      <div className="date">
        <h4 className="date-text">
          {day} {monthName}
        </h4>
      </div>
      <h5 className="main-heading">{dayName}</h5>
    </div>
  );
};

export default DateDisplay;
