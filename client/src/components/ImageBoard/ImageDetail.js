import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Image.module.css";

const ImageDetail = (props) => {
  console.log(props);
  const detailParamsId = props.match.params.id;

  const [detailBoardData, setDetailBoard] = useState({});

  const ImageDetailSearch = async () => {
    const response = await axios.get("http://localhost:8090/image/detail", {
      params: { detailParamsId: detailParamsId },
    });
    setDetailBoard(response.data);
  };

  const downloadImage = async (imageFilename) => {
    const url =
      process.env.REACT_APP_API_URL +
      "/image/download?imageFilename=" +
      imageFilename;
    const download = document.createElement("a"); // a 태그 추가 + href 속성 추가 먹이고, 파일명 req 보내서 api 실행

    download.href = url;
    download.setAttribute("download", imageFilename);
    download.setAttribute("type", "application/json");
    download.click();
    console.log(download);
  };

  const deleteParam = {
    detailParamId: 0,
  };

  const Delete = () => {
    let check = window.confirm("삭제하시겠습니까?");
    if (check !== true) {
      return;
    }
    deleteParam.detailParamId = detailParamsId;
    const response = axios.put(
      "http://localhost:8090/image/delete",
      deleteParam
    );
    console.log(response);
    // props.history.push("/imageBoard");
    props.goboard();
  };
  useEffect(() => {
    ImageDetailSearch();
  }, []);

  return (
    <div className={classes.img}>
      <div>
        <img
          src={
            process.env.REACT_APP_API_URL +
            "/images/" +
            detailBoardData.imageFilename
          }
          alt={"img" + detailBoardData.imageId}
          style={{
            width: "40%",
            height: "40%",
            borderRadius: "5px",
          }}
        />
        <div>{detailBoardData.createDateTime}</div>
        <div>
          <button onClick={Delete}>삭제</button>
          <button onClick={() => downloadImage(detailBoardData.imageFilename)}>
            다운로드
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageDetail;
