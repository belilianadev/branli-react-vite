import "./LogIn.css";

function Login() {
  return (
    <div className="contenedor">
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
