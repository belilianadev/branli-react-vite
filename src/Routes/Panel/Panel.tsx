import "./Panel.css";
import { Layout } from "antd";

import HeaderAntd from "./HeaderAntd";
import FooterAntd from "./FooterAntd";
import { Outlet } from "react-router-dom";

function PanelAntd() {
  return (
    <Layout>
      <HeaderAntd />
      <Layout style={{ padding: "0px", marginTop: 64 }}>
        <Outlet />
      </Layout>
      <FooterAntd />
    </Layout>
  );
}
export default PanelAntd;
