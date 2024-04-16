import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="mb-5">
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#e3f2fd",
          position: "fixed",
          top: 0,
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bitcoin">
                  Crypto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cricket">
                  Cricket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/world">
                  World
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lifestyle">
                  Lifestyle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/premium">
                  NT Premium
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-in">
                <i className="bi bi-person-fill"></i>
                   Sign in
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
