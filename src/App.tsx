import RoutesIndex from "./routes/RoutesIndex";
import Login from "./routes/LogIn/Login2";

function App() {
  const log = false;
  return <>{log ? <RoutesIndex /> : <Login />}</>;
}
export default App;
