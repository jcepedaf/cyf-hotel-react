import React, { useState } from "react";
import moment from "moment";
moment().format();

function Bookings2(props) {
  const checkOut = moment(props.result.checkOutDate, "YYYY-MM-DD");
  const checkIn = moment(props.result.checkInDate, "YYYY-MM-DD");
  const showProfile = () => props.setProfile(props.result.id);
  const [changeColor, setChangeColor] = useState("tr0");

  return (
    <tr
      className={changeColor}
      onClick={e =>
        changeColor === "tr0" ? setChangeColor("tr1") : setChangeColor("tr0")
      }
    >
      <th>{props.result.id}</th>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button className="btn btn-primary" onClick={showProfile}>
          Show profile
        </button>
      </td>
    </tr>
  );
}

export default Bookings2;
