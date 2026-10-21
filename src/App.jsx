import { Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Dock from './components/Dock'
import CursorSystem from './components/CursorSystem'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import {
  About,
  Pricing,
  Contact,
  FaqHub,
  BlogHub,
  GlossaryHub,
  Privacy,
  Terms,
  NotFound,
} from './pages/SimplePage'
import { getService } from './data/services'
import { pageVariants } from './motion'
import './styles.css'
import './motion-extras.css'

function Page({ children }) {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.main>
  )
}

function ServiceRoute() {
  const { slug } = useParams()
  const clean = (slug || '').replace(/\/$/, '')
  if (!getService(clean)) return <Navigate to="/" replace />
  return (
    <Page>
      <ServicePage slug={clean} />
    </Page>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <CursorSystem />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Page>
                <Home />
              </Page>
            }
          />
          <Route
            path="/about"
            element={
              <Page>
                <About />
              </Page>
            }
          />
          <Route path="/about/" element={<Navigate to="/about" replace />} />
          <Route
            path="/pricing"
            element={
              <Page>
                <Pricing />
              </Page>
            }
          />
          <Route path="/pricing/" element={<Navigate to="/pricing" replace />} />
          <Route
            path="/contact"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
          <Route path="/contact/" element={<Navigate to="/contact" replace />} />
          <Route
            path="/faq"
            element={
              <Page>
                <FaqHub />
              </Page>
            }
          />
          <Route path="/faq/" element={<Navigate to="/faq" replace />} />
          <Route
            path="/blog"
            element={
              <Page>
                <BlogHub />
              </Page>
            }
          />
          <Route path="/blog/" element={<Navigate to="/blog" replace />} />
          <Route
            path="/glossary"
            element={
              <Page>
                <GlossaryHub />
              </Page>
            }
          />
          <Route path="/glossary/" element={<Navigate to="/glossary" replace />} />
          <Route
            path="/privacy"
            element={
              <Page>
                <Privacy />
              </Page>
            }
          />
          <Route path="/privacy/" element={<Navigate to="/privacy" replace />} />
          <Route
            path="/terms"
            element={
              <Page>
                <Terms />
              </Page>
            }
          />
          <Route path="/terms/" element={<Navigate to="/terms" replace />} />
          <Route path="/services/:slug" element={<ServiceRoute />} />
          <Route path="/services/:slug/" element={<ServiceRoute />} />
          <Route
            path="*"
            element={
              <Page>
                <NotFound />
              </Page>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Dock />
    </>
  )
}
