import "./MainDashBoard.css";
import styles from "../../css/Common.module.css";

const MainDashBoardForm = () => {

    function errorHandler() {
        alert('기능 구현중입니다.');
    }

    return (
        <div className={styles.base_form}>
            <div className="board-form">
                <span className="board-form-input">
                    <textarea></textarea>
                </span>
                <span>
                    <button onClick={errorHandler}>등록</button>
                </span>
            </div>
        </div>
    )
}

export default MainDashBoardForm;