import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <div className="text-center text-slate-300">
        {user ? (
          <div>
            <h3 className="text-3xl font-semibold">
              Hello {user.name}, welcome here!
            </h3>
            <p className="text-lg font-medium mt-4">
              This is currently under construction, see you soon.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-3xl font-semibold">
              Hello User, welcome here!
            </h3>
            <p className="text-lg font-medium mt-4">
              This is currently under construction, see you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
