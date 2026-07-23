import { Link } from "react-router-dom";
import "../assets/css/email.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";

function EmailSupport() {
  return (
    <>
      <Navbar />
      <section className="EmailSupport">
        {/* EmailSupport */}
        <section className="email-support">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="email-title">Business emails & 24x7 Support</h2>

                <p className="email-text">
                  Email Support involves providing assistance and resolving
                  issues and troubleshooting problems to managing complaints.
                </p>

                <Link className="post-btn" to="/quote">
                  POST A PROJECT
                </Link>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <div className="emailImg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="technologies py-5">
          <div className="container text-center">
            <h2 className="tech-title mb-4">Emails Solutions</h2>

            {/* Nav Tabs */}
            <ul className="nav nav-tabs justify-content-center gap-2 border-0">
              <li className="nav-item">
                <button
                  className="nav-link tech-btn active"
                  data-bs-toggle="tab"
                  data-bs-target="#gsuitbusiness"
                  type="button"
                >
                  GSUIT BUSINESS
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link tech-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#webmail"
                  type="button"
                >
                  WEBMAIL
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link tech-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#microsoft365"
                  type="button"
                >
                  MICROSOFT 365
                </button>
              </li>
            </ul>

            {/* Tab Buttons */}
            <div className="tab-content mt-5">
              <div className="tab-pane fade show active" id="gsuitbusiness">
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <span className="tech-box">Business Gmail Setup</span>
                  <span className="tech-box">Outlook Configuration</span>
                  <span className="tech-box">Mobile configuration</span>
                  <span className="tech-box">24x7 Support</span>
                </div>
              </div>

              <div className="tab-pane fade" id="webmail">
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <span className="tech-box">Mail create via cpanel</span>
                  <span className="tech-box">Outlook Configuration</span>
                  <span className="tech-box">Mobile configuration</span>
                  <span className="tech-box">24x7 Support</span>
                </div>
              </div>

              <div className="tab-pane fade" id="microsoft365">
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <span className="tech-box">
                    Mail create & Domain configuration
                  </span>
                  <span className="tech-box">Outlook Configuration</span>
                  <span className="tech-box">Mobile configuration</span>
                  <span className="tech-box">Teams Setup</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="offer-section justify-content-center py-lg-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <h2 className="offer-title text-center mb-4">What we offer</h2>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">Business Gmail Solution</h3>
                    <p className="offer-text">
                      Google Workspace (formerly G Suite) is Google's suite of
                      cloud-based productivity tools, including Gmail, tailored
                      for business use.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">Microsoft 365 Solution</h3>
                    <p className="offer-text">
                      Microsoft 365 (formerly Office 365) offers a suite of
                      productivity tools and services designed for businesses,
                      including professional email solutions.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">cPanel mails - Webmail</h3>
                    <p className="offer-text">
                      Webmail in cPanel allows users to access their email
                      accounts through a web-based interface, making it easy to
                      send, receive, and manage emails from any device with an
                      internet connection.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default EmailSupport;
