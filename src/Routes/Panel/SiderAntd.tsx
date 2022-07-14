import PropTypes from "prop-types";
import {
  HomeTwoTone,
  LeftSquareTwoTone,
  RightSquareTwoTone,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { options as optUsers } from "../../components/Users/UserIndex";
import { NavLink } from "react-router-dom";
import { ItemMenuNav } from "../../models/AntIntefaces";
import { propIcon } from "../../helpers/settingsFormAntd";

const { Sider } = Layout;
type Props = {
  selected?: string;
  clicCollapsedMenu: (isCollapsedMenu: boolean) => void;
};

/* const subMenuSider = [
  {
    key: "option1",
    label: "Option1",
    icon: <HomeTwoTone {...propIcon} />,
  },
  {
    key: "option2",
    label: "Option2",
    icon: <HomeTwoTone {...propIcon} />,
  },
]; */

/* const itemsMenuSider = itemsMenuNav.map(({ key, label, icon }) => {
  return {
    key: `sider${label}`,
    icon,
    label,
    children: subMenuSider.map(({ key, label, icon }) => {
      return { key: key + Math.random(), label };
    }),
  };
}); */

const SiderAntd: React.FC<Props> = ({ selected = "/", clicCollapsedMenu }) => {
  const [collapsed, setCollapsed] = useState(false);
  let optionsComponents: ItemMenuNav[] = [
    {
      key: "default",
      label: "Default",
      icon: <HomeTwoTone {...propIcon} />,
    },
  ];

  switch (selected) {
    case "usuarios":
      console.log("llegue a sider: " + JSON.stringify(optUsers));
      optionsComponents = optUsers.map(({ key, label, icon }) => {
        return {
          key: key.concat(label),
          label: <NavLink to={`/${selected}/${key}`}>{label}</NavLink>,
          icon,
        };
      });
      break;

    default:
    // code block
  }

  return (
    <Sider
      className="site-layout-background"
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "80vh",
        position: "fixed",
        left: 0,
        top: 64,
      }}
    >
      <Menu
        theme="light"
        mode="inline"
        items={[
          {
            key: "1",
            icon: collapsed ? <RightSquareTwoTone /> : <LeftSquareTwoTone />,
            label: "collapsing",
            onClick: () => {
              setCollapsed(!collapsed);
              clicCollapsedMenu(collapsed);
            },
          },
          ...optionsComponents,
        ]}
      />
    </Sider>
  );
};

SiderAntd.propTypes = {
  selected: PropTypes.string,
  clicCollapsedMenu: PropTypes.func.isRequired,
};

export default SiderAntd;
