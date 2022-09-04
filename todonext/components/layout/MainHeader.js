import Link from "next/link";

import classes from './MainHeader.module.css'
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">YJHJ</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/dashboard">Dashboard(temp)</Link>
                    </li>
                    <li>
                        <Link href="/signup">SignUp</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/yjTodo">YjTodo</Link>
                    </li>
                    <li>
                        <Link href="/yjBoard">YjBoard</Link>
                    </li>
                    <li>
                        <span className={classes.icon}><HamburgerMenuIcon></HamburgerMenuIcon></span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
