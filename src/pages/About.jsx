import { Link } from "react-router-dom";
import "../assets/css/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bannerImage from "../assets/img/bannerImage.png";

import webDevelopment from "../assets/img/web-development.svg";
import mobileDevelopment from "../assets/img/androiddevelopment.svg";
import digitalMarketing from "../assets/img/digital-marketing.svg";
import emailSupport from "../assets/img/email-support.svg";

function About() {
  return (
    <>
      <Navbar />

      <section className="ABOUT">
        {/* Banner */}
        <div className="banner">
          <img src={bannerImage} alt="Banner" />

          <div className="banner-content">
            <h2>About Us</h2>
            <p>Be Secure with Essence Web Technology</p>
          </div>
        </div>

        {/* About Us Section */}
        <section className="aboutUs">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <p className="about-text">
                  At Essence Web Technology, we have a dedicated team of UX/UI
                  designers, Web & Mobile App Developers, and Digital Marketing
                  experts who deliver exceptional results for your dream
                  projects. With more than 13 years of experience in the IT
                  sector, we have worked across almost every business category.
                  We have successfully completed over 2,500 projects for more
                  than 1,000 satisfied customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Seaction */}
        <section className="teamSection">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <h2 className="team-title mb-4">Our Team</h2>

                <p className="team-text mb-5">
                  We are a group of innovative, experienced, and proficient
                  teams. You will love to collaborate with us.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <img
                    src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                    alt="Salim Khan"
                  />

                  <div className="team-info">
                    <h4>Salim Khan</h4>
                    <p>~ Founder</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <img
                    src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                    alt="Lalit Vats"
                  />

                  <div className="team-info">
                    <h4>Lalit Vats</h4>
                    <p>~ HR</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <img
                    src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                    alt="Umar"
                  />

                  <div className="team-info">
                    <h4>Umar</h4>
                    <p>~ Head</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="team-card">
                  <img
                    src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                    alt="Vijay Kumar"
                  />

                  <div className="team-info">
                    <h4>Vijay Kumar</h4>
                    <p>~ Sr. Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Section */}
        <section className="userNeed">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-5 d-flex flex-column justify-content-center">
                <h1 className="mb-3">
                  What can we help <br />
                  you achieve?
                </h1>

                <p className="left-para">
                  We will establish your online presence to get more attraction
                  from targeted audience & convert them into your client list.
                </p>
                <p>
                  We have readymade IT Projects for your Business, this can
                  reduce your development cost. if you want custom design &
                  development then we have dedicated team of developers to your
                  dreams comes true.
                </p>
              </div>

              <div className="col-md-5 px-5">
                <div className="row gx-5">
                  <div className="col-6">
                    <div className="help-box mb-4">
                      <h3>1000+</h3>
                      <h5>Satisfied Customers</h5>
                    </div>

                    <div className="help-box">
                      <h3>13+</h3>
                      <h5>Years of Experience</h5>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="help-box big-box">
                      <h3>2500+</h3>
                      <h5>Projects Delivered</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-1"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2 className="services-title">Services</h2>

            <div className="row gy-5">
              {/* Service 1 */}
              <div className="col-6 col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="service-icon">
                    <img src={webDevelopment} alt="Web Development" />
                  </div>

                  <h4>Web Design & Development</h4>

                  <p>
                    We can help you to create a visually appealing and
                    user-friendly website. We take into account your brand
                    identity and target audience when designing your website.
                  </p>

                  <Link to="/web-development" className="service-link">
                    Read More
                    <i className="fa-solid fa-arrow-right service-arrow"></i>
                  </Link>
                </div>
              </div>

              {/* Service 2 */}
              <div className="col-6 col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="service-icon">
                    <img src={mobileDevelopment} alt="Mobile App" />
                  </div>

                  <h4>Mobile App Development</h4>

                  <p>
                    We can help you to create a visually appealing and
                    user-friendly Mobile App. We have experties in both Android
                    & iOS mobile app development.
                  </p>

                  <Link to="/app-development" className="service-link">
                    Read More
                    <i className="fa-solid fa-arrow-right service-arrow"></i>
                  </Link>
                </div>
              </div>

              {/* Service 3 */}
              <div className="col-6 col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="service-icon">
                    <img src={digitalMarketing} alt="Digital Marketing" />
                  </div>

                  <h4>Digital Marketing</h4>

                  <p>
                    We can help you to improve your website's visibility in
                    search engine results pages (SERPs). This can lead to more
                    traffic to your website and more conversions.
                  </p>

                  <Link to="/digital-marketing" className="service-link">
                    Read More
                    <i className="fa-solid fa-arrow-right service-arrow"></i>
                  </Link>
                </div>
              </div>

              {/* Service 4 */}
              <div className="col-6 col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="service-icon">
                    <img src={emailSupport} alt="Email Support" />
                  </div>

                  <h4>Email Support</h4>

                  <p>
                    Every business require business mails and mails should be
                    working smoothly on mobile & laptop. You just focus on your
                    business, we will take care of your mails.
                  </p>

                  <Link to="/email-support" className="service-link">
                    Learn More
                    <i className="fa-solid fa-arrow-right service-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: "60px", background: "#0b0f22" }}></div>
      </section>
      <Footer />
    </>
  );
}

export default About;
