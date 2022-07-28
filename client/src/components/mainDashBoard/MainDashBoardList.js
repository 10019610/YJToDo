import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import axios from 'axios';

import "./MainDashBoard.css";
import styles from "../../css/Common.module.css";
import MainDashBoardComment from "./MainDashBoardComment";

const MainDashBoardList = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        // 부모 컴포넌트에서 사용할 함수를 선언
        searchBoardList
    }))

    const alertMessageHandler = () => {
        alert('기능 구현중입니다.');
    }

    // 날짜 타입
    // let date = new Date();
    // const month = date.toLocaleString("en-US", { month: "long" });
    // const day = date.toLocaleString("en-US", { day: "2-digit" });
    // const year = date.getFullYear();

    const [boardList, setBoardList] = useState([]);

    const searchBoardList = async () => {
        const response = await axios.get("http://localhost:8090/mainDashBoard/list");
        console.log(response);
        console.log(response.data);
        setBoardList(response.data);
    }

    const openUpdateDialog = (id) => {
        console.log(id);
        // alertMessageHandler();
    }



    useEffect(() => {
        searchBoardList();
        // testApproval();
    }, []);

    //   useEffect(() => {
    //     fetch("http://localhost:5000/main")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setTestData(data);
    //         console.log(data);
    //       });
    //   }, []);

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
})


export default MainDashBoardList;
