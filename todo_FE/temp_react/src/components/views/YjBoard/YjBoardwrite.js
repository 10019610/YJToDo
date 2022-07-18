import React from "react";

const YjBoardwrite = () => {
  return (
    <main>
      <form action="/yjBoard/write" method="POST">
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
        <button>글 추가</button>
      </form>
    </main>
  );
};

export default YjBoardwrite;
