import React, { useState } from "react";
import axios from "axios";
import styles from "../../../css/Common.module.css";
import "./YjBoardwrite.css";

const YjBoardwrite = (props) => {
  // console.log(props);
  const createParam = {
    title: "",
    content: "",
    author: "",
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const createTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const createContentHandler = (e) => {
    setContent(e.target.value);
  };
  const createAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const writeHandler = async () => {
    createParam.title = title;
    createParam.content = content;
    createParam.author = author;

    // console.log(createParam);

    if (title === "" || content === "" || author === "") {
      return alert("제목, 내용, 작성자를 입력하세요.");
    } else {
      const response = await axios.post(
        "http://localhost:8090/yjBoard/write",
        createParam
      );
      // imgInputHandler();
      props.addBoard(response);
    }
  };

  const onSubmit = () => {
    writeHandler();
  };

  const onKeyUp = (event) => {
    // 'enter'키의 keycode는 13
    if (event.keyCode === 13) {
      let boardCreateCheck = window.confirm("등록하시겠습니까?");
      if (boardCreateCheck === true) {
        onSubmit();
      }
    }
  };

  // const [imgBase64, setImgBase64] = useState([]);
  // const [imgFile, setImageFile] = useState(null);

  // const handleChangeFile = (e) => {
  //   setImageFile(e.target.files);
  //   console.log(e.target.files);
  //   setImgBase64([]);
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     if (e.target.files[i]) {
  //       let reader = new FileReader();
  //       reader.readAsDataURL(e.target.files[i]);
  //       reader.onloadend = () => {
  //         const base64 = reader.result; //  데이터 변환하여 .. 파일 미리보기 세팅
  //         if (base64) {
  //           let base64Sub = base64.toString();
  //           setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
  //         }
  //       };
  //     }
  //   }
  // };

  // const imgInputHandler = async () => {
  //   const formdata = new FormData();
  //   for (let i = 0; i < imgFile.length; i++) {
  //     formdata.append("file", imgFile[i]);
  //   }
  //   formdata.append("comment", "imageupload!");
  //   const response = await axios
  //     .post("http://localhost:8090/image/upload", formdata)
  //     .catch((error) => {
  //       console.log(error);
  //       alert("업로드 실패");
  //     });
  //   console.log(response);
  // };

  return (
    <div className={styles.base_form}>
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
            onChange={createTitleHandler}
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
            onChange={createAuthorHandler}
            value={author}
          />
        </div>
        <label className="" name="boardContent" id="boardContent">
          내용
        </label>
        <span>
          <textarea
            className="board-content"
            onChange={createContentHandler}
            name="boardContent"
            id="boardContent"
            required
            rows="5"
            value={content}
            onKeyUp={onKeyUp}
          ></textarea>
        </span>
        <button onClick={writeHandler}>글 추가</button>
        {/* <div>
          <h2>사진 업로드</h2>
          <span>
            <input
              type="file"
              id="file"
              onChange={handleChangeFile}
              multiple="multiple"
              accept="img/*"
            />
          </span>
          <h3>업로드 한 사진 미리보기</h3>
          {imgBase64.map((item) => {
            return (
              <img
                key={item}
                src={item}
                alt={"First slide"}
                style={{ width: "200px", height: "150px" }}
              />
            );
          })}
        </div> */}
      </main>
    </div>
  );
};

export default YjBoardwrite;
