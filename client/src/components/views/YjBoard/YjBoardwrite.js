import React, { useState } from "react";
import axios from "axios";

const YjBoardwrite = () => {
  const createParam = {
    title: "",
  };

  const [title, setTitle] = useState("");

  const createHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const writeHandler = async () => {
    createParam.title = title;
    console.log(createParam);

    const response = await axios.post(
      "http://localhost:8090/yjBoard/write",
      createParam
    );
    console.log(response);
  };

  return (
    <div>
      <main>
        제목
        <input
          type="text"
          name="boardTitle"
          id="boardTitle"
          required
          onChange={createHandler}
          value={title}
        />
        내용
        <textarea
          name="boardContent"
          id="boardContent"
          required
          rows="5"
        ></textarea>
        <button onClick={writeHandler}>글 추가</button>
      </main>
    </div>
  );
};

export default YjBoardwrite;
