// import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // const [menuFlag, setMenuFlag] = useState(false)
  // const showHanburgerMenu = () => {
  //   setMenuFlag(true);
  // }
  return (
    <header className="main-header">
      <Link to="/main">YJHJ</Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/yjBoard">BoardYJ-TIL</NavLink>
          </li>
          <li>
            <NavLink to="/hjBoard">BoardHJ-TIL</NavLink>
          </li>
          <li>
            <NavLink to="/approval/approvalList">Approval</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="drawer-btn">
            {/* <li onClick={showHanburgerMenu} className="drawer-btn"> */}
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
