import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
moment().format();

const SearchResults = ({ results }) => {
  const [profile, setProfile] = useState();

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody>
          {results.map(
            (
              {
                id,
                title,
                firstName,
                surname,
                email,
                roomId,
                checkInDate,
                checkOutDate
              },
              index
            ) => {
              const checkOut = moment(checkOutDate, "YYYY-MM-DD");
              const checkIn = moment(checkInDate, "YYYY-MM-DD");

              return (
                <tr key={index}>
                  <th>{id}</th>
                  <td>{title}</td>
                  <td>{firstName}</td>
                  <td>{surname}</td>
                  <td>{email}</td>
                  <td>{roomId}</td>
                  <td>{checkInDate}</td>
                  <td>{checkOutDate}</td>
                  <td>{checkOut.diff(checkIn, "days")}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => setProfile(id)}
                    >
                      Show profile
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      {profile ? <CustomerProfile profile={profile} /> : null}
    </div>
  );
};

export default SearchResults;
