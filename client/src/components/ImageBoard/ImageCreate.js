import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import classes from "./Image.module.css";

function ImageCreate() {
  const [imgBase64, setImgBase64] = useState([]);
  const [imgFile, setImgFile] = useState(null);

  const handleChangeFile = (event) => {
    console.log(event.target.files);
    setImgFile(event.target.files);
    setImgBase64([]);
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onloadend = () => {
          const base64 = reader.result;
          console.log(base64);
          if (base64) {
            let base64Sub = base64.toString();
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };
  const history = useHistory();
  const addBoardHandler = () => {
    history.push("/imageBoard");
  };

  const imgInputHandler = async () => {
    const formdata = new FormData();
    for (let i = 0; i < imgFile.length; i++) {
      formdata.append("file", imgFile[i]);
    }
    formdata.append("comment", "imageupload!");
    const response = await axios
      .post("http://localhost:8090/image/upload", formdata)
      .catch((error) => {
        console.log(error);
        alert("업로드 실패");
      });
    setImgFile(null);
    setImgBase64([]);
    addBoardHandler();
    console.log(response);
  };

  return (
    <div>
      <div className={classes.upload}>
        <span>
          <h2>사진 업로드</h2>
          <input type="file" id="file" onChange={handleChangeFile} multiple />
        </span>
        <span>
          <h3>업로드 한 사진 미리보기</h3>
          {imgBase64.map((item) => {
            return (
              <img
                key={item}
                src={item}
                alt={"img"}
                style={{ width: "200px", height: "150px" }}
              />
            );
          })}
        </span>
      </div>

      <button onClick={imgInputHandler}>이미지 업로드</button>
      <br />
    </div>
  );
}

export default ImageCreate;
