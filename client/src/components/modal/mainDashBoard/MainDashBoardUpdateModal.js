import { useRef } from "react";
import axios from "axios";
import Modal from "../../common/Modal";


const MainDashBoardUpdateModal = (props) => {

    const contentInputRef = useRef();

    const updateParam = {
        boardId: props.boardId,
        content: '',
    }

    const contentChangeHandler = () => {

    }



    const update = () => {
        updateParam.content = contentInputRef.current.value;
        const response = axios.put('', updateParam);
        console.log(response);
        props.onClose();
    }

    return (
        <Modal onClose={props.onClose}>
            <div>
                <h2>수정하기</h2>
                <div>
                    <label>Content</label>
                </div>
                <div>
                    <textarea onChange={contentChangeHandler} ref={contentInputRef}></textarea>
                </div>
                <div>
                    <button onClick={update}>수정하기</button>
                    <button onClick={props.onClose}>취소</button>
                </div>
            </div>
        </Modal>
    )
}

export default MainDashBoardUpdateModal;