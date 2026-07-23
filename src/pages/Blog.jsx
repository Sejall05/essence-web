import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/css/blog.css";

import blog1 from "../assets/img/blog1.png";
import blog2 from "../assets/img/blog2.jpg";
import blog3 from "../assets/img/blog3.jpg";
import blog4 from "../assets/img/blog4.jpg";
import blog5 from "../assets/img/blog5.jpg";
import blog6 from "../assets/img/blog6.jpg";
import blog7 from "../assets/img/blog7.jpg";

function Blog() {
  return (
    <>
      <Navbar />

      <section className="Blog">
        {/* HERO */}
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content text-center">
              <h1>Our Blog</h1>

              <p>
                Explore latest technology trends, development insights, and
                digital solutions from Essence Web Technology.
              </p>
            </div>
          </div>
        </section>

        {/* Feature */}
        <section className="featured-section">
          <div className="container">
            <div className="row align-items-center">
              {/* <div className="col-lg-6"> */}
              <div className="col-md-6">
                <img
                  src={blog1}
                  alt="Featured Blog"
                  className="featured-image"
                />
              </div>

              {/* <div className="col-lg-6"> */}
              <div className="col-md-6">
                <div className="featured-content">
                  <span>Featured Article</span>
                  <h2>The Future of Web Development in 2026</h2>

                  <p className="date">July 20, 2026 | Essence Team</p>

                  <p>
                    Discover how Artificial Intelligence, modern web frameworks,
                    cloud computing, and advanced technologies are transforming
                    the future of web development. From creating smarter user
                    experiences to improving website performance, security, and
                    scalability, businesses are adopting innovative solutions to
                    stay competitive in the digital world. Explore the latest
                    trends, tools, and technologies that are shaping the next
                    generation of websites and web applications.
                  </p>

                  <Link to="/future-web-development" className="blog-button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Blog */}
        <section className="latest-section">
          <div className="container">
            <div className="latest-heading text-center">
              <h2>Latest Articles</h2>

              <p>Read our latest technology blogs and updates.</p>
            </div>

            <div className="row g-4">
              {/* CARD 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="blog-card">
                  <img src={blog2} alt="" />

                  <div className="card-body">
                    <small>Web Development</small>

                    <h3>Top Web Development Trends</h3>

                    <p>
                      Learn about modern technologies that are shaping websites.
                    </p>

                    <Link to="/webdevtrends" className="read-link">
                      Read More
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="blog-card">
                  <img src={blog3} alt="" />

                  <div className="card-body">
                    <small>React</small>

                    <h3>Why Choose React For Your Website?</h3>

                    <p>
                      Understand why React is popular for building fast apps.
                    </p>

                    <Link to="/react" className="read-link">
                      Read More
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-lg-4 col-md-6">
                <div className="blog-card">
                  <img src={blog4} alt="" />

                  <div className="card-body">
                    <small>SEO</small>

                    <h3>SEO Strategies For Business Growth</h3>

                    <p>Improve website ranking with effective SEO practices.</p>

                    <Link to="/seo" className="read-link">
                      Read More
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="col-lg-4 col-md-6">
                <div className="blog-card">
                  <img src={blog5} alt="" />

                  <div className="card-body">
                    <small>UI/UX Design</small>

                    <h3>Creating Better User Experiences</h3>

                    <p>Learn modern design techniques for better interfaces.</p>

                    <Link to="/ui-ux" className="read-link">
                      Read More
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="col-lg-4 col-md-6">
                <div className="blog-card">
                  <img src={blog6} alt="" />

                  <div className="card-body">
                    <small>Mobile App</small>

                    <h3>Mobile App Development Trends</h3>

                    <p>Explore the latest mobile development technologies.</p>

                    <Link to="/mobile-app" className="read-link">
                      Read More
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="col-lg-4 col-md-6">
                <div className="blog-card">
                  <img src={blog7} alt="" />

                  <div className="card-body">
                    <small>Artificial Intelligence</small>

                    <h3>AI Solutions For Businesses</h3>

                    <p>Discover how AI helps businesses automate processes.</p>

                    <Link to="/ai" className="read-link">
                      Read More
                      <i className="fa-solid fa-arrow-right service-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-box text-center">
              <h2>Subscribe To Our Newsletter</h2>

              <p>Get latest technology updates directly in your inbox.</p>

              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />

                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
