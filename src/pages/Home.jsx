import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/css/home.css";

import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import midCircle from "../assets/img/midCircle.png";

import webDev from "../assets/img/web-development.svg";
import androidDev from "../assets/img/android-development.svg";
import digitalMarketing from "../assets/img/digital-marketing.svg";
import emailSupport from "../assets/img/email-support.svg";

import react from "../assets/img/react.svg";
import android from "../assets/img/android.svg";
import swift from "../assets/img/swift.svg";
import node from "../assets/img/node.svg";
import nextjs from "../assets/img/nextjs.svg";
import flutter from "../assets/img/flutter.svg";
import spring from "../assets/img/spring-boot.svg";
import leaf from "../assets/img/leaf.svg";
import php from "../assets/img/php.svg";
import laravel from "../assets/img/laravel.svg";
import angular from "../assets/img/angular.svg";
import aws from "../assets/img/aws.svg";

import logo from "../assets/img/logo-part.png";
import tools from "../assets/img/tool-part.svg";
import development from "../assets/img/development-part.svg";
import vector from "../assets/img/Vector (1).png";

import phoneImage from "../assets/img/epackbook 2.png";
import googlePlay from "../assets/img/google-play-badge.png";

import company1 from "../assets/img/Company-1.png";
import company2 from "../assets/img/Company-2.png";
import company3 from "../assets/img/Company-3.png";
import company4 from "../assets/img/Company-4.png";
import company5 from "../assets/img/Company-5.png";
import company6 from "../assets/img/Company-6.png";

import rating from "../assets/img/Rating.png";

function Home() {
  return (
    <>
      <Navbar />

      <section className="HOME">
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-glow"></div>
          <div className="container-fluid">
            <img src={img1} alt="" className="hero-img hero-img1" />
            <img src={img2} alt="" className="hero-img hero-img2" />
            <img src={img3} alt="" className="hero-img hero-img3" />
            <img src={img4} alt="" className="hero-img hero-img4" />

            <div className="hero-content">
              <img src={midCircle} alt="" className="mid-circle" />

              <div className="hero-text">
                <h1>
                  Bringing Your <br />
                  Ideas to <span>Reality</span>
                </h1>

                <p>
                  Unlock The Potential of <br />
                  Your Business
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Moving Text */}
        <div id="moving-text">
          <div className="scroll-text">
            <h1>WEB DEVELOPMENT</h1>
            <span className="dot"></span>

            <h1>MOBILE APP DEVELOPMENT</h1>
            <span className="dot"></span>

            <h1>WEB DEVELOPMENT</h1>
            <span className="dot"></span>

            <h1>MOBILE APP DEVELOPMENT</h1>
            <span className="dot"></span>
          </div>
        </div>

        {/* Services Section */}
        <section className="services">
          <div className="container mb-5 ">
            {/* Service 1 */}
            <div className="row mx-1 my-3">
              <div className="col-md-1"></div>
              <div className="col-md-5 d-flex align-items-center service-box">
                <h1>
                  WEB
                  <br />
                  DEVELOPMENT
                </h1>
              </div>

              <div className="col-md-5">
                <img
                  src={webDev}
                  alt="Web Development"
                  className="service-icon"
                />

                <p>
                  We deliver creative website design and development which meet
                  today's market trends. We use latest designing and development
                  tools to deliver your services to targeted audience.
                  <Link to="/web-development">
                    <i className="fa-solid fa-arrow-right service-arrow"></i>
                  </Link>
                </p>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="service-line"></div>

            {/* Service 2 */}
            <div className="row mx-1 my-3">
              <div className="col-md-1"></div>
              <div className="col-md-5 d-flex align-items-center service-box">
                <h1>
                  APP
                  <br />
                  DEVELOPMENT
                </h1>
              </div>

              <div className="col-md-5">
                <img
                  src={androidDev}
                  alt="App Development"
                  className="service-icon"
                />

                <p>
                  We provide unique app design and development that is
                  consistent with current market trends. We use cutting-edge
                  design and development methods to ensure that your app
                  efficiently reaches its intended audience.
                  <Link to="/app-development">
                    <i className="fa-solid fa-arrow-right service-arrow"></i>
                  </Link>
                </p>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="service-line"></div>

            {/* Service 3 */}
            <div className="row mx-1 my-3">
              <div className="col-md-1"></div>
              <div className="col-md-5 d-flex align-items-center service-box">
                <h1>
                  DIGITAL
                  <br />
                  MARKETING
                </h1>
              </div>

              <div className="col-md-5">
                <img
                  src={digitalMarketing}
                  alt="Digital Marketing"
                  className="service-icon"
                />

                <p>
                  We provide cutting-edge digital marketing solutions that keep
                  up with current market trends. We ensure that your services
                  effectively reach and engage your target audience by employing
                  cutting-edge technologies and techniques.
                  <Link to="/digital-marketing">
                    <i className="fa-solid fa-arrow-right service-arrow"></i>
                  </Link>
                </p>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="service-line"></div>

            {/* Service 4 */}
            <div className="row mx-1 my-3">
              <div className="col-md-1"></div>
              <div className="col-md-5 d-flex align-items-center service-box">
                <h1>
                  EMAIL
                  <br />
                  SUPPORT
                </h1>
              </div>

              <div className="col-md-5">
                <img
                  src={emailSupport}
                  alt="Email Support"
                  className="service-icon"
                />

                <p>
                  We offer creative email marketing solutions that are in line
                  with current industry trends. We use cutting-edge techniques
                  and tactics to ensure that your communications efficiently
                  reach and engage your target audience.
                  <Link to="/email-support">
                    <i className="fa-solid fa-arrow-right service-arrow"></i>
                  </Link>
                </p>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>

        {/* Technology Slider */}
        <section className="technology">
          <div className="container">
            <div className="tech-line"></div>

            <div id="moving-tech">
              <div className="movingTechnology">
                <img src={react} alt="react" />
                <img src={android} alt="android" />
                <img src={swift} alt="swift" />
                <img src={node} alt="node" />
                <img src={nextjs} alt="nextjs" />
                <img src={flutter} alt="flutter" />
                <img src={spring} alt="spring" />
                <img src={leaf} alt="leaf" />
                <img src={php} alt="php" />
                <img src={laravel} alt="laravel" />
                <img src={angular} alt="angular" />
                <img src={aws} alt="aws" />
              </div>

              <div className="movingTechnology">
                <img src={react} alt="react" />
                <img src={android} alt="android" />
                <img src={swift} alt="swift" />
                <img src={node} alt="node" />
                <img src={nextjs} alt="nextjs" />
                <img src={flutter} alt="flutter" />
                <img src={spring} alt="spring" />
                <img src={leaf} alt="leaf" />
                <img src={php} alt="php" />
                <img src={laravel} alt="laravel" />
                <img src={angular} alt="angular" />
                <img src={aws} alt="aws" />
              </div>
            </div>

            <div className="tech-line"></div>
          </div>
        </section>

        {/* Working Process Section */}
        <section className="py-5 workFlow">
          <div className="container">
            <h2 className="text-center mb-5">Working Process</h2>

            <div className="row gy-4">
              <div className="col-md-1"></div>

              {/* Idea Box */}
              <div className="col-md-4">
                <div className="card p-3">
                  <div className="color-box">
                    <h5>Color</h5>

                    <div className="squaresBox">
                      <div className="moving-squares">
                        <div className="movingSquare">
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#D8BC73" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#6640F1" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#DE7259" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#2C9DB8" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#D8BC73" }}
                          ></div>
                        </div>

                        <div className="movingSquare">
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#1181EA" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#CD6EDC" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#26CCAF" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#EF6B6E" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#D27F14" }}
                          ></div>
                        </div>

                        <div className="movingSquare">
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#6AB187" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#6640F1" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#DE7259" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#2C9DB8" }}
                          ></div>
                          <div
                            className="boxes"
                            style={{ backgroundColor: "#D8BC73" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-6">
                      <div className="small-box">
                        <h6>Typography</h6>
                        <h3>Tt</h3>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="small-box text-center">
                        <h6>Logo</h6>
                        <img src={logo} alt="Logo" className="img-fluid logo" />
                      </div>
                    </div>
                  </div>

                  <h4 className="mt-4">
                    <i className="fa-solid fa-rocket"></i> Idea
                  </h4>

                  <p>
                    Discover new projects and strategize effectively to ensure
                    timely completion.
                  </p>
                </div>
              </div>

              {/* UI Design Box */}
              <div className="col-md-6">
                <div className="card p-3">
                  <div className="image-box tools-box">
                    <h5>Tools</h5>
                    <img src={tools} alt="Tools" className="img-fluid" />
                  </div>

                  <h4 className="mt-4">
                    <i className="fa-solid fa-display"></i> UI Design
                  </h4>

                  <p>
                    Our creative designer can transform your ideas into a
                    professional and visually appealing reality, giving them a
                    polished look.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="row gy-4 mt-0">
              <div className="col-md-1"></div>

              {/* UI Development Box*/}
              <div className="col-md-6">
                <div className="card p-3">
                  <div className="image-box devlopment-box">
                    <h5>Development</h5>
                    <img
                      src={development}
                      alt="Development"
                      className="img-fluid"
                    />
                  </div>

                  <h4 className="mt-4">
                    <i className="fa-solid fa-terminal"></i> UI Development
                  </h4>

                  <p>
                    Our developer is committed to following the provided design
                    and ensuring the final product meets all specifications.
                  </p>
                </div>
              </div>

              {/* Delivery Box */}
              <div className="col-md-4">
                <div className="card p-3">
                  <div className="image-box checking-box">
                    <h5>Checking</h5>
                  </div>
                  <h4 className="mt-4">
                    <i className="fa-solid fa-thumbs-up"></i> Delivery
                  </h4>

                  <p>
                    After final quality check and client approval, we make the
                    project live.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>

            {/* Star Words */}
            <div className="d-flex justify-content-center align-items-center pt-5 mt-3 mb-2 gap-2 flex-wrap">
              <div className="feature-box d-flex align-items-center justify-content-center py-2 px-3 gap-2">
                <img src={vector} alt="Simple" />
                <h5 className="m-0 text-white">Simple</h5>
              </div>

              <div className="feature-box d-flex align-items-center justify-content-center py-2 px-3 gap-2">
                <img src={vector} alt="Effective" />
                <h5 className="m-0 text-white">Effective</h5>
              </div>

              <div className="feature-box d-flex align-items-center justify-content-center py-2 px-3 gap-2">
                <img src={vector} alt="Scalable" />
                <h5 className="m-0 text-white">Scalable</h5>
              </div>

              <div className="feature-box d-flex align-items-center justify-content-center py-2 px-3 gap-2">
                <img src={vector} alt="Secure" />
                <h5 className="m-0 text-white">Secure</h5>
              </div>
            </div>
          </div>
        </section>

        {/* Since */}
        <section className="since-box">
          <div className="container">
            <h2>
              Since 2011 we've been working with amazing organisations to create
              meaningful results. Now it's your turn.
            </h2>
          </div>
        </section>

        {/* ebook */}
        <section className="ePackBook py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row align-items-center ePackBook-section py-4">
                  {/* <div className="col-lg-8 text-center d-flex flex-column justify-content-center align-items-center gap-3"> */}
                  <div className="col-md-7 col-lg-8 text-start d-flex flex-column justify-content-center gap-3">
                    <h2 className="epack-heading">
                      Packer and Movers
                      <br />
                      Software - ePackBook
                    </h2>

                    <p className="epack-text">
                      ePackBook Offer Relocation Companies to be Online to
                      Manage Packers and Movers Business.
                    </p>

                    {/* <div className="d-flex flex-wrap justify-content-center align-items-center gap-3"> */}
                    <div className="d-flex flex-wrap justify-content-start align-items-center gap-3">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.epackbook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={googlePlay}
                          alt="Google Play"
                          className="google-play"
                        />
                      </a>

                      <a
                        href="https://www.epackbook.in/"
                        target="_blank"
                        rel="noreferrer"
                        className="ePackBookBtn"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>

                  {/* <div className="col-lg-4 text-center"> */}
                  <div className="col-md-5 col-lg-4 text-end">
                    <img
                      src={phoneImage}
                      alt="ePackBook"
                      className="img-fluid phoneimage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moving Brands */}
        <section className="workedWith py-4">
          <h2 className="text-center">Worked With</h2>

          <div className="moving-text">
            <div className="movingbrand">
              <img src={company1} alt="Company 1" />
              <img src={company2} alt="Company 2" />
              <img src={company3} alt="Company 3" />
              <img src={company4} alt="Company 4" />
              <img src={company5} alt="Company 5" />
              <img src={company6} alt="Company 6" />
            </div>

            <div className="movingbrand">
              <img src={company1} alt="Company 1" />
              <img src={company2} alt="Company 2" />
              <img src={company3} alt="Company 3" />
              <img src={company4} alt="Company 4" />
              <img src={company5} alt="Company 5" />
              <img src={company6} alt="Company 6" />
            </div>
          </div>
        </section>

        {/* FAQ and TESTIMONIAL */}
        <section className="faq-testimonials py-5">
          <div className="container">
            <div className="row">
              {/* FAQ */}
              <div className="col-lg-6 mb-5">
                <h2 className="section-title text-center mb-4">FAQ's</h2>

                <div className="faq">
                  <div className="faq-item">
                    <h2 className="faq-header">
                      <button
                        className="faq-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOne"
                      >
                        <span>
                          What website and app development services does Essence
                          Web Technology provide?
                        </span>

                        <i className="fa-solid fa-angle-down"></i>
                      </button>
                    </h2>

                    <div id="faqOne" className="faq-collapse collapse">
                      <div className="faq-body">
                        We offer services such as Software Development, Mobile
                        App Development, Website Development, UX/UI Design,
                        Digital Marketing, Email Support and more.
                      </div>
                    </div>
                  </div>

                  <div className="faq-item">
                    <h2 className="faq-header">
                      <button
                        className="faq-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqTwo"
                      >
                        <span>How can your services benefit my business? </span>

                        <i className="fa-solid fa-angle-down"></i>
                      </button>
                    </h2>

                    <div id="faqTwo" className="faq-collapse collapse">
                      <div className="faq-body">
                        We will establish your online presence to get more
                        attraction from targeted audience & convert them into
                        your client list.
                      </div>
                    </div>
                  </div>

                  <div className="faq-item">
                    <h2 className="faq-header">
                      <button
                        className="faq-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqThree"
                      >
                        <span>Do you create custom websites?</span>

                        <i className="fa-solid fa-angle-down"></i>
                      </button>
                    </h2>

                    <div id="faqThree" className="faq-collapse collapse">
                      <div className="faq-body">
                        Yes, we can create websites which is tailored for you as
                        per your choice.
                      </div>
                    </div>
                  </div>

                  <div className="faq-item">
                    <h2 className="faq-header">
                      <button
                        className="faq-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqFour"
                      >
                        <span>
                          Can you design mobile apps for both Android and iOS?
                        </span>

                        <i className="fa-solid fa-angle-down"></i>
                      </button>
                    </h2>

                    <div id="faqFour" className="faq-collapse collapse">
                      <div className="faq-body">
                        Yes, we offer mobile app development for both Android as
                        well as iOS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="col-lg-6 mb-5">
                <h2 className="section-title text-center mb-4">Testimonials</h2>

                <div
                  id="testimonialCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval="5000"
                    >
                      <div className="testimonialContent text-center">
                        <p>
                          Essence Web Technology is the Best Digital Marketing
                          Agency in Gurgaon. I've worked with several digital
                          marketing agencies, but Essence Web Tech stands out
                          from the rest. Their in-depth knowledge of SEO, Mobile
                          App Designing, Website AMC Services and commitment to
                          customer satisfaction are commendable.
                        </p>

                        <img src={rating} alt="Rating" />

                        <h5>Poonam</h5>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="5000">
                      <div className="testimonialContent text-center">
                        <p>
                          Essence Web Tech, Digital Marketing Agency exceeded
                          all expectations! Their strategic approach and
                          creative campaigns transformed our online presence.
                          From SEO to social media, their expertise is
                          unparalleled. Exceptional communication and
                          results-driven team. Highly recommend it for
                          businesses seeking impactful digital marketing
                          solutions.
                        </p>

                        <img src={rating} alt="Rating" />

                        <h5>Aditya Sharma</h5>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="5000">
                      <div className="testimonialContent text-center">
                        <p>
                          I love that I can get website development, digital
                          marketing, and SEO services all in one place. It's
                          convenient and the results have been outstanding. I
                          Highly recommend essence web technology for digital
                          marketing purpose.
                        </p>

                        <img src={rating} alt="Rating" />

                        <h5>Nazm Yaduvanshi</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Build */}
        <section className="letsBuild">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center">
              LET'S BUILD THE FUTURE <br />
              TOGETHER
            </h1>

            <Link to="/quote" className="project-btn">
              Post a Project
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Home;
