"use strict";

function Tweet({ username, name, date, message }) {
  return (
  <li className="tweet">
    Username: { username},
    Name: { name },
    Date: { date },
    Message: { message }
  </li>
  );
}