import { Link } from "react-router-dom";

export default function Premium() {
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
        <div className="container mt-5">
          <div className="row justify-content-center">
            {/* Weekly subscription */}
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title text-center mb-4">Weekly Subscription</h4>
                  <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="form-control btn btn-primary btn-block mb-2">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
  
            {/* Monthly subscription */}
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title text-center mb-4">Monthly Subscription</h4>
                  <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="form-control btn btn-primary btn-block mb-2">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
  
            {/* Yearly subscription */}
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title text-center mb-4">Yearly Subscription</h4>
                  <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="form-control btn btn-primary btn-block mb-2">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  