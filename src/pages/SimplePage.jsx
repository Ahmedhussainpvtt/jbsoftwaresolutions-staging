import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { EMAIL, PRICES, SERVICES, HOME_FAQS } from '../data/site'
import { stagger, scaleIn } from '../motion'

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal className="section-kicker">About</Reveal>
          <Reveal as="h1">A small agency that fights for your outcome</Reveal>
          <Reveal as="p">
            We are a tight team that works hard, stays close to the people who hire us, and loves
            seeing customers win.
          </Reveal>
          <div className="hero-cta" style={{ marginTop: '1.75rem' }}>
            <MagneticButton to="/contact/" className="btn btn-primary">
              Work with us
            </MagneticButton>
            <MagneticButton to="/pricing/" className="btn btn-ghost">
              See pricing
            </MagneticButton>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <Reveal as="h2">We are small on purpose</Reveal>
          <Reveal as="p">
            When you message us, the people building your product are in the loop. Clear
            communication, honest scope, and zero ego when feedback arrives.
          </Reveal>
          <Reveal as="h2">How we work</Reveal>
          <ul>
            <li>Ship systems, not slide decks</li>
            <li>Measure outcomes: leads, retention, citations</li>
            <li>Keep IP with the client</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal className="section-kicker">Pricing</Reveal>
          <Reveal as="h1">Starting costs you can plan around</Reveal>
          <Reveal as="p">Exact quotes depend on scope. These floors help serious buyers budget.</Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div
            className="price-grid"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {PRICES.map((p) => (
              <motion.article
                key={p.title}
                className={`price-card${p.featured ? ' is-featured' : ''}`}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <h3>{p.title}</h3>
                <div className="from">{p.from}</div>
                <p>{p.text}</p>
              </motion.article>
            ))}
          </motion.div>
          <p style={{ marginTop: '1.5rem' }}>
            <MagneticButton to="/contact/" className="btn btn-primary">
              Request a fixed quote
            </MagneticButton>
          </p>
        </div>
      </section>
    </>
  )
}

export function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal className="section-kicker">Contact</Reveal>
          <Reveal as="h1">Get a scoped quote</Reveal>
          <Reveal as="p">
            Send a short brief. We reply within 24 hours on business days. No spam.
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <Reveal className="form" as="div">
            <form
              className="form"
              action={`https://formsubmit.co/${EMAIL}`}
              method="POST"
            >
              <input type="hidden" name="_next" value="https://jbsoftwaresolutions.com/thank-you/" />
              <input type="hidden" name="_subject" value="New lead - JB Software Solutions" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <label>
                Name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" required placeholder="you@company.com" />
              </label>
              <label>
                Company / project name
                <input name="company" placeholder="Optional" />
              </label>
              <label>
                Service
                <select name="service">
                  <option>Web development</option>
                  <option>Mobile app</option>
                  <option>Custom software</option>
                  <option>SEO / AEO / GEO</option>
                  <option>Workflow / business automation</option>
                  <option>Desktop app</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                Budget range
                <select name="budget">
                  <option>Under ₹1 lakh</option>
                  <option>₹1-5 lakh</option>
                  <option>₹5-15 lakh</option>
                  <option>₹15 lakh+</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                Project details
                <textarea name="message" required placeholder="Goals, timeline, links, must-haves" />
              </label>
              <p className="form-legal">
                By sending this form you agree to our <Link to="/privacy/">privacy policy</Link> and{' '}
                <Link to="/terms/">terms</Link>.
              </p>
              <MagneticButton type="submit" className="btn btn-primary">
                Get my quote
              </MagneticButton>
            </form>
          </Reveal>
          <div className="prose">
            <Reveal as="h2">How we reply</Reveal>
            <Reveal as="p">
              This form emails the JB team directly. Prefer email? Write{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export function ServicePage({ slug }) {
  const s = SERVICES.find((x) => x.slug === slug) || SERVICES[0]
  return (
    <>
      <section className="page-hero service-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <Reveal className="section-kicker">Services</Reveal>
            <Reveal as="h1">{s.title}</Reveal>
            <Reveal as="p">{s.desc}</Reveal>
            <div className="hero-cta" style={{ marginTop: '1.75rem' }}>
              <MagneticButton to="/contact/" className="btn btn-primary">
                Start a brief
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <motion.div
            className="cta-band"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2>Ready to talk about {s.title.toLowerCase()}?</h2>
              <p>Share goals and constraints. We come back with a clear plan.</p>
            </div>
            <MagneticButton to="/contact/" className="btn btn-primary">
              Contact JB Software Solutions
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export function FaqHub() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal className="section-kicker">Resources</Reveal>
          <Reveal as="h1">FAQs</Reveal>
          <Reveal as="p">Straight answers about software, apps, SEO and pricing.</Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="faq">
            {HOME_FAQS.map((f) => (
              <Reveal key={f.q} as="details">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function BlogHub() {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal className="section-kicker">Resources</Reveal>
        <Reveal as="h1">Blog</Reveal>
        <Reveal as="p">Guides are on the production site. This staging build focuses on motion and shell pages.</Reveal>
        <MagneticButton to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back home
        </MagneticButton>
      </div>
    </section>
  )
}

export function GlossaryHub() {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal className="section-kicker">Resources</Reveal>
        <Reveal as="h1">Glossary</Reveal>
        <Reveal as="p">Full glossary lives on production. Staging showcases the React + Framer Motion shell.</Reveal>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <section className="page-hero">
      <div className="container prose">
        <Reveal className="section-kicker">Legal</Reveal>
        <Reveal as="h1">Privacy policy</Reveal>
        <Reveal as="p">
          Full privacy policy is published on the production site at jbsoftwaresolutions.com/privacy/.
          This staging build keeps the same chrome and motion system.
        </Reveal>
      </div>
    </section>
  )
}

export function Terms() {
  return (
    <section className="page-hero">
      <div className="container prose">
        <Reveal className="section-kicker">Legal</Reveal>
        <Reveal as="h1">Terms and conditions</Reveal>
        <Reveal as="p">
          Full terms are on the production site. Staging is for design and animation review only.
        </Reveal>
      </div>
    </section>
  )
}

export function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal className="section-kicker">Error</Reveal>
        <Reveal as="h1">Page not found</Reveal>
        <MagneticButton to="/" className="btn btn-primary">
          Go home
        </MagneticButton>
      </div>
    </section>
  )
}
