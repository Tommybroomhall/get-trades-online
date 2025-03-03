import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import GetOnlinePage from './pages/GetOnlinePage';
import WebsiteQuestionnairePage from './pages/WebsiteQuestionnairePage';
import ThankYouPage from './pages/ThankYouPage';
import ScrollToTop from './components/ScrollToTop';
import PricesPage from './pages/PricesPage';
import BlogPage from './pages/blog/BlogPage';
import BlogPostPage from './pages/blog/BlogPostPage';

const App = () => {
  const location = useLocation();
  const isQuestionnairePage = location.pathname === '/get-started';
  
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isQuestionnairePage && <Navbar />}
      <main className={`flex-grow ${isQuestionnairePage ? 'bg-gray-50' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-online" element={<GetOnlinePage />} />
          <Route path="/get-started" element={<WebsiteQuestionnairePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      {!isQuestionnairePage && <Footer />}
    </div>
  );
};

export default App;