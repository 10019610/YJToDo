import React from "react";
import { useHistory } from 'react-router-dom';

import ApprovalForm from "../../approval/ApprovalForm";

const ApprovalFormpage = () => {
  const history = useHistory();

  const addApprovalHandler = approval => {
    console.log(approval);
    history.push('/approval/approvalList');
  }
  return (
    <div>
      <h1>Approval Form</h1>
      <ApprovalForm addApproval={addApprovalHandler}></ApprovalForm>
    </div>
  );
};

export default ApprovalFormpage;
