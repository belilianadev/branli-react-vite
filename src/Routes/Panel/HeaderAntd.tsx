import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { DatabaseTwoTone, HomeTwoTone, ShopTwoTone } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { ItemMenuNav } from "../../models/AntIntefaces";
import { propIcon } from "../../helpers/settingsFormAntd";

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
  {
    key: "salir",
    label: "Salir",
    icon: <DatabaseTwoTone {...propIcon} />,
  },
];

type Props = {
  clicMenuNav: (option: string) => void;
};

const HeaderAntd: React.FC<Props> = ({ clicMenuNav }) => {
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
        items={itemsMenuNav.map(({ key, label, icon }) => ({
          key,
          label: <NavLink to={`/${key}`}>{label}</NavLink>,
          icon,
          onClick: () => {
            clicMenuNav(key);
          },
        }))}
      />
    </Header>
  );
};

HeaderAntd.propTypes = {
  clicMenuNav: PropTypes.any,
};

export default HeaderAntd;