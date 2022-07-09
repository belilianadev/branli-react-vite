import RoutesIndex from "./routes/RoutesIndex";
import Login from "./routes/LogIn/LogIn";

function App() {
  const log = true;
  return <>{log ? <RoutesIndex /> : <Login />}</>;
}
export default App;
