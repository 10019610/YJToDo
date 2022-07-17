import "./App.css";
import { Route } from "react-router-dom";
import Mainpage from "./components/views/Mainpage";
import YjBoard from "./components/views/YJ_Board";

import Header from "./components/common/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/yjBoard">
        <YjBoard />
      </Route>
      <Mainpage />
    </div>
  );
}

export default App;
