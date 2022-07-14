import { HomeTwoTone } from "@ant-design/icons";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BreadcrumbAntd from "../../routes/Panel/BreadcrumbAntd";
import ContentAntd from "../../routes/Panel/ContentAntd";
import SiderAntd from "../../routes/Panel/SiderAntd";
import UserSubruta from "./UserSubruta";
import UserSubruta2 from "./UserSubruta2";

const propIcon = { twoToneColor: "#0D5E72" };

export const options = [
  {
    key: "agregar",
    label: "Agregar",
    icon: <HomeTwoTone {...propIcon} />,
  },
];

function UserIndex() {
  useEffect(() => {}, []);

  const [collapsedSider, setCollapsedSider] = useState(false);

  const handleClicCollapsedSider = (collapsed: boolean) => {
    setCollapsedSider(!collapsed);
  };

  return (
    <>
      <SiderAntd clicCollapsedMenu={handleClicCollapsedSider} />
      <Layout
        style={{ padding: "0 24px", marginLeft: collapsedSider ? 64 : 200 }}
      >
        <BreadcrumbAntd />

        <Routes>
          <Route path="/*" element={<ContentAntd />}>
            <Route index element={<UserSubruta2 />} />
            <Route path="subruta" element={<UserSubruta />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}
export default UserIndex;
