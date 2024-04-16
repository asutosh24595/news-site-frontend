import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    try {
      console.log("In client starting to post data");
      const response = await axios.post("http://localhost:8000/signup", {
        firstName,
        lastName,
        email,
      });
      console.log("Server response:", response.data);
      setSuccessMessage("OTP sent successfully, please wait");
      setErrorMessage("");

      setFirstName("");
      setLastName("");
      setEmail("");

      localStorage.setItem(
        "signupData",
        JSON.stringify({ firstName, lastName, email })
      );

      setTimeout(() => navigate("/otp-verify"), 3000);
    } catch (err) {
      if (err.response) {
        const statusCode = err.response.status;

        if (statusCode === 400) {
          setErrorMessage("User already exists");
        } else if (statusCode === 500) {
          setErrorMessage("Server error. Please try again later.");
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
      } else if (err.request) {
        console.error("No response received from server.");
      } else {
        console.error("Error setting up the request:", err.message);
      }
      setSuccessMessage("");
      setFirstName("");
      setLastName("");
      setEmail("");
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
                <h4 className="card-title text-center mb-4">Sign Up</h4>
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      name="firstName"
                      required
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      name="lastName"
                      required
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
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
                      name="email"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="form-control btn btn-primary btn-block mb-4"
                  >
                    Continue
                  </button>
                  <Link style={{ textDecoration: "none" }} to="/sign-in">
                    Sign In
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
