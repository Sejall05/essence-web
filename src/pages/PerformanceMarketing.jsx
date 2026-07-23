import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/css/performanceMarketing.css";
import performanceMarketing from "../assets/img/performance-marketing.jpg";

function PerformanceMarketing() {
  return (
    <>
      <Navbar />
      <section className="PerformanceMarketing">
        {/* HERO SECTION */}
        <section className="pm-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="pm-hero-content">
                  <span className="pm-tag">PERFORMANCE MARKETING</span>

                  <h1>
                    Marketing That Delivers
                    <span> Measurable Results</span>
                  </h1>

                  <p>
                    We create data-driven performance marketing campaigns that
                    help businesses attract the right audience, generate quality
                    leads, increase conversions, and achieve sustainable growth.
                  </p>

                  <Link to="/contact-us" className="get-start-btn">
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="pm-hero-image">
                  <img src={performanceMarketing} alt="Performance Marketing" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="pm-intro section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="pm-section-content">
                  <span className="pm-small-title">
                    PERFORMANCE-DRIVEN GROWTH
                  </span>

                  <h2>
                    Turn Your Marketing
                    <span> Into Real Business Results</span>
                  </h2>

                  <p>
                    Performance marketing is all about achieving measurable
                    results. Instead of simply increasing visibility, we focus
                    on driving meaningful actions such as leads, sales,
                    registrations, and conversions.
                  </p>

                  <p>
                    Our team combines audience research, creative campaigns,
                    analytics, and continuous optimization to make every
                    marketing investment count.
                  </p>

                  <Link to="/contact-us" className="pm-outline-btn">
                    Let's Grow Together
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="pm-result-box">
                  <div className="result-item">
                    <h3>01</h3>
                    <div>
                      <h4>Targeted Reach</h4>
                      <p>
                        Connect your business with the right audience at the
                        right time.
                      </p>
                    </div>
                  </div>

                  <div className="result-item">
                    <h3>02</h3>
                    <div>
                      <h4>Better Conversions</h4>
                      <p>
                        Turn visitors and prospects into valuable customers.
                      </p>
                    </div>
                  </div>

                  <div className="result-item">
                    <h3>03</h3>
                    <div>
                      <h4>Measurable ROI</h4>
                      <p>
                        Track your campaigns and understand exactly where your
                        budget is going.
                      </p>
                    </div>
                  </div>

                  <div className="result-item">
                    <h3>04</h3>
                    <div>
                      <h4>Continuous Growth</h4>
                      <p>
                        Optimize campaigns continuously to improve performance
                        over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="pm-services section-padding">
          <div className="container">
            <div className="pm-heading text-center">
              <span className="pm-small-title">WHAT WE DO</span>

              <h2>
                Our Performance Marketing
                <span> Services</span>
              </h2>

              <p>
                From campaign strategy to conversion optimization, we provide
                complete performance marketing solutions designed around your
                business goals.
              </p>
            </div>

            <div className="row g-4 mt-4">
              {/* Service 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="pm-service-card">
                  <div className="pm-icon">01</div>

                  <h3>Google Ads & PPC</h3>

                  <p>
                    Reach high-intent customers with carefully optimized
                    pay-per-click campaigns designed to drive qualified traffic
                    and conversions.
                  </p>

                  <ul>
                    <li>Search Campaigns</li>
                    <li>Display Advertising</li>
                    <li>Shopping Campaigns</li>
                    <li>Campaign Optimization</li>
                  </ul>
                </div>
              </div>

              {/* Service 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="pm-service-card">
                  <div className="pm-icon">02</div>

                  <h3>Social Media Advertising</h3>

                  <p>
                    Build targeted advertising campaigns across social platforms
                    to increase awareness, engagement, leads, and sales.
                  </p>

                  <ul>
                    <li>Meta Ads</li>
                    <li>Instagram Advertising</li>
                    <li>Audience Targeting</li>
                    <li>Retargeting Campaigns</li>
                  </ul>
                </div>
              </div>

              {/* Service 3 */}
              <div className="col-lg-4 col-md-6">
                <div className="pm-service-card">
                  <div className="pm-icon">03</div>

                  <h3>Lead Generation</h3>

                  <p>
                    Generate high-quality leads through strategic campaigns
                    designed to attract potential customers and grow your
                    business pipeline.
                  </p>

                  <ul>
                    <li>Lead Campaigns</li>
                    <li>Landing Pages</li>
                    <li>Lead Funnels</li>
                    <li>Conversion Tracking</li>
                  </ul>
                </div>
              </div>

              {/* Service 4 */}
              <div className="col-lg-4 col-md-6">
                <div className="pm-service-card">
                  <div className="pm-icon">04</div>

                  <h3>Search Engine Marketing</h3>

                  <p>
                    Increase your visibility on search engines and connect with
                    customers actively searching for your products or services.
                  </p>

                  <ul>
                    <li>Keyword Research</li>
                    <li>Search Campaigns</li>
                    <li>Ad Copy Optimization</li>
                    <li>Performance Tracking</li>
                  </ul>
                </div>
              </div>

              {/* Service 5 */}
              <div className="col-lg-4 col-md-6">
                <div className="pm-service-card">
                  <div className="pm-icon">05</div>

                  <h3>Conversion Rate Optimization</h3>

                  <p>
                    Improve your website and landing pages to turn more visitors
                    into leads, customers, and valuable business opportunities.
                  </p>

                  <ul>
                    <li>Landing Page Optimization</li>
                    <li>User Experience Analysis</li>
                    <li>A/B Testing</li>
                    <li>Conversion Tracking</li>
                  </ul>
                </div>
              </div>

              {/* Service 6 */}
              <div className="col-lg-4 col-md-6">
                <div className="pm-service-card">
                  <div className="pm-icon">06</div>

                  <h3>Analytics & Reporting</h3>

                  <p>
                    Get clear insights into your marketing performance with
                    detailed analytics, campaign tracking, and actionable
                    reports.
                  </p>

                  <ul>
                    <li>Campaign Analytics</li>
                    <li>Conversion Tracking</li>
                    <li>Performance Reports</li>
                    <li>Data-Driven Insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="pm-why section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="pm-why-heading">
                  <span className="pm-small-title">WHY CHOOSE US</span>

                  <h2>
                    We Focus On
                    <span> What Matters</span>
                  </h2>

                  <p>
                    Our performance marketing strategies are built around your
                    business objectives. We continuously analyze data and
                    optimize campaigns to help you achieve better results.
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="pm-benefit">
                      <span>01</span>
                      <h3>Data-Driven Strategy</h3>
                      <p>
                        Every campaign is supported by research, analytics, and
                        real-time performance data.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="pm-benefit">
                      <span>02</span>
                      <h3>Targeted Campaigns</h3>
                      <p>
                        Reach the people who are most likely to engage with your
                        brand and become customers.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="pm-benefit">
                      <span>03</span>
                      <h3>Continuous Optimization</h3>
                      <p>
                        We monitor campaign performance and make improvements to
                        maximize your marketing results.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="pm-benefit">
                      <span>04</span>
                      <h3>Transparent Reporting</h3>
                      <p>
                        Get clear reports and insights so you always understand
                        how your campaigns are performing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKING PROCESS */}
        <section className="pm-process section-padding">
          <div className="container">
            <div className="pm-heading text-center">
              <span className="pm-small-title">OUR PROCESS</span>

              <h2>
                How We Drive
                <span> Performance</span>
              </h2>

              <p>
                A strategic and transparent process designed to continuously
                improve your marketing performance.
              </p>
            </div>

            <div className="row g-4 mt-4">
              <div className="col-lg-3 col-md-6">
                <div className="pm-process-card">
                  <span>01</span>
                  <h3>Research</h3>
                  <p>
                    We understand your business, audience, competitors, and
                    marketing goals.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="pm-process-card">
                  <span>02</span>
                  <h3>Strategy</h3>
                  <p>
                    We create a customized campaign strategy based on your
                    objectives and target audience.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="pm-process-card">
                  <span>03</span>
                  <h3>Launch</h3>
                  <p>
                    We launch targeted campaigns and track important performance
                    metrics from day one.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="pm-process-card">
                  <span>04</span>
                  <h3>Optimize</h3>
                  <p>
                    We analyze results and continuously optimize campaigns for
                    better performance and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="pm-cta">
          <div className="container">
            <div className="pm-cta-content text-center">
              <span className="pm-small-title">READY TO GROW?</span>

              <h2>
                Let's Turn Your Marketing
                <span> Into Measurable Growth</span>
              </h2>

              <p>
                Build smarter campaigns, reach the right audience, and grow your
                business with a performance-driven marketing strategy.
              </p>

              <Link to="/contact-us" className="get-quote-btn">
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default PerformanceMarketing;
