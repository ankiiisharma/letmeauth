import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h3>Hello {user.name}, welcome here!</h3>
          <h5>This is currently under construction, see you soon.</h5>
        </div>
      ) : (
        <div>
          <h3>Hello User, welcome here!</h3>
          <h5>This is currently under construction, see you soon.</h5>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
