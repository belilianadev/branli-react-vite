import "./Panel.css";
import Nav from "./Nav";
import Aside from "./Aside";
import { Outlet } from "react-router-dom";

function Panel() {
  return (
    <div className="panel">
      <header>BRANLI</header>

      <Nav />
      <article>
        <Outlet />
      </article>
      <Aside />
      <footer>Derechos reservados 2022</footer>
    </div>
  );
}
export default Panel;
