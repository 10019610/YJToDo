import { useState } from 'react';
import axios from 'axios';

import styles from "../../css/Common.module.css";
import './Approval.css';

const ApprovalForm = (props) => {
    console.log(props);

    const approvalTypes = [
        {
            name: '선택',
            value: ''
        },
        {
            name: '휴가',
            value: 'VACATION'
        },
        {
            name: '청구',
            value: 'PAYMENT'
        }
    ]

    const [enteredTitle, setTitle] = useState('');
    const [enteredContent, setContent] = useState('');
    const [enteredApprovalType, setApprovalType] = useState('');

    const createParam = {
        title: '',
        content: '',
        approvalType: '',
    }

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const contentChangeHandler = (e) => {
        setContent(e.target.value);
    }

    const approvalTypeChangeHandler = (e) => {
        setApprovalType(e.target.value);
    }

    const create = async (e) => {
        createParam.title = enteredTitle;
        createParam.content = enteredContent;
        createParam.approvalType = enteredApprovalType;
        const response = await axios.post('http://localhost:8090/approval/approvalRequest', createParam);
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
                                <td>
                                    <select onChange={approvalTypeChangeHandler}>
                                        {approvalTypes.map((types, index) => (
                                            <option value={types.value} key={index}>{types.name}</option>
                                        ))}
                                    </select>
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