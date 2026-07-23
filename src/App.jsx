import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import WebDevelopment from "./pages/WebDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import EmailSupport from "./pages/EmailSupport";
import Career from "./pages/Career";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FloatingButtons from "./components/FloatingButtons";
import WebDevTrends_article from "./pages/WebDevTrends_article";
import React_article from "./pages/React_article";
import SEO_article from "./pages/SEO_article";
import UI_UX_article from "./pages/UI_UX_article";
import MobileApp_article from "./pages/MobileApp_article";
import AI_article from "./pages/AI_article";
import FutureWebDevelopment_article from "./pages/FutureWebDevelopment_article";
import PerformanceMarketing from "./pages/PerformanceMarketing";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<MobileDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/email-support" element={<EmailSupport />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/webdevtrends" element={<WebDevTrends_article />} />
        <Route path="/react" element={<React_article />} />
        <Route path="/seo" element={<SEO_article />} />
        <Route path="/ui-ux" element={<UI_UX_article />} />
        <Route path="/mobile-app" element={<MobileApp_article />} />
        <Route path="/ai" element={<AI_article />} />
        <Route
          path="/future-web-development"
          element={<FutureWebDevelopment_article />}
        />
        <Route
          path="/performancemarketing"
          element={<PerformanceMarketing />}
        />
      </Routes>
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
