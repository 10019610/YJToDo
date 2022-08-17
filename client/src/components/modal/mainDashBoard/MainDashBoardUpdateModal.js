import { useRef } from "react";
import axios from "axios";
import Modal from "../../common/Modal";

import classes from "./MainDashBoardUpdateModal.module.css";
import common from "../../../css/Common.module.css";

const MainDashBoardUpdateModal = (props) => {
  const boardItem = props.items;
  console.log(boardItem);

  const contentInputRef = useRef();

  const updateParam = {
    mainDashboardId: boardItem.id,
    content: "",
  };

  const contentChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const updateHandler = async () => {
    updateParam.content = contentInputRef.current.value;
    console.log(updateParam);
    const response = await axios.put(
      "http://localhost:8090/mainDashBoard/update",
      updateParam
    );
    console.log(response);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        <h2>수정하기</h2>
        <div className={classes.modal}>
          <label>Content</label>
        </div>
        <div className={classes.modal}>
          <textarea
            defaultValue={boardItem.content}
            onChange={contentChangeHandler}
            ref={contentInputRef}
          ></textarea>
        </div>
        <div className={common.button_area}>
          <button className={common.button_confirm} onClick={updateHandler}>
            수정하기
          </button>
          <button className={common.button_cancel} onClick={props.onClose}>
            취소
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MainDashBoardUpdateModal;
