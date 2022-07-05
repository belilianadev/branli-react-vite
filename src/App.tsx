import RoutesIndex from "./Routes/RoutesIndex";
import Login from "./Routes/LogIn/LogIn";

function App() {
  const log = true;
  return <>{log ? <RoutesIndex /> : <Login />}</>;
}
export default App;
