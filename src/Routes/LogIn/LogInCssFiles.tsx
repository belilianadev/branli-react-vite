import "./LogIn.css";

function Login() {
  return (
    <div className="ctnLogin">
      <div className="login-page">
        <div className="formLogin">
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
