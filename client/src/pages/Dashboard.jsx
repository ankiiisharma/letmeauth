import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h3>Hello {user.name}, welcome here!</h3>

      <h5>This is currently under construction, see you soon.</h5>
    </>
  );
}

export default Dashboard;
