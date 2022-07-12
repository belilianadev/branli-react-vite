import RoutesIndex from "./routes/RoutesIndex";
import Login from "./routes/LogIn/Login";

function App() {
  const log = false;
  return <>{log ? <RoutesIndex /> : <Login />}</>;
}
export default App;
