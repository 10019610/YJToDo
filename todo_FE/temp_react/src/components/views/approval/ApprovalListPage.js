import React from "react";

const ApprovalListPage = () => {
  return (
    <main class="base_form">
      <h1>Approval List</h1>
      <div>
        <div class="btn_area">
          <button class="btn-search">
            <a href="/approval/approvalRequest">기안</a>
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
