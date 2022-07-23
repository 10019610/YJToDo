import "./MainDashBoardPage.css";
import styles from "../../../css/Common.module.css";

const MainDashBoardPage = () => {
  // 날짜 타입
  let date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  const alertMessageHandler = () => {
    alert("구현 중인 기능입니다.");
  };
  return (
    <main>
      <h1>DashBoard</h1>
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
          </div>
          {/* 글 조작 버튼 부분 */}
          <div className="board-item-function">
            <span>
              <button onClick={alertMessageHandler}>등록</button>
            </span>
            <span>
              <button onClick={alertMessageHandler}>수정</button>
            </span>
            <span>
              <button onClick={alertMessageHandler}>삭제</button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainDashBoardPage;
