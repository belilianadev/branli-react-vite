function Panel() {
  
    return (
      <div className="panel">
        <header>BRANLI</header>
        <nav>
        <ul>
          <li><a className="active" href="d"><i className="fa-solid fa-shop"></i>Compras</a></li>
          <li><a href=""><i className="fa-solid fa-briefcase"></i>Productos</a></li>
          <li><a href=""><i className="fa-solid fa-cash-register"></i>Ventas</a></li>
          <li><a href=""><i className="fa-solid fa-user-group"></i>Proveedores</a></li>
          <li><a href=""><i className="fa-solid fa-file-lines"></i>Informes</a></li>
          <li><a href=""><i className="fa-solid fa-users-line"></i>Clientes</a></li>
          <li><a href=""><i className="fa-solid fa-list-ul"></i>Actividades</a></li>
          <li><a href=""><i className="fa-solid fa-arrow-right-from-bracket"></i>Salir</a></li>
        </ul>
        </nav>
        <article>
          <section>
            <h3>Despliegue informacion</h3>
            <p>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
          </section>
          <section>
            <h3>Imagenes</h3>
            <p>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
          </section>
        </article>
        <aside>
        <h5><i className="fa-solid fa-list-ul"></i>Actividades Pendientes</h5>
        <ul>
          <li><i className="fa-solid fa-angle-right"></i>Actualizar inventario</li>
          <li><i className="fa-solid fa-angle-right"></i>Dar de alta clientes</li>
          <li><i className="fa-solid fa-angle-right"></i>Revisar informes</li>
          <li><i className="fa-solid fa-angle-right"></i>Guardar informes</li>
        </ul>
        </aside>
        <footer>Derechos reservados 2022</footer>
      </div>
    )
  }
  export default Panel