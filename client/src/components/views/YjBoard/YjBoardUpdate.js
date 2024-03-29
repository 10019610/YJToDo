import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./YjBoardwrite.css";

const YjBoardUpdate = (props) => {
  const location = useLocation();
  console.log(props);
  const goBoard = props.addBoard;

  const updateHandler = async () => {
    params.title = title;
    params.content = content;
    params.author = author;

    const response = await axios.put(
      "http://localhost:8090/yjBoard/update",
      params
    );
    // console.log(response);
    goBoard(response);
  };

  const params = {
    id: location.state.id,
    title: "",
    content: "",
    author: "",
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const updateTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const updateContentHandler = (e) => {
    setContent(e.target.value);
  };

  const updateAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  useEffect(() => {
    setTitle(location.state.title);
    setContent(location.state.content);
    setAuthor(location.state.author);
  }, []);

  return (
    <div>
      <div>
        <main className="board">
          <label name="boardTitle" id="boardTitle">
            제목
          </label>
          <div>
            <input
              type="text"
              name="boardTitle"
              id="boardTitle"
              maxLength="50"
              required
              onChange={updateTitleHandler}
              value={title}
            />
          </div>
          <label name="boardAuthor" id="boardAuthor">
            작성자
          </label>
          <div>
            <input
              type="text"
              name="boardAuthor"
              id="boardAuthor"
              required
              onChange={updateAuthorHandler}
              value={author}
            />
          </div>
          <label className="" name="boardContent" id="boardContent">
            내용
          </label>
          <span>
            <textarea
              className="board-content"
              onChange={updateContentHandler}
              name="boardContent"
              id="boardContent"
              required
              rows="5"
              value={content}
            ></textarea>
          </span>
          <button onClick={updateHandler}>
            수정
            {/* <Link to="/yjBoard">글 수정</Link> */}
          </button>
        </main>
      </div>
    </div>
  );
};

export default YjBoardUpdate;
