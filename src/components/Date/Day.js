import React from "react";

function Day() {
  const date = new Date();
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();

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
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div>
      <h3>
        {month} {day}th, {year}
      </h3>
    </div>
  );
}

export default Day;
