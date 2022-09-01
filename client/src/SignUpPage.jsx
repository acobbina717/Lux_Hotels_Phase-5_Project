import React from "react";
import SignUpForm from "./Components/SignUpForm";

const SignUpPage = ({ getCurrentUser }) => {
  return (
    <div>
      <SignUpForm getCurrentUser={getCurrentUser} />
    </div>
  );
};

export default SignUpPage;
