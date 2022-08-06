import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/Common.module.css";
import "./YjBoardDetail.css";
import axios from "axios";

const YjBoardDetail = ({ match }) => {
  const detailParamsId = match.params.id;

  const [detailBoardData, setDetailBoard] = useState({});
  // const params = useParams();
  console.log(detailParamsId);

  const yjBoardDetailSearch = async () => {
    const response = await axios.get("http://localhost:8090/yjBoard/detail", {
      params: { detailParamsId: detailParamsId },
    });
    console.log(response);
    console.log(response.data);
    setDetailBoard(response.data);
  };

  useEffect(() => {
    yjBoardDetailSearch();
  }, []);

  const deleteParam = {
    detailParamId: 0,
  };

  const boardDelete = () => {
    deleteParam.detailParamId = detailParamsId;
    const response = axios.put(
      "http://localhost:8090/yjBoard/delete",
      deleteParam
    );
    console.log(response);
  };

  return (
    <div className={styles.base_form}>
      <table className="detail-table">
        <tbody className="detail-body">
          <tr className="detail-header">
            <th className="">제목</th>
            <td className="">{detailBoardData.title}</td>
            <th>작성자</th>
            <td>{detailBoardData.author}</td>
          </tr>
          <tr className="detail-content">
            <th className="">내용</th>
            <td className="">{detailBoardData.content}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <button>
          <Link to="/yjBoard/update" style={{ textDecoration: "none" }}>
            게시글 수정
          </Link>
        </button>
        <button onClick={boardDelete}>삭제</button>
      </div>
    </div>
  );
};

export default YjBoardDetail;
