import React from "react";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./YjBoard.module.css";

const YjBoard = () => {
  return (
    <Wrapper>
      <div className={styles.div}>
        <h2>게시물 리스트</h2>
        <button class="btn">
          <a class="btn" href="/yjBoard/write">
            게시글 추가!
          </a>
        </button>
        <div className={styles.tableform}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>게시글</td>
              <td>yj</td>
              <td>2022-07-18</td>
            </tr>
            <tr>
              <td>2</td>
              <td>게시글</td>
              <td>yj</td>
              <td>2022-07-18</td>
            </tr>
            <tr>
              <td>3</td>
              <td>게시글</td>
              <td>yj</td>
              <td>2022-07-18</td>
            </tr>
          </tbody>
        </div>
      </div>
    </Wrapper>
  );
};

export default YjBoard;
