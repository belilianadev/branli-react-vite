import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="active" to="/prueba">
            <i className="fa-solid fa-shop"></i>Compras
          </NavLink>
        </li>
        <li>
          <NavLink to="/prueba">
            <i className="fa-solid fa-briefcase"></i>Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/prueba">
            <i className="fa-solid fa-cash-register"></i>Ventas
          </NavLink>
        </li>
        <li>
          <NavLink to="/prueba">
            <i className="fa-solid fa-user-group"></i>Proveedores
          </NavLink>
        </li>
        <li>
          <NavLink to="/prueba">
            <i className="fa-solid fa-file-lines"></i>Informes
          </NavLink>
        </li>
        <li>
          <NavLink to="/prueba">
            <i className="fa-solid fa-users-line"></i>Clientes
          </NavLink>
        </li>
        <li>
          <NavLink to="/prueba">
            <i className="fa-solid fa-list-ul"></i>Actividades
          </NavLink>
        </li>
        <li>
          <NavLink to="/usuarios">
            <i className="fa-solid fa-user"></i>Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink to="/prueba">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>Salir
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
