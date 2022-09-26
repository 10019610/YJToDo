import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./Image.module.css";

const ImageList = () => {
  const [imgList, setImgList] = useState([]);

  const createTime = (craeteDate) => {
    let date = new Date(craeteDate);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return date;
  };

  const readImages = async () => {
    const response = await axios.get("http://localhost:8090/image/read");
    setImgList(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    readImages();
  }, []);
  return (
    <div>
      <table className={classes.imgtable}>
        <thead className={classes.imagehead}>
          <tr>
            <th>번호</th>
            <th>수리 사진</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody className={classes.body}>
          {imgList.map((listItem, index) => {
            return (
              <tr key={index}>
                <th>{imgList.length - index + 1}</th>
                <td className={classes.td}>
                  <Link
                    to={`/image/detail/${listItem.imageId}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={
                        process.env.REACT_APP_API_URL +
                        "/images/" +
                        listItem.imageFilename
                      }
                      alt={"img" + listItem.imageId}
                      //   style={{
                      //     width: "50",
                      //     height: "100px",
                      //     borderRadius: "5px",
                      //   }}
                    />
                  </Link>
                </td>
                <td>{createTime(listItem.createDateTime)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ImageList;
