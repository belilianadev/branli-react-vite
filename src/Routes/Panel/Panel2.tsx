import Nav from "./Nav";
import Aside from "./Aside";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "../../Components/Users/User";
import NoFound from "../NoFound/NoFound";

function Panel() {
  return (
    <div className="panel">
      <header>BRANLI</header>
      <BrowserRouter>
        <Nav />
        <article>
          <Routes>
            <Route path="/" element={<Panel />} />
            <Route path="/usuarios" element={<User />} />
            <Route path="/prueba" element={<NoFound />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </article>
      </BrowserRouter>
      <Aside />
      <footer>Derechos reservados 2022</footer>
    </div>
  );
}
export default Panel;
