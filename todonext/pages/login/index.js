import axios from "axios";
import {useEffect, useState} from "react";

function LoginPage() {

    const [member, setMemberList] = useState({});
    console.log(member);

    async function memberList() {
        const response = await axios.get('/api/login/memberList');
        console.log(response.data.data);
        setMemberList(response.data.data);
    }

    useEffect(() => {
        memberList()
    }, [])

    return (
        <div>
            <h1>Login Page</h1>
            {member.length > 0 ? member.map((mem, index) => (
                <div key={index}>{mem.name}</div>
            )) : <div></div>}
        </div>
    )
}

export default LoginPage;
