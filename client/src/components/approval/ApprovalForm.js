import axios from 'axios';
import { useState } from 'react';

import styles from "../../css/Common.module.css";
import './Approval.css';

const ApprovalForm = (props) => {
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
    console.log(props);

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
            <div>옵션</div>
            <div>
                <table className="header-table">
                    <colgroup>
                    </colgroup>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th>작성자 ID</th>
                            <td>김현진</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>버튼</div>
        </div>
    )

}
export default ApprovalForm;