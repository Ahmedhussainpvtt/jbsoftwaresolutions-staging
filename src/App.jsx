import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Dock from './components/Dock'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import {
  About,
  Pricing,
  Contact,
  ServicePage,
  FaqHub,
  BlogHub,
  GlossaryHub,
  Privacy,
  Terms,
  NotFound,
} from './pages/SimplePage'
import { SERVICES } from './data/site'
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

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <div className="staging-banner">Staging · React + Framer Motion · not production</div>
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
            path="/about/"
            element={
              <Page>
                <About />
              </Page>
            }
          />
          <Route
            path="/pricing/"
            element={
              <Page>
                <Pricing />
              </Page>
            }
          />
          <Route
            path="/contact/"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
          <Route
            path="/faq/"
            element={
              <Page>
                <FaqHub />
              </Page>
            }
          />
          <Route
            path="/blog/"
            element={
              <Page>
                <BlogHub />
              </Page>
            }
          />
          <Route
            path="/glossary/"
            element={
              <Page>
                <GlossaryHub />
              </Page>
            }
          />
          <Route
            path="/privacy/"
            element={
              <Page>
                <Privacy />
              </Page>
            }
          />
          <Route
            path="/terms/"
            element={
              <Page>
                <Terms />
              </Page>
            }
          />
          {SERVICES.map((s) => (
            <Route
              key={s.slug}
              path={`/services/${s.slug}/`}
              element={
                <Page>
                  <ServicePage slug={s.slug} />
                </Page>
              }
            />
          ))}
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
