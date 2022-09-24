import MenuModal from "../common/MenuModal";

import classes from "./MenuHamburgerModal.module.css";

const MenuHamburgerModal = (props) => {
  const moveHandler = (page) => {
    console.log(page);
    props.history.push(page);
    props.onClose();
  };
  return (
    <MenuModal onClose={props.onClose}>
      <div>
        <div className={classes.menu_title}>Menu</div>
        <div className={classes.menu_main}>
          <div className={classes.menu_border}>
            <div>
              <span>YJ</span>
            </div>
            <div onClick={moveHandler.bind(this, "/yjBoard")}>YJBOARD</div>
            <div onClick={moveHandler.bind(this, "/yjTodo")}>YJTODO</div>
            <div onClick={moveHandler.bind(this, "/users")}>UserList</div>
            <div onClick={moveHandler.bind(this, "/imageBoard")}>
              imageBoard
            </div>
          </div>
          <div className={classes.menu_border}>
            <div>
              <span>HJ</span>
            </div>
            <div onClick={moveHandler.bind(this, "/approval/approvalList")}>
              Approval
            </div>
          </div>
        </div>
      </div>
    </MenuModal>
  );
};
export default MenuHamburgerModal;
