import {} from "react";
import "./App.css";
import Sidenavigation from "./components/Sidenavigation";
import Topbar from "./components/Topbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Sidenavigation />
      {/*<Topbar />*/}
      <Outlet />
    </div>
  );
}

export default App;
