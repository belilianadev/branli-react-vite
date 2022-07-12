import "./Panel.css";
import { Layout } from "antd";

import HeaderAntd from "./HeaderAntd";
import SiderAntd from "./SiderAntd";
import BreadcrumbAntd from "./BreadcrumbAntd";
import { useState } from "react";
import FooterAntd from "./FooterAntd";
import ContentAntd from "./ContentAntd";

function PanelAntd() {
  const [optionMenuNav, setOptionMenuNav] = useState("");
  const [collapsedSider, setCollapsedSider] = useState(false);

  const handleClicMenuNav = (option: string) => {
    setOptionMenuNav(option);
  };

  const handleClicCollapsedSider = (collapsed: boolean) => {
    setCollapsedSider(!collapsed);
  };

  return (
    <Layout>
      <HeaderAntd clicMenuNav={handleClicMenuNav} />
      <Layout style={{ padding: "0px", marginTop: 64 }}>
        <SiderAntd
          selected={optionMenuNav}
          clicCollapsedMenu={handleClicCollapsedSider}
        />
        <Layout
          style={{ padding: "0 24px", marginLeft: collapsedSider ? 64 : 200 }}
        >
          <BreadcrumbAntd />
          <ContentAntd />
        </Layout>
      </Layout>
      <FooterAntd />
    </Layout>
  );
}
export default PanelAntd;
