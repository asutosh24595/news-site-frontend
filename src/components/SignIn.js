import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Inside try block");
      console.log(email);
      const response = await axios.post("http://localhost:8000/login", {
        email,
      });

      if (response.status === 200) {
        localStorage.setItem("signinData", JSON.stringify({ email }));
        navigate("/otp-verify");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("User not found. Please sign up instead.");
      } else {
        console.error("Error checking user:", error);
        setErrorMessage("Error checking user. Please try again.");
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
                <h4 className="card-title text-center mb-4">
                  Log In or Sign Up
                </h4>
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="bi bi-envelope-at"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="form-control btn btn-primary btn-block mb-4"
                  >
                    Continue
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
