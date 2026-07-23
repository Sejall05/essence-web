import { Link } from "react-router-dom";
import "../assets/css/career.css";
import careerImage from "../assets/img/career-image.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Career() {
  return (
    <>
      <Navbar />
      <section className="Career">
        <div className="career-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="career-title">Join Our Team</h2>

                <p className="career-text">
                  You can send your latest resume at hr@essencewebtech.in.
                  Please write down the position in the subject line of the
                  email for which you applied. We shall consider your
                  application for appropriate vacancy.
                </p>

                <h3 className="resume-title">Send your latest resume</h3>

                <form
                  action="mail.php"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Upload Resume</label>
                    <input
                      type="file"
                      name="resume"
                      className="form-control"
                      accept=".pdf"
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send CV
                  </button>
                </form>
              </div>

              <div className="col-md-6 text-center">
                <img
                  src={careerImage}
                  alt="Career"
                  className="career-image img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Career;
