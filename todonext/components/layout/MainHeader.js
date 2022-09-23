import Link from "next/link";

import classes from "./MainHeader.module.css";
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";

import { useSession, signOut } from "next-auth/react";

function MainHeader() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">YJHJ</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
          <li>
            <Link href="/yjTodo">YjTodo</Link>
          </li>
          <li>
            <Link href="/yjBoard">YjBoard</Link>
          </li>
          <li>
            <span className={classes.icon}>
              <HamburgerMenuIcon></HamburgerMenuIcon>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
