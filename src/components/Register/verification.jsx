import React from "react";

const Verification = () => {
  return (
    <div>
      <h2>We just sent you an email </h2>
      <p>
        Kindly enter the security code we just sent to techtitans@gmail.com in
        order to verify your email.
      </p>
      <h2>Verification Code </h2>
      <div>code box</div>
      <button>Verify Email</button>
      <p>
        Didn’t receive OTP?<a href="">Resend OTP</a>{" "}
      </p>
    </div>
  );
};

export default Verification;
