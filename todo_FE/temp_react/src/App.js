import "./App.css";
import { Route, Redirect } from "react-router-dom";
import YjBoard from "./components/views/YjBoard/YjBoard";
import YjBoardwrite from "./components/views/YjBoard/YjBoardwrite";
import Header from "./components/common/Header";
import Login from "./components/views/Login/Login";
import Signup from "./components/views/Signup/Signup";
import HjBoard from "./components/views/HjBoard/HjBoard";
import ApprovalFormpage from "./components/views/approval/ApprovalFormPage";
import ApprovalListPage from "./components/views/approval/ApprovalListPage";
import MainDashBoardPage from "./components/views/mainDashBoard/MainDashBoardPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Redirect to="/main" />
      </Route>
      <Route path="/main">
        <MainDashBoardPage />
      </Route>
      <Route path="/yjBoard">
        <YjBoard></YjBoard>
      </Route>
      <Route path="/yjBoard/write">
        <YjBoardwrite></YjBoardwrite>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <Signup></Signup>
      </Route>
      <Route path="/hjBoard">
        <HjBoard></HjBoard>
      </Route>
      <Route path="/approval/approvalRequest">
        <ApprovalFormpage></ApprovalFormpage>
      </Route>
      <Route path="/approval/approvalList">
        <ApprovalListPage></ApprovalListPage>
      </Route>
    </div>
  );
}

export default App;
