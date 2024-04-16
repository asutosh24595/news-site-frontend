import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Otpverify() {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [succMsg, setSuccMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const signupData = JSON.parse(localStorage.getItem("signupData"));
    const signinData = JSON.parse(localStorage.getItem("signinData"));

    if (signupData) {
      setEmail(signupData.email);
      setFirstName(signupData.firstName);
      setLastName(signupData.lastName);
    }

    if (signinData) {
      setEmail(signinData.email);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("OTP", otp);
      console.log("FirstName", firstName);
      console.log("LastName", lastName);
      const response = await axios.post("http://localhost:8000/verifyotp", {
        otp,
        email,
        firstName,
        lastName,
      });
      console.log("Server response:", response.data);
      setSuccMessage(response.data.message);
      setErrorMessage("");
      setOtp("");

      localStorage.removeItem("signupData");
      localStorage.removeItem("signinData");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Error verifying OTP. Please try again.");
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#e9ecef", minHeight: "100vh" }}>
      <header
        style={{
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "20px 0",
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        }}
      >
        <h1 style={{ margin: "0" }}>News Today</h1>
      </header>
      <Link to="/" style={{ textDecoration: "none" }}>
        Back to home <i className="bi bi-house-door"></i>
      </Link>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p>Please enter the OTP sent to your email</p>
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
                {succMsg && (
                  <div className="alert alert-success">{succMsg}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <input
                    type="password"
                    className="form-control"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    required
                  />
                  <button
                    type="submit"
                    className="form-control btn btn-primary btn-block mb-4 mt-4"
                  >
                    Verify OTP
                  </button>
                  <Link style={{ textDecoration: "none" }} to="/sign-up">
                    Sign Up
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
