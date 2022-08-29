import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/Common.module.css";
import "./YjBoardDetail.css";
import axios from "axios";

const YjBoardDetail = (props) => {
  console.log(props);
  const detailParamsId = props.match.params.id;

  const [detailBoardData, setDetailBoard] = useState({});
  // const params = useParams();
  console.log(detailParamsId);

  const yjBoardDetailSearch = async () => {
    const response = await axios.get("http://localhost:8090/yjBoard/detail", {
      params: { detailParamsId: detailParamsId },
    });
    if (response.status === 200) {
      addCount(detailParamsId);
    }
    console.log(response);
    console.log(response.data);
    setDetailBoard(response.data);
  };

  const addCount = () => {
    const response = axios.put("http://localhost:8090/yjBoard/addCount", {
      params: { detailParamsId: detailParamsId },
    });
  };

  useEffect(() => {
    yjBoardDetailSearch();
  }, []);

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

  // const updateParam = {
  //   detailParamId: 0,
  // };

  // const yjBoardUpdate = () => {
  //   updateParam.detailParamId = detailParamsId;
  //   const response = axios.put(
  //     "http://localhost.8090/yjBoard/update",
  //     updateParam
  //   );
  //   console.log(response);
  // };

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
          </tr>
          <tr className="detail-content">
            <th className="">내용</th>
            <td className="">{detailBoardData.content}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <Link
          to={{
            pathname: `/yjBoard/update/${detailParamsId}`,
            state: detailBoardData,
          }}
        >
          수정
        </Link>

        <button onClick={yjBoardDelete}>삭제</button>
      </div>
    </div>
  );
};

export default YjBoardDetail;
