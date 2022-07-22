import React from "react";
import { Link } from "react-router-dom";

const ApprovalListPage = () => {
  return (
    <main className="base_form">
      <h1>Approval List</h1>
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
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ApprovalListPage;
