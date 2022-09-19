import React, { useState, useEffect } from "react";
import axios from "axios";

function YjBoardImage() {
  const [imgBase64, setImgBase64] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    readImages();
  }, []);

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
    readImages();
    setImgFile(null);
    setImgBase64([]);
    console.log(response);
  };

  const readImages = async () => {
    const response = await axios.get("http://localhost:8090/image/read");
    setImgList(response.data);
    console.log(response.data);
  };

  const downloadImage = async (filename) => {
    const url =
      process.env.REACT_APP_API_URL +
      "/image/upload/download?filename=" +
      filename;
    const download = document.createElement("a");

    download.href = url;
    download.setAttribute("download", filename);
    download.setAttribute("type", "application/json");
    download.click();
  };

  return (
    <div>
      <h2>사진 업로드</h2>
      <input type="file" id="file" onChange={handleChangeFile} multiple />
      <h3>업로드 한 사진 미리보기</h3>
      {imgBase64.map((item) => {
        return (
          <img
            key={item}
            src={item}
            alt={"Image"}
            style={{ width: "200px", height: "150px" }}
          />
        );
      })}
      <button onClick={imgInputHandler}>이미지 업로드</button>
      <br />

      <div>
        <h2>사진 목록</h2>
        {imgList.map((item) => {
          return (
            <div key={item.imageId}>
              <img
                src={
                  process.env.REACT_APP_API_URL +
                  "/images/" +
                  item.imageFilename
                }
                alt={"img" + item.imageId}
                style={{ width: "200px", height: "150px" }}
              />
              <button onClick={() => downloadImage(item.imageFilename)}>
                다운로드
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YjBoardImage;
