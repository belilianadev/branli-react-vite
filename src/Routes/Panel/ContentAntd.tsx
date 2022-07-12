import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;
const ContentAntd = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: "0px 24px",
        margin: 0,
        minHeight: "75vh",
      }}
    >
      <Outlet />
    </Content>
  );
};

export default ContentAntd;
