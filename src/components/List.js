import React, { useState, useEffect } from "react";
import "./styles/List.css";
import Item from "./Item";
import DateDisplay from "./DateDisplay";
import Input from "./Input";

const List = () => {
  const [dayName, setDayName] = useState("");
  const [monthName, setMonthName] = useState("");
  const [day, setDay] = useState("");
  //Todo Items
  const [items, setItems] = useState([]);

  const getDayName = () => {
    //Get day name
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();
    const day = date.getDay();
    return days[day];
  };

  const getMonthName = () => {
    //Get months
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const month = date.getMonth();
    return months[month];
  };

  const getDayWithSuffix = () => {
    //Get Date suffix
    function ordinal_suffix_of(i) {
      var j = i % 10,
        k = i % 100;
      if (j === 1 && k !== 11) {
        return i + "st";
      }
      if (j === 2 && k !== 12) {
        return i + "nd";
      }
      if (j === 3 && k !== 13) {
        return i + "rd";
      }
      return i + "th";
    }
    const date = new Date();
    //Get Date(1-30)
    const monthDate = date.getDate();
    return ordinal_suffix_of(monthDate);
  };

  useEffect(() => {
    setDayName(getDayName());
    setMonthName(getMonthName());
    setDay(getDayWithSuffix());
  }, []);

  return (
    <div className="body">
      <div className="container">
        <DateDisplay day={day} dayName={dayName} monthName={monthName} />
        {/* Mapping Arrray */}
        {items.map((item, index) => (
          <Item
            name={item}
            key={index}
            setItems={setItems}
            items={items}
            id={index}
          />
        ))}
        <Input setItems={setItems} />
      </div>
    </div>
  );
};

export default List;
