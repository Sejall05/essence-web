import { Link } from "react-router-dom";
import "../assets/css/webdev.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";

function WebDevelopment() {
  return (
    <>
      <Navbar />
      <section className="WebDevelopment">
        {/* web-development */}
        <section className="web-development">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="web-title">
                  Get Attractive Website for Your Brand
                </h2>

                <p className="web-text">
                  Website is your business online presence, we will craft your
                  website more attractive.
                </p>

                <Link className="post-btn" to="/quote">
                  POST A PROJECT
                </Link>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <div className="webdevImg"></div>
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
                    <h3 className="offer-heading">UX/UI Design</h3>
                    <p className="offer-text">
                      Designing of a website is an important task before
                      development because user always stay on attractive &
                      engaging UI so we use latest tools to design your website
                      attractive.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">Landing Page</h3>
                    <p className="offer-text">
                      Our landing page website building service builds
                      high-converting sites that gather leads and propel
                      businesses forward. Attractive custom responsive designs.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">eCommerce Website</h3>
                    <p className="offer-text">
                      We will create online store for your business online. We
                      specilized in creating ecommerce websites in Shopify &
                      Open cart. we offer custom ecommerce solution in reactJs,
                      NodeJs.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">Custom Website</h3>
                    <p className="offer-text">
                      We offer custom website designing & development as per
                      your budget & requirements. We have experienced designers
                      and developers.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">Ready Made Website</h3>
                    <p className="offer-text">
                      We have thousands of ready made websites design theme &
                      templates which will suit your business. this can save
                      your time and money.
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card offer-card">
                  <div className="card-body">
                    <h3 className="offer-heading">Business Website</h3>
                    <p className="offer-text">
                      Every business need a professional website to show their
                      online presence. we are here to help you to create
                      professional website in your budget.
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

export default WebDevelopment;
