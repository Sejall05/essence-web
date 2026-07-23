import { Link } from "react-router-dom";
import "../assets/css/mobdev.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";

function MobileDevelopment() {
  return (
    <>
      <Navbar />

      <section className="MobileDevelopment">
        {/* mob-development */}
        <section className="mob-development">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="mob-title">Mobile App Development</h2>

                <p className="mob-text">
                  Want to design your brand mobile app? Discuss with our expert,
                  We’d love to share our excellence with you.
                </p>

                <Link className="post-btn" to="/quote">
                  POST A PROJECT
                </Link>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <div className="mobdevImg"></div>
              </div>
            </div>
          </div>
        </section>

        <Technologies />

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
                    <h3 className="offer-heading">
                      Android Mobile App Development
                    </h3>
                    <p className="offer-text">
                      Essence Web Technology is the best Android mobile app
                      development company in India. to get custom app
                      development call us now to get tailered app in your
                      budget.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">
                      iOS Mobile App Development
                    </h3>
                    <p className="offer-text">
                      We offer iphone app development services as per your
                      requirements. We at essence web technology provide custom
                      mobile app development services in your budget.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">
                      Hybrid Mobile App Development
                    </h3>
                    <p className="offer-text">
                      We offer hybrid or cross platform mobile app development
                      in your budget. We have well experienced developers to
                      accomplish your project on time.
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

export default MobileDevelopment;
