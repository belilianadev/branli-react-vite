import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "../components/Users/User";
import UserList from "../components/Users/UserList";
import UserForm from "../components/Users/UserForm";
// import Panel from "./Panel/Panel";
import NoFound from "./NoFound/NoFound";
import PanelAntd from "./Panel/PanelAntd/PanelAntd";

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PanelAntd />}>
          <Route path="/usuarios/*" element={<User />}>
            <Route index element={<UserList />} />
            <Route path="form" element={<UserForm />} />
          </Route>
        </Route>

        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
