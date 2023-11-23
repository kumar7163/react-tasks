
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <center>
    <Link to="list" className="m-2">List</Link>
    <Link to="toggle" className="m-2">Toggle</Link>
    <Link to="timer" className="m-2">Timer</Link>
    <Outlet />
    
    </center>
  );
}

export default App;
