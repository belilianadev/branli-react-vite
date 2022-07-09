import "./PanelAntd.css";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import HeaderAntd from "./HeaderAntd";
import SiderAntd from "./SiderAntd";

const { Footer, Content } = Layout;

function PanelAntd() {
  return (
    <Layout>
      <HeaderAntd />
      <Layout className="site-layout" style={{ padding: "0px", marginTop: 64 }}>
        <SiderAntd />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
}
export default PanelAntd;
