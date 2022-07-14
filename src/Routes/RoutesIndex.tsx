import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserIndex from "../components/Users/UserIndex";
import UserList from "../components/Users/UserList";
import UserForm from "../components/Users/UserForm";
import NoFound from "./NoFound/NoFound";
import Panel from "./Panel/Panel";

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Panel />}>
          <Route path="/usuarios/*" element={<UserIndex />}>
            <Route index element={<UserList />} />
            <Route path="form" element={<UserForm />} />
            <Route path="agregar" element={<UserForm />} />
          </Route>

          <Route path="/productos/*" element={<UserIndex />}>
            <Route index element={<UserList />} />
            <Route path="form" element={<UserForm />} />
            <Route path="agregar" element={<UserForm />} />
          </Route>
        </Route>
        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
