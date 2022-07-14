import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbAntd = () => {
  const { pathname } = useLocation();
  const pathSnippets = pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url: string = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return console.log("url: " + JSON.stringify(url));
  });
  console.log(JSON.stringify(extraBreadcrumbItems));
  let uri = "";
  const uris: string[] = pathSnippets.map(
    (item) => (uri = uri.concat(item + "/"))
  );

  return (
    <Breadcrumb style={{ margin: "5px 0" }}>
      <Breadcrumb.Item key={"breadcrumb0"}>
        <Link to={"/"}>Home</Link>
      </Breadcrumb.Item>
      {pathSnippets.map((item, index) => (
        <Breadcrumb.Item key={`breadcrumb${index + 1}`}>
          <Link to={`/${uris[index].slice(0, -1)}`}>{item}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbAntd;
