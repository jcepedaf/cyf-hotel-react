import React, { useState } from "react";
import Bookings2 from "./Bookings2";
import CustomerProfile from "./CustomerProfile";

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
          {!results.error ? (
            results.map((result, index) => (
              <Bookings2 setProfile={setProfile} result={result} key={index} />
            ))
          ) : (
            <h1>{results.error}</h1>
          )}
        </tbody>
      </table>
      {profile ? <CustomerProfile profile={profile} /> : null}
    </div>
  );
};

export default SearchResults;
