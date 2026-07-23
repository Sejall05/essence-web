import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "../assets/css/quote.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Quote() {
  return (
    <>
      <Navbar />
      <section className="QUOTE">
        <section className="quote">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-form-box p-4">
                  <h2 className="quote-heading mb-3">Post a Project</h2>
                  <h5 className="quote-text mb-4">
                    Please fill in the form below. Our expert will contact you
                    soon.
                  </h5>

                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control custom-input"
                          placeholder="Enter email"
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">WhatsApp Number</label>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter WhatsApp number"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <select className="custom-select" defaultValue="">
                          <option value="" disabled>
                            Budget Estimation
                          </option>
                          <option>Below 20000/-</option>
                          <option>20000 to 100000/-</option>
                          <option>100000 to 500000/-</option>
                          <option>Above 500000/-</option>
                          <option>Not Sure</option>
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <select className="custom-select" defaultValue="">
                          <option value="" disabled>
                            Interested In
                          </option>
                          <option>Web Development</option>
                          <option>App Development</option>
                          <option>Digital Marketing</option>
                          <option>Email Support</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control custom-textarea"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="captcha-container">
                      <ReCAPTCHA sitekey="6LdoLlgtAAAAAFdVvtWQXAjuhhR_XA7FscCTuSFb" />
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the{" "}
                        <a href="/" className="text-info">
                          Terms & Conditions
                        </a>{" "}
                        of Essence Web Technology.
                      </label>
                    </div>

                    <button className="send-btn">SEND YOUR INQUIRY</button>
                  </form>

                  <p className="privacy-text mt-3">
                    <i class="fa-solid fa-shield-halved"></i> We hate spam, and
                    we respect your privacy.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 d-flex align-items-start">
                <div className="contact-info mx-auto">
                  <div className="mb-5">
                    <h2>Get in Touch</h2>

                    <p>
                      <i className="fas fa-phone mr-3"></i>
                      <a href="tel:+919891605101">+91-9891605101</a>
                    </p>

                    <p>
                      <i className="fas fa-envelope mr-3"></i>
                      <a href="mailto:info@essencewebtech.in">
                        info@essencewebtech.in
                      </a>
                    </p>
                  </div>

                  <div className="mb-5">
                    <h2>Come Meet Us</h2>

                    <p>
                      <i class="fa-solid fa-location-dot"></i> 537-38, B Tower,
                      Spaze iTech Park,
                      <br />
                      Sohna Road, Sector 49,
                      <br />
                      Gurgaon (HR), India
                    </p>
                  </div>

                  <div>
                    <h2>Follow Us</h2>

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
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Quote;
