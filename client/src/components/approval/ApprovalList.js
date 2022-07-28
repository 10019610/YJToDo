import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ApprovalList = () => {

    const [approvals, setApprovals] = useState([]);

    const approvalList = async () => {
        const response = await axios.get('http://localhost:8090/approval/approvalList')
        console.log(response);
        setApprovals(response.data);
    }

    useEffect(() => {
        approvalList();
    }, []);

    return (
        <div>
            <div className="btn_area">
                <button className="btn-search">
                    <Link to="/approval/approvalRequest">기안</Link>
                </button>
            </div>
            <div>
                <table>
                    <colgroup>
                        <col width="25%" />
                        <col width="25%" />
                        <col width="25%" />
                        <col width="25%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>제목</th>
                            <th>결재상황</th>
                            <th>작성자</th>
                        </tr>
                        {approvals.map((approval, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{approval.title}</td>
                                <td>{approval.approvalStatus}</td>
                            </tr>
                        ))}
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    )
}

export default ApprovalList;