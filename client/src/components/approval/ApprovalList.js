import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import styles from "../../css/Common.module.css";
import "./Approval.css";

const ApprovalList = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  // localdatetime 형식으로 오는 날짜데이터 형식 변환
  // yyyy-mm-dd
  const timeConverter = (craeteDate) => {
    let date = new Date(craeteDate);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return date;
  };

  const [approvals, setApprovals] = useState([]);

  const approvalList = async () => {
    const response = await axios.get(
      "http://localhost:8090/approval/approvalList"
    );
    if (response.status !== 200) {
      alert("response error");
    }

    setApprovals(response.data);
  };

  useEffect(() => {
    approvalList();
  }, []);

  return (
    <div className={styles.base_form}>
      <div>
        <div className="btn_area">
          <button className="btn-search">
            <Link to="/approval/approvalRequest">기안</Link>
          </button>
        </div>
        <div className="approval_form">
          <table className="header-table">
            <colgroup>
              <col width="7%" />
              <col width="28%" />
              <col width="15%" />
              <col width="10%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>
            <thead className="approval_list_thead">
              <tr>
                <th>순번</th>
                <th>제목</th>
                <th>결재상황</th>
                <th>결재 종류</th>
                <th>기안자</th>
                <th>기안일</th>
                <th>결재일</th>
              </tr>
              {approvals.map((approval, index) => (
                <tr key={index}>
                  <td>{approvals.length - index + 1}</td>
                  <td>
                    <Link
                      to={`/approval/approvalDetail/${approval.id}`}
                      style={linkStyle}
                    >
                      {approval.title}
                    </Link>
                  </td>
                  <td>{approval.approvalStatus}</td>
                  <td>{approval.approvalType}</td>
                  <td>{approval.requestUsername}</td>
                  <td>{timeConverter(approval.createDateTime)}</td>
                  <td>{timeConverter(approval.confirmDate)}</td>
                </tr>
              ))}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovalList;
