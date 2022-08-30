import SignupForm from "../../member/SignupForm";

const SignupPage = (props) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm addBoard={props.addBoard}></SignupForm>
    </div>
  );
};

export default SignupPage;
