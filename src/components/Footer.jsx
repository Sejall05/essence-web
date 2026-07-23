import { Link } from "react-router-dom";
import "../assets/css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-5 footer-column">
            <h5>Essence Web Technology</h5>
            <div className="footer-line"></div>

            <p>
              We are Gurgaon base web designing company working with php, html,
              mysql, java, asp.net etc. we use many platform to develop websites
              like wordpress, joomla, magento, opencart. We develop customized
              web design according to customer need. We also promote business
              with search engine optimisation process.
            </p>

            <Link to="/about" className="footer-link">
              Read More
              <i className="fa-solid fa-arrow-right service-arrow"></i>
            </Link>
          </div>

          <div className="col-6 col-md-2 col-lg-2 footer-column">
            <h5>Services</h5>
            <div className="footer-line"></div>

            <Link to="/web-development">Web Development</Link>
            <Link to="/app-development">App Development</Link>
            <Link to="/digital-marketing">Digital Marketing</Link>
            <Link to="/email-support">Email Support</Link>
          </div>

          <div className="col-6 col-md-2 col-lg-2 footer-column">
            <h5>Useful Links</h5>
            <div className="footer-line"></div>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/blog">Blog</Link>
            
          </div>

          <div className="col-12 col-md-4 col-lg-3 footer-column">
            <h5>Contact</h5>
            <div className="footer-line"></div>

            <p>
              <i className="fas fa-home me-2"></i> Unit 537-38, Tower B3, Spaze
              iTech Park, Sohna Road, Sector 49, Gurgaon-122018 (HR) INDIA
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@essencewebtech.in
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> +91-9891605101
            </p>

            <div className="social-icons">
              <a href="https://www.facebook.com/EssenceWebTechnology/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/essencewebtech">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/essence_web_technology">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://in.linkedin.com/in/essence-web-technology-59052377">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2011 Copyright : Essence Web Technology
      </div>
    </footer>
  );
}

export default Footer;
