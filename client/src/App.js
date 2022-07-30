import "./App.css";
import { Route, Redirect, useHistory } from "react-router-dom";
import YjBoard from "./components/views/YjBoard/YjBoard";
import YjBoardwrite from "./components/views/YjBoard/YjBoardwrite";
import Header from "./components/common/Header";
import Login from "./components/views/Login/Login";
import Signup from "./components/views/Signup/Signup";
import HjBoard from "./components/views/HjBoard/HjBoard";
import ApprovalFormpage from "./components/views/approval/ApprovalFormPage";
import ApprovalListPage from "./components/views/approval/ApprovalListPage";
import MainDashBoardPage from "./components/views/mainDashBoard/MainDashBoardPage";
import YjBoardDetail from "./components/views/YjBoard/YjBoardDetail";

function App() {
  const history = useHistory();
  const addBoardHandler = () => {
    history.push("/yjBoard");
  };
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Redirect to="/main" />
      </Route>
      <Route path="/main">
        <MainDashBoardPage />
      </Route>
      <Route path="/yjBoard" exact>
        <YjBoard></YjBoard>
      </Route>
      <Route path="/yjBoard/detail/:id" component={YjBoardDetail}>
        {/* <YjBoardDetail></YjBoardDetail> */}
      </Route>
      <Route path="/yjBoard/write">
        <YjBoardwrite addBoard={addBoardHandler}></YjBoardwrite>
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
