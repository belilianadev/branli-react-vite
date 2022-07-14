import RoutesIndex from "./routes/RoutesIndex";
import LogIn from "./routes/LogIn/LogIn";
import { useContext } from "react";
import { UserContext } from "./contexts/UserProvider";

function App() {
  const { isLogUser } = useContext(UserContext);
  return <>{isLogUser ? <RoutesIndex /> : <LogIn />}</>;
}
export default App;
