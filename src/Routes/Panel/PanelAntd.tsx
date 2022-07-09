import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
function PanelAntd() {
  return (
    <Layout>
      <Header>BRANLI</Header>
      <Layout>
        <Nav />
        <Content>
          <Outlet />
        </Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
export default PanelAntd;
