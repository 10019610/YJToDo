import { useState, useEffect } from "react";
import axios from 'axios';

import "./MainDashBoard.css";
import styles from "../../css/Common.module.css";
import MainDashBoardComment from "./MainDashBoardComment";

const MainDashBoardList = () => {
    // 날짜 타입
    let date = new Date();
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();

    const alertMessageHandler = () => {
        alert("구현 중인 기능입니다.");
    };

    const [testData, setTestData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:5000/main");
        setTestData(response.data);
    }

    const testApproval = async () => {
        const response = await axios.get("http://localhost:5000/approvalList");
        console.log(response);
    }

    useEffect(() => {
        fetchData();
        testApproval();
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
                <div className="board-item">
                    {/* 제목 부분 */}
                    <div className="board-item-title">
                        <span className="boardTitle">Title</span>
                        <span>
                            {month}/{day}/{year}
                        </span>
                    </div>
                    {/* 글 내용 부분 */}
                    <div className="board-item-content">
                        <div>Content</div>
                        {testData.map((item) => (
                            <div key={item.id}>
                                <div>{item.id}</div>
                                <div>{item.content}</div>
                            </div>
                        ))}
                        {/* <div>{testData}</div> */}
                    </div>
                    {/* 글 조작 버튼 부분 */}
                    <div className="board-item-function">
                        <span>
                            <button onClick={alertMessageHandler}>수정</button>
                        </span>
                        <span>
                            <button onClick={alertMessageHandler}>삭제</button>
                        </span>
                    </div>
                </div>
                {/* 댓글 부분 */}
                <MainDashBoardComment></MainDashBoardComment>
            </div>
        </main>
    );
};

export default MainDashBoardList;
