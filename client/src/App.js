import "./App.css";
import { Route, Redirect, useHistory } from "react-router-dom";
import YjBoard from "./components/views/YjBoard/YjBoard";
import YjBoardwrite from "./components/views/YjBoard/YjBoardwrite";
import Header from "./components/common/Header";
import LoginPage from "./components/views/memberPage/LoginPage";
import SignupPage from "./components/views/memberPage/SignupPage";
import HjBoard from "./components/views/HjBoard/HjBoard";
import ApprovalFormpage from "./components/views/approval/ApprovalFormPage";
import ApprovalListPage from "./components/views/approval/ApprovalListPage";
import ApprovalDetail from "./components/approval/ApprovalDetail";
import MainDashBoardPage from "./components/views/mainDashBoard/MainDashBoardPage";
import YjBoardDetail from "./components/views/YjBoard/YjBoardDetail";
import YjBoardUpdate from "./components/views/YjBoard/YjBoardUpdate";
import TodoTemplate from "./components/TodoPage/TodoTemplate";
import { useState } from "react";
import MenuHamburgerModal from "./components/modal/MenuHamburgerModal";
import UsersTemplate from "./components/users/UsersTemplate";
import UsersDetailModal from "./components/modal/users/UsersDetailModal";

function App() {
  const history = useHistory();
  const addBoardHandler = () => {
    history.push("/yjBoard");
  };
  const goMainpage = () => {
    history.push("/main");
  };

  const [menuIsShown, setMenuIsShown] = useState(false);

  const hideMenuHandler = () => {
    setMenuIsShown(false);
  };
  const showMenuHandler = () => {
    if (menuIsShown === true) {
      setMenuIsShown(false);
    } else if (menuIsShown === false) {
      setMenuIsShown(true);
    }
  };

  // const hideDashBoardUpdateHandler = () => {
  //   setDashBoardUpdateIsShown(false);
  // }

  return (
    <div className="App">
      <Header onShowHamburgerModal={showMenuHandler} />
      {menuIsShown && (
        <MenuHamburgerModal
          onClose={hideMenuHandler}
          history={history}
        ></MenuHamburgerModal>
      )}
      {/* {dashBoardUpdateIsShown && <MainDashBoardUpdateModal onClose={hideDashBoardUpdateHandler}></MainDashBoardUpdateModal>} */}
      <Route path="/" exact>
        <Redirect to="/main" />
      </Route>
      <Route path="/main">
        {/* <MainDashBoardPage onShowUpdateModal={showDashBoardUpdateHandler} /> */}
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
      <Route path="/yjBoard/update/:id">
        <YjBoardUpdate></YjBoardUpdate>
      </Route>
      <Route path="/login" component={LoginPage}>
        {/* <LoginPage></LoginPage> */}
      </Route>
      <Route path="/signup">
        <SignupPage addBoard={goMainpage}></SignupPage>
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
      <Route
        path="/approval/approvalDetail/:id"
        component={ApprovalDetail}
      ></Route>
      <Route path="/yjTodo">
        <TodoTemplate></TodoTemplate>
      </Route>
      <Route path="/users">
        <UsersTemplate></UsersTemplate>
      </Route>
      <Route path="/users/detail/:id" component={UsersDetailModal}></Route>
    </div>
  );
}

export default App;
