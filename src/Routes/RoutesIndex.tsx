import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoFound from "./NoFound/NoFound";
import Panel from "./Panel/Panel";
import User from "../Components/Users/User";
import UserList from "../Components/Users/UserList";
import UserForm from "../Components/Users/UserForm";

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Panel />}>
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
