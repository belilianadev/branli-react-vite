import { NavLink } from "react-router-dom";
import { DatabaseTwoTone, HomeTwoTone, ShopTwoTone } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { ItemMenuNav } from "../../models/AntIntefaces";
import { propIcon } from "../../helpers/settingsFormAntd";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";

const { Header } = Layout;

export const itemsMenuNav: ItemMenuNav[] = [
  {
    key: "",
    label: "",
    icon: <HomeTwoTone {...propIcon} />,
  },
  {
    key: "productos",
    label: "Productos",
    icon: <ShopTwoTone {...propIcon} />,
  },
  {
    key: "ventas",
    label: "Ventas",
    icon: <DatabaseTwoTone {...propIcon} />,
  },
  {
    key: "proveedores",
    label: "Proveedores",
    icon: <DatabaseTwoTone {...propIcon} />,
  },
  {
    key: "informes",
    label: "Informes",
    icon: <DatabaseTwoTone {...propIcon} />,
  },
  {
    key: "clientes",
    label: "Clientes",
    icon: <DatabaseTwoTone {...propIcon} />,
  },
  {
    key: "actividades",
    label: "Actividades",
    icon: <DatabaseTwoTone {...propIcon} />,
  },
  {
    key: "usuarios",
    label: "Usuarios",
    icon: <DatabaseTwoTone {...propIcon} />,
  },
];

const HeaderAntd = () => {
  const { logOut } = useContext(UserContext);

  const items1 = itemsMenuNav.map(({ key, label, icon }) => ({
    key,
    label: <NavLink to={`/${key}`}>{label}</NavLink>,
    icon,
  }));

  const items2 = [
    {
      key: "salir",
      label: "Salir",
      icon: <DatabaseTwoTone {...propIcon} />,
      onClick: () => {
        logOut();
      },
    },
  ];

  return (
    <Header
      className="header"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className="logo">Branli</div>

      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[""]}
        items={[...items1, ...items2]}
      />
    </Header>
  );
};

export default HeaderAntd;
