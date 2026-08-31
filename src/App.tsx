import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { MaterialsPage } from '@/pages/MaterialsPage';
import { HowWeWorkPage } from '@/pages/HowWeWorkPage';
import { QuotePage } from '@/pages/QuotePage';
import { ContactPage } from '@/pages/ContactPage';
import { TestimonialsPage } from '@/pages/TestimonialsPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogDetailPage } from '@/pages/BlogDetailPage';
import { FAQPage } from '@/pages/FAQPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/materials" element={<MaterialsPage />} />
              <Route path="/how-we-work" element={<HowWeWorkPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
