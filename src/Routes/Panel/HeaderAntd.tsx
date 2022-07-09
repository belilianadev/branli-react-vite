import { NavLink } from "react-router-dom";
import { DatabaseTwoTone, ShopTwoTone } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const itemsMenuNav = [
  {
    key: "productos",
    label: "Productos",
    icon: <ShopTwoTone />,
  },
  {
    key: "ventas",
    label: "Ventas",
    icon: <DatabaseTwoTone />,
  },
  {
    key: "proveedores",
    label: "Proveedores",
    icon: <DatabaseTwoTone />,
  },
  {
    key: "informes",
    label: "Informes",
    icon: <DatabaseTwoTone />,
  },
  {
    key: "clientes",
    label: "Clientes",
    icon: <DatabaseTwoTone />,
  },
  {
    key: "actividades",
    label: "Actividades",
    icon: <DatabaseTwoTone />,
  },
  {
    key: "usuarios",
    label: "Usuarios",
    icon: <DatabaseTwoTone />,
  },
  {
    key: "salir",
    label: "Salir",
    icon: <DatabaseTwoTone />,
  },
];

const HeaderAntd = () => {
  return (
    <Header
      className="header"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className="logo" />

      <Menu
        theme="dark"
        mode="horizontal"
        items={itemsMenuNav.map(({ key, label, icon }) => ({
          key,
          label: <NavLink to={`/${key}`}>{label}</NavLink>,
          icon,
        }))}
      />
    </Header>
  );
};

export default HeaderAntd;
