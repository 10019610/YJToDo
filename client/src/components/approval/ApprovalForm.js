import axios from 'axios';
import { useState } from 'react';

import styles from "../../css/Common.module.css";
import './Approval.css';

const ApprovalForm = (props) => {
    const approvalTypeOption = [
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
    const [enteredUserName, setUsername] = useState('');

    const createParam = {
        title: '',
        content: '',
        approvalType: '',
        userName: '',
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

    const userNameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const create = async (e) => {
        if(enteredApprovalType === ''){
            alert('결재유형을 선택해주세요');
            return;
        }
        createParam.title = enteredTitle;
        createParam.content = enteredContent;
        createParam.approvalType = enteredApprovalType;
        createParam.userName = enteredUserName;
        const response = await axios.post('http://localhost:8090/approval/approvalRequest', createParam);
        props.addApproval(response)
    }

    return (
        <div className={styles.base_form}>
            <div>
                <table className="header-table">
                    <colgroup>
                        <col width='15%'></col>
                        <col width='35%'></col>
                        <col width='15%'></col>
                        <col width='35%'></col>
                    </colgroup>
                    <thead></thead>
                    <tbody className='approval_form'>
                        <tr>
                            <th>작성자</th>
                            <td><input type="text" onChange={userNameChangeHandler}></input></td>
                            <th>e-mail</th>
                            <td>eful13@go.cp.kr</td>
                        </tr>
                        <tr>
                            <th>결재 종류</th>
                            <td>
                                <select onChange={approvalTypeChangeHandler}>
                                    {approvalTypeOption.map((type, index) => (
                                        <option value={type.value} key={index}>{type.name}</option>
                                    ))}
                                </select>
                            </td>
                            <th></th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>시작일</th>
                            <td></td>
                            <th>종료일</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td colSpan={3}>
                                <span className='approval_form_title'>
                                    <input type='text' onChange={titleChangeHandler}></input>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td colSpan={3}><textarea rows={10} onChange={contentChangeHandler}></textarea></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={create}>기안요청</button>
            </div>
        </div>
    )

}
export default ApprovalForm;