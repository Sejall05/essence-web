import { Link } from "react-router-dom";
import "../assets/css/tech.css";

function Technologies() {
  return (
    <>
      <section className="technologies py-5">
        <div className="container text-center">
          <h2 className="tech-title mb-4">Technologies</h2>

          {/* Nav Tabs */}
          <ul className="nav nav-tabs justify-content-center gap-2 border-0">
            <li className="nav-item">
              <button
                className="nav-link tech-btn active"
                data-bs-toggle="tab"
                data-bs-target="#frontend"
                type="button"
              >
                FRONTEND
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link tech-btn"
                data-bs-toggle="tab"
                data-bs-target="#backend"
                type="button"
              >
                BACKEND
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link tech-btn"
                data-bs-toggle="tab"
                data-bs-target="#android"
                type="button"
              >
                ANDROID
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link tech-btn"
                data-bs-toggle="tab"
                data-bs-target="#database"
                type="button"
              >
                DATABASE
              </button>
            </li>
          </ul>

          {/* Tab Buttons */}
          <div className="tab-content mt-5">
            <div className="tab-pane fade show active" id="frontend">
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <span className="tech-box">React JS</span>
                <span className="tech-box">Angular</span>
                <span className="tech-box">Vue JS</span>
                <span className="tech-box">Next JS</span>
              </div>
            </div>

            <div className="tab-pane fade" id="backend">
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <span className="tech-box">Node JS</span>
                <span className="tech-box">Laravel</span>
                <span className="tech-box">Express JS</span>
                <span className="tech-box">Spring Boot</span>
              </div>
            </div>

            <div className="tab-pane fade" id="android">
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <span className="tech-box">Flutter</span>
                <span className="tech-box">Kotlin</span>
                <span className="tech-box">React Native</span>
                <span className="tech-box">Jetpack Compose</span>
              </div>
            </div>

            <div className="tab-pane fade" id="database">
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <span className="tech-box">MongoDB</span>
                <span className="tech-box">MySQL</span>
                <span className="tech-box">Firebase</span>
                <span className="tech-box">AWS</span>
                <span className="tech-box">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
