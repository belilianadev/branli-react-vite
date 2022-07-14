import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserIndex from "../components/Users/UserIndex";
import NoFound from "./NoFound/NoFound";
import Panel from "./Panel/Panel";

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Panel />}>
          <Route path="/ventas/*" element={<UserIndex />} />

          <Route path="/proveedores/*" element={<UserIndex />} />
          <Route path="/informes/*" element={<UserIndex />} />
          <Route path="/clientes/*" element={<UserIndex />} />
          <Route path="/actividades/*" element={<UserIndex />} />
          <Route path="/usuarios/*" element={<UserIndex />}>
            <Route path="subruta" element={<UserIndex />} />
          </Route>
        </Route>
        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
