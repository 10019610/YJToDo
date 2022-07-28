import React from "react";
import "./YjBoard.css";
import { Link } from "react-router-dom";

const YjBoardList = ({ list }) => {
  return (
    <div>
      <div className="base_form">
        <div className="list_styles">
          <button>
            <Link to="/yjBoard/write" style={{ textDecoration: "none" }}>
              게시물 추가
            </Link>
          </button>
          {list.map((list) => {
            return (
              // <div key={list.id}>
              //   <ul className="list_body">
              //     <div>{list.createDateTime}</div>
              //     {list.id}.{list.title}
              //   </ul>
              // </div>
              <div>
                <table className="" key={list.id}>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{list.id}</th>
                      <td>{list.title}</td>
                      <td>{}</td>
                      <td>{list.createDateTime}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YjBoardList;
