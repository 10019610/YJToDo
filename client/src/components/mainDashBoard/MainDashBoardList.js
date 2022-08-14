import axios from 'axios';

import MainDashBoardComment from "./MainDashBoardComment";
import "./MainDashBoard.css";
import common from "../../css/Common.module.css";

const MainDashBoardList = (props) => {
    const timeConverter = (craeteDate) => {
        let date = new Date(craeteDate);
        date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        return date;
    }
    const boardList = props.items;
    const deleteParam = {
        mainDashboardId: 0,
    }

    const deleteMainDashBoard = async (id) => {
        deleteParam.mainDashboardId = id;
        const response = await axios.put('http://localhost:8090/mainDashBoard/delete', deleteParam)
        if (response.status === 200) {
            props.onSearch();
        } else {
            alert('대시보드를 삭제하지 못하였습니다')
        }
    }

    // 글이 존재하지 않을 때 출력
    if (boardList.length === 0) {
        return (
            <h2>등록된 글이 존재하지 않습니다.</h2>
        )
    }

    return (
        <main>
            <div className={common.base_form}>
                {/* 한 개의 글 */}
                {boardList.map((item, index) => (
                    <div className="board-item" key={index}>
                        {/* 제목 부분 */}
                        <div className="board-item-title">
                            <span className="boardTitle">{item.title}</span>
                            <span className='board-item-date'>
                                {/* {month}/{day}/{year} */}
                                {timeConverter(item.createDateTime)}
                            </span>
                        </div>
                        {/* 글 내용 부분 */}
                        <div className="board-item-content">
                            {item.content}
                        </div>
                        {/* 글 조작 버튼 부분 */}
                        <div className="board-item-function">
                            <span>
                                <button className={common.button_confirm} onClick={props.onShowUpdateModal.bind(this, item)}>수정</button>
                            </span>
                            <span>
                                <button className={common.button_cancel} onClick={deleteMainDashBoard.bind(this, item.id)}>삭제</button>
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
