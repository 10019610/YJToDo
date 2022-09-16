import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/Common.module.css";
import "./YjBoardDetail.css";
import axios from "axios";

const YjBoardDetail = (props) => {
  const detailParamsId = props.match.params.id;

  const [detailBoardData, setDetailBoard] = useState({});
  // const params = useParams();
  // console.log(detailParamsId);

  const countParam = {
    detailParamId: 0,
  };

  // const addCount = async () => {
  //   countParam.detailParamId = detailParamsId;
  //   const response = await axios.put(
  //     "http://localhost:8090/yjBoard/addCount",
  //     countParam
  //   );
  //   console.log(response);
  // };
  // const detailRead = async () => {
  //   const response = await axios.get("http://localhost:8090/yjBoard/detail", {
  //     params: { detailParamsId: detailParamsId },
  //   });
  // };

  const yjBoardDetailSearch = async () => {
    countParam.detailParamId = detailParamsId;
    const response = await axios.put(
      "http://localhost:8090/yjBoard/addCount",
      countParam
    );
    if (response.status === 200) {
      const response = await axios.get("http://localhost:8090/yjBoard/detail", {
        params: { detailParamsId: detailParamsId },
      });
      setDetailBoard(response.data);
    }
  };

  const deleteParam = {
    detailParamId: 0,
  };

  const yjBoardDelete = () => {
    let check = window.confirm("삭제하시겠습니까?");
    if (check !== true) {
      return;
    }
    deleteParam.detailParamId = detailParamsId;
    const response = axios.put(
      "http://localhost:8090/yjBoard/delete",
      deleteParam
    );
    console.log(response);
    props.history.push("/yjBoard");
  };
  const [imgList, setImgList] = useState([]);

  const readImages = async () => {
    const response = await axios.get("http://localhost:8090/image/read");
    setImgList(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    yjBoardDetailSearch();
    readImages();
  }, []);

  return (
    <div className={styles.base_form}>
      <table className="detail-table">
        <tbody className="detail-body">
          {/* <tr>
            <th>작성일</th>
            <td>{detailBoardData.createDateTime}</td>
          </tr> */}
          <tr className="detail-header">
            <th className="">제목</th>
            <td className="">{detailBoardData.title}</td>
            <th>작성자</th>
            <td>{detailBoardData.author}</td>
            <th>조회수</th>
            <td>{detailBoardData.viewsCount}</td>
          </tr>
          <tr className="detail-content">
            <th className="">내용</th>
            <td className="">{detailBoardData.content}</td>
          </tr>
        </tbody>
      </table>
      <div>
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
              <button>다운로드</button>
            </div>
          );
        })}
      </div>

      <div>
        <button>
          <Link
            to={{
              pathname: `/yjBoard/update/${detailParamsId}`,
              state: detailBoardData,
            }}
          >
            수정
          </Link>
        </button>
        <button onClick={yjBoardDelete}>삭제</button>
      </div>
    </div>
  );
};

export default YjBoardDetail;
