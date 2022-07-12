import { HomeTwoTone } from "@ant-design/icons";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const propIcon = { twoToneColor: "#0D5E72" };

export const options = [
  {
    key: "agregar",
    label: "Agregar",
    icon: <HomeTwoTone {...propIcon} />,
  },
];

function UserIndex() {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <Outlet />
    </div>
  );
}
export default UserIndex;
