import { Link } from "react-router-dom";
import "../assets/css/digitalmarketing.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";

function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <section className="DigitalMarketing">
        {/* DigitalMarketing */}
        <section className="digital-marketing">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="digital-title">
                  Grow Your Online Presence with Digital Marketing
                </h2>

                <p className="digital-text">
                  Get Best Online Marketing Services (SEO,SMO, PPC) which suite
                  your pocket. We deliver result oriented projects.
                </p>

                <Link className="post-btn" to="/quote">
                  POST A PROJECT
                </Link>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <div className="digitalImg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="technologies py-5">
          <div className="container text-center">
            <h2 className="tech-title mb-4">Marketing Tools</h2>

            {/* Nav Tabs */}
            <ul className="nav nav-tabs justify-content-center gap-2 border-0">
              <li className="nav-item">
                <button
                  className="nav-link tech-btn active"
                  data-bs-toggle="tab"
                  data-bs-target="#seo"
                  type="button"
                >
                  SEO
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link tech-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#content-marketing"
                  type="button"
                >
                  CONTENT MARKETING
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link tech-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#social-media-management"
                  type="button"
                >
                  SOCIAL MEDIA MANAGEMENT
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link tech-btn"
                  data-bs-toggle="tab"
                  data-bs-target="#ppc-and-advertising"
                  type="button"
                >
                  PPC AND ADVERTISING
                </button>
              </li>
            </ul>

            {/* Tab Buttons */}
            <div className="tab-content mt-5">
              <div className="tab-pane fade show active" id="seo">
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <span className="tech-box">Google Analytics</span>
                  <span className="tech-box">Google Search Console</span>
                  <span className="tech-box">SEMrush</span>
                  <span className="tech-box">Ahrefs</span>
                </div>
              </div>

              <div className="tab-pane fade" id="content-marketing">
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <span className="tech-box">Grammarly</span>
                  <span className="tech-box">Canva</span>
                  <span className="tech-box">BuzzSumo</span>
                  <span className="tech-box">CoSchedule Headline Analyzer</span>
                </div>
              </div>

              <div className="tab-pane fade" id="social-media-management">
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <span className="tech-box">Hootsuite</span>
                  <span className="tech-box">Buffer</span>
                  <span className="tech-box">Sprout Social</span>
                  <span className="tech-box">Later</span>
                </div>
              </div>

              <div className="tab-pane fade" id="ppc-and-advertising">
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <span className="tech-box">Google Ads</span>
                  <span className="tech-box">Facebook Ads Manager</span>
                  <span className="tech-box">Bing Ads</span>
                  <span className="tech-box">AdEspresso</span>
                  <span className="tech-box">Linkedin Ads</span>
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
                    <h3 className="offer-heading">SEO Services</h3>
                    <p className="offer-text">
                      SEO (Search Engine Optimization) services are designed to
                      improve a website's visibility in search engine results
                      pages (SERPs) and attract more organic traffic.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">Social Media Marketing</h3>
                    <p className="offer-text">
                      Social Media Marketing (SMM) involves using social media
                      platforms to promote a business, engage with its audience,
                      and achieve various marketing objectives.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">Mobile Marketing - ASO</h3>
                    <p className="offer-text">
                      App Store Optimization (ASO) is a key aspect of mobile
                      marketing focused on improving the visibility and
                      attractiveness of mobile apps within app stores like
                      Google Play and the Apple App Store.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">PPC Services</h3>
                    <p className="offer-text">
                      Pay-Per-Click (PPC) Services are a form of digital
                      advertising where you pay each time a user clicks on your
                      ad. PPC campaigns can drive targeted traffic to your
                      website or landing page, and they’re commonly used in
                      Google and Facebook Ads.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">
                      Online Reputation Management
                    </h3>
                    <p className="offer-text">
                      Online Reputation Management (ORM) involves monitoring,
                      influencing, and improving the public perception of a
                      business, individual, or brand on the internet.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">eCommerce Marketing</h3>
                    <p className="offer-text">
                      eCommerce Marketing involves strategies and tactics
                      designed to drive traffic, increase sales, and enhance the
                      overall online presence of an eCommerce business.
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

export default DigitalMarketing;
