import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Anime</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a onClick={() => navigate("/")} class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>;
}