import "./App.css";
import Mainpage from "./components/views/Mainpage";
import { Route } from "react-router-dom";
import YjBoard from "./components/views/YJ_Board";

function App() {
  return (
    <div className="App">
      <Route path="/yjBoard">
        <YjBoard />
      </Route>
      <Mainpage />
    </div>
  );
}

export default App;
