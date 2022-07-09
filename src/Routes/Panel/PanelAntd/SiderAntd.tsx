import { LeftSquareTwoTone, RightSquareTwoTone } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";

const { Sider } = Layout;

const SiderAntd = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ height: "100vh" }}
    >
      <Menu
        theme="dark"
        mode="inline"
        items={[
          {
            key: "1",
            icon: collapsed ? <RightSquareTwoTone /> : <LeftSquareTwoTone />,
            label: "collapsing",
            onClick: () => setCollapsed(!collapsed),
          },
        ]}
      />
    </Sider>
  );
};

export default SiderAntd;
