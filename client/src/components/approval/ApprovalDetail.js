import axios from "axios";
import { useEffect, useState } from "react";

import styles from "../../css/Common.module.css";
import "./Approval.css";

const ApprovalDetail = (props) => {
  const timeConverter = (craeteDate) => {
    let date = new Date(craeteDate);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return date;
  };

  const confirmParam = {
    approvalId: 0,
  };

  const approvalId = props.match.params.id;

  const [approval, setApproval] = useState({});

  const approvalDetailSearch = async () => {
    const response = await axios.get(
      "http://localhost:8090/approval/approvalDetail",
      { params: { approvalId: approvalId } }
    );
    setApproval(response.data);
  };

  const approvalConfirm = () => {
    confirmParam.approvalId = approvalId;
    const response = axios.put(
      "http://localhost:8090/approval/approvalConfirm",
      confirmParam
    );
    props.history.push("/approval/approvalList");
  };

  useEffect(() => {
    approvalDetailSearch();
  }, []);

  return (
    <div className={styles.base_form}>
      <div>
        <div>
          <table className="header-table">
            <colgroup>
              <col width="15%" />
              <col width="70%" />
              <col width="15%" />
            </colgroup>
            <tbody className="approval_detail">
              <tr>
                <th className="th_boarder">문서번호</th>
                <td className="approval_detail_title" rowSpan="4">
                  결재 품의서
                </td>
                <th className="th_boarder">문서유형</th>
              </tr>
              <tr>
                <td className="td_boarder">{approval.approvalNumber}</td>
                <td className="td_boarder">{approval.approvalType}</td>
              </tr>
              <tr>
                <th className="th_boarder">결재상태</th>
                <th className="th_boarder">유형번호</th>
              </tr>
              <tr>
                <td className="td_boarder">
                  <span> {approval.approvalStatus} </span>
                </td>
                <td className="td_boarder">{approval.approvalNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table className="header-table">
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="*" />
            </colgroup>
            <tbody className="approval_detail">
              <tr>
                <th className="th_boarder">기안자</th>
                <th className="th_boarder">결재자</th>
                <td></td>
              </tr>
              <tr>
                <td className="td_boarder">
                  <div>{approval.requestUserName}</div>
                  <div className="time">
                    {timeConverter(approval.createDateTime)}
                  </div>
                </td>
                <td className="td_boarder">김현진</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table className="header-table">
            <colgroup>
              <col width="10%" />
              <col width="90%" />
            </colgroup>
            <tbody className="approval_detail">
              <tr>
                <th className="th_boarder">제목</th>
                <td className="td_boarder">{approval.title}</td>
              </tr>
              <tr>
                <th className="th_boarder">사유</th>
                <td className="td_boarder">{approval.content}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button onClick={approvalConfirm}>결재 승인</button>
          <button>결재 반려</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalDetail;
