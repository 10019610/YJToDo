import React from "react";

const YjBoardwrite = () => {
  const writeHandler = () => {
    alert("글쓰기 추가 기능 준비중!");
  };

  return (
    <div>
      <main>
        <table>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" name="boardTitle" id="boardTitle" required />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea
                name="boardContent"
                id="boardContent"
                required
                rows="5"
              ></textarea>
            </td>
          </tr>
        </table>
        <button onClick={writeHandler}>글 추가</button>
      </main>
    </div>
  );
};

export default YjBoardwrite;
