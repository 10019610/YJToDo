import { useState } from 'react';
import axios from 'axios';

import styles from "../../css/Common.module.css";
import './Approval.css';

const ApprovalForm = (props) => {
    console.log(props);

    const [enteredTitle, setTitle] = useState('');
    const [enteredContent, setContent] = useState('');

    const createParam = {
        title: '',
        content: '',
    }

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const contentChangeHandler = (e) => {
        setContent(e.target.value);
    }

    const create = async (e) => {
        console.log(e);
        createParam.title = enteredTitle;
        createParam.content = enteredContent;
        const response = await axios.post('http://localhost:8090/approval/approvalRequest', createParam);
        console.log(response);
        props.addApproval(response)

    }

    return (
        <div className={styles.base_form}>
            <div>
                <div className="btn_area">
                    <button className="btn-search" onClick={create}>기안</button>
                </div>
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
                                    <input type="text" name="title" onChange={titleChangeHandler} />
                                </td>
                            </tr>
                            <tr>
                                <th>사유</th>
                                <td>
                                    <textarea name="content" id="" cols="30" rows="10" onChange={contentChangeHandler}></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ApprovalForm;