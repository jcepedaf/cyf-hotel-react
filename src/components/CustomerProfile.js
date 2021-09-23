import React, { useEffect, useState } from "react";

function CustomerProfile(props) {
  const [customerProfile, setCustomerProfile] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.profile}`)
      .then(res => res.json())
      .then(customerData => {
        setCustomerProfile(customerData);
      });
  }, [customerProfile]);

  return (
    <div>
      <p>Customer Profile</p>
      <ul>
        <li>ID: {customerProfile.id}</li>
        <li>Email: {customerProfile.email}</li>
        <li>VIP: {customerProfile.vip ? "YES" : "NO"}</li>
        <li>Phone: {customerProfile.phoneNumber}</li>
      </ul>
    </div>
  );
}

export default CustomerProfile;
