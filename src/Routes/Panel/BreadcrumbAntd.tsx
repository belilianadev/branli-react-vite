import { Breadcrumb } from "antd";

const BreadcrumbAntd = () => {
  return (
    <Breadcrumb style={{ margin: "5px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbAntd;
