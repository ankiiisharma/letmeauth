import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <>
      {/* <h1> Dashboard </h1> */}
      {!!user && (
        <>
          <h2> heya, {user.name}! </h2>
          <h4> this page is underconstruction... </h4>
        </>
      )}
    </>
  );
}

export default Dashboard;
