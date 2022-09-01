import Link from "next/link";

function MainHeader() {
    return (
        <header>
            <div>
                <Link href='/'>YJHJ</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/dashboard'>Dashboard(temp)</Link>
                    </li>
                    <li>
                        <Link href='/signup'>SignUp</Link>
                    </li>
                    <li>
                        <Link href='/login'>Login</Link>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;