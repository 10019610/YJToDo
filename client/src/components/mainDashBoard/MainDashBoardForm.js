import { useState } from "react";
import axios from "axios";

import "./MainDashBoard.css";
import styles from "../../css/Common.module.css";

const MainDashBoardForm = (props) => {
    let createParam = {
        content: "",
    };

    const clearParam = () => {
        createParam = {};
    };

    // 입력받은 글 내용 셋팅
    const [content, setContent] = useState("");

    //
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const create = async () => {
        console.log('create board');
        createParam.content = content;
        console.log(createParam);
        const response = await axios.post(
            "http://localhost:8090/mainDashBoard/create",
            createParam
        );
        console.log(response);
        props.completeCreateBoard(true);
        setContent('');
        clearParam();
    };

    return (
        <div className={styles.base_form}>
            <div className="board-form">
                <span className="board-form-input">
                    <textarea onChange={onChangeContent} value={content}></textarea>
                </span>
                <span>
                    <button onClick={create}>등록</button>
                </span>
            </div>
        </div>
    );
};

export default MainDashBoardForm;
