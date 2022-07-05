import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function User() {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <Outlet />
    </div>
  );
}
export default User;
