import { useState, useEffect } from "react";
import axios from 'axios';

import "./MainDashBoard.css";
import styles from "../../css/Common.module.css";
import MainDashBoardComment from "./MainDashBoardComment";

const MainDashBoardList = (props) => {
    console.log(props);

    const alertMessageHandler = () => {
        alert('기능 구현중입니다.');
    }

    const [boardList, setBoardList] = useState([]);

    const searchBoardList = async () => {
        const response = await axios.get("http://localhost:8090/mainDashBoard/list");
        setBoardList(response.data);
    }

    const openUpdateDialog = (id) => {
        console.log(id);
    }

    if (props.onAddBoard === true) {
    }

    useEffect(() => {
        console.log('MainDashBoardList effect')
        searchBoardList();
    }, [props]);

    return (
        <main>
            <div className={styles.base_form}>
                {/* 한 개의 글 */}
                {boardList.map((item, index) => (
                    <div className="board-item" key={index}>
                        {/* 제목 부분 */}
                        <div className="board-item-title">
                            <span className="boardTitle">{item.title}</span>
                            <span>
                                {/* {month}/{day}/{year} */}
                                {item.createDateTime}
                            </span>
                        </div>
                        {/* 글 내용 부분 */}
                        <div className="board-item-content">
                            {item.content}
                        </div>
                        {/* 글 조작 버튼 부분 */}
                        <div className="board-item-function">
                            <span>
                                <button onClick={openUpdateDialog.bind(this, item.id)}>수정</button>
                            </span>
                            <span>
                                <button onClick={alertMessageHandler}>삭제</button>
                            </span>
                        </div>
                    </div>
                ))}
                {/* 댓글 부분 */}
                <MainDashBoardComment></MainDashBoardComment>
            </div>
        </main>
    );
}


export default MainDashBoardList;
