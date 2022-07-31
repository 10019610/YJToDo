import styles from "../../css/Common.module.css";
import './Approval.css';

const ApprovalDetail = () => {

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
                        <thead>
                            <tr>
                                <th>문서번호</th>
                                <td rowSpan="4">결재</td>
                                <th>문서유형</th>
                            </tr>
                            <tr>
                                <td>00001</td>
                                <td>
                                </td>
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
                                </td>
                            </tr>
                            <tr>
                                <th>사유</th>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ApprovalDetail;