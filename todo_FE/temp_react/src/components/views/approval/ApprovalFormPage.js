import React from "react";

const ApprovalFormpage = () => {
  return (
    <main className="base_form">
      <h1>Approval Form</h1>
      <div>
        <div className="btn_area">
          <button className="btn-search">기안</button>
        </div>
        <div class="row">
          <table className="header-table">
            <colgroup>
              <col width="15%" />
              <col width="70%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th>문서번호</th>
                <td rowspan="4">결재</td>
                <th>문서유형</th>
              </tr>
              <tr>
                <td>00001</td>
                <td>휴가</td>
              </tr>
              <tr>
                <th>결재상태</th>
                <th>참조번호</th>
              </tr>
              <tr>
                <td>
                  <span> 기안 </span>
                </td>
                <td>0002</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>제목</th>
                <td>
                  <input type="text" name="title" />
                </td>
              </tr>
              <tr>
                <th>사유</th>
                <td>
                  <textarea name="content" id="" cols="30" rows="10"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ApprovalFormpage;
