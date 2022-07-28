import React from "react";

import styles from "../../../css/Common.module.css";
import ApprovalList from "../../approval/ApprovalList";

const ApprovalListPage = () => {
  return (
    <div className={styles.base_form}>
      <h1>Approval List</h1>
      <ApprovalList></ApprovalList>
    </div>

  );
};

export default ApprovalListPage;
