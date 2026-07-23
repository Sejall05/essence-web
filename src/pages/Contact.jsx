import { Link } from "react-router-dom";
import "../assets/css/contact.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="Contact">
        <section className="contact-section">
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <h5 className="section-Heading">Contact us</h5>
                <h2 className="section-title mb-4">
                  Let's Talk About Your Project
                </h2>

                <form>
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control custom-textarea"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <button className="send-btn">Send Message</button>
                </form>
              </div>

              <div className="col-lg-6">
                <div className="map-container">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112253.64088015824!2d76.9541134017701!3d28.451638666088886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2356ac6e80c7%3A0xf5975d25010cd216!2sEssence%20Web%20Technology!5e0!3m2!1sen!2sin!4v1720766143764!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="CONTACT_BOX">
          <div className="Container">
            <div className="contact-info-heading">
              <h5>Our friendly team is always here to chat</h5>
              <h2>We are eager to hear from you</h2>
            </div>

            <div className="CARD row g-4">
              <div className="col-lg-4">
                <div className="info-card h-100">
                  <i className="fa-regular fa-comment-dots"></i>

                  <h4>Chat to Support</h4>

                  <p>We're here to help</p>

                  <span>
                    +91-9891605101 <br />
                    info@essencewebtech.in
                  </span>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="info-card h-100">
                  <i className="fa-solid fa-location-dot"></i>

                  <h4>Head Office</h4>

                  <span>
                    537-38, B Tower, Spaze iTech Park,
                    <br />
                    Sohna Road, Sector 49,
                    <br />
                    Gurgaon (HR), India
                  </span>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="info-card h-100">
                  <i className="fa-solid fa-location-dot"></i>

                  <h4>Regd. Office</h4>

                  <span>
                    182, Atul Katariya Chowk,
                    <br />
                    Gurgaon (HR), India
                  </span>
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

export default Contact;
