import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserIndex from "../components/Users/UserIndex";
import NoFound from "./NoFound/NoFound";
import Panel from "./Panel/Panel";
import PanelIndex from "./Panel/PanelIndex";
import InConstruction from "./NoFound/Inconstruction";

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Panel />}>
          <Route index element={<PanelIndex />} />
          <Route path="/productos/*" element={<InConstruction />} />
          <Route path="/ventas/*" element={<InConstruction />} />

          <Route path="/proveedores/*" element={<InConstruction />} />
          <Route path="/informes/*" element={<InConstruction />} />
          <Route path="/clientes/*" element={<InConstruction />} />
          <Route path="/actividades/*" element={<InConstruction />} />
          <Route path="/usuarios/*" element={<UserIndex />}>
            <Route path="subruta" element={<InConstruction />} />
          </Route>
        </Route>
        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
