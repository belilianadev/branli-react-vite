import PropTypes from "prop-types";
import {
  HomeTwoTone,
  LeftSquareTwoTone,
  RightSquareTwoTone,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
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

const SiderAntd: React.FC<Props> = ({ clicCollapsedMenu }) => {
  const [collapsed, setCollapsed] = useState(false);
  const optionsComponents: ItemMenuNav[] = [
    {
      key: "default",
      label: "Default",
      icon: <HomeTwoTone {...propIcon} />,
    },
  ];

  return (
    <Sider
      className="site-layout-background"
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "81vh",
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
  clicCollapsedMenu: PropTypes.func.isRequired,
};

export default SiderAntd;
