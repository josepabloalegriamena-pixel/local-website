const { useEffect, useMemo, useState } = React;

const routes = [
  { path: '/', label: 'Home' },
  { path: '/approach', label: 'Our Approach' },
  { path: '/owners', label: 'For Business Owners' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Contact' },
];

const legalNavLinks = [
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms' },
];

const knownPaths = [...routes, ...legalNavLinks].map((item) => item.path);

const ownerReasons = [
  { title: 'Succession', desc: 'A structured path when ownership transition needs clarity.' },
  { title: 'Partial Liquidity', desc: 'Flexibility for owners seeking liquidity without abrupt disruption.' },
  { title: 'Growth Partner', desc: 'Operational support to scale with stronger systems and cadence.' },
  { title: 'Institutionalization', desc: 'Governance and reporting that strengthen long-term resilience.' },
];

const processSteps = [
  {
    title: 'Financial Stewardship',
    desc: 'Capital is the lifeblood, discipline is the pulse. Vision and action beyond balance sheet optimization to ensure resilient capital structures that can fuel growth whilst withstanding volatility.',
    note: 'Bulletproof solvency, optimized liquidity.',
  },
  {
    title: 'Operational Command',
    desc: 'Efficiency as a habit, not an act. LOAL is embedded within the real economy workflows of our companies: margin expansion from the inside out through lean methodologies and modern systems.',
    note: 'Institutional-grade performance and scalable systems across the board.',
  },
  {
    title: 'Strategic Foresight',
    desc: 'Without direction, execution is wasted energy. Be it through accretive M&A, geographic expansion or digital transformation, our North Star is not surviving the industry, it is to set the standard.',
    note: 'Long term, compounding value.',
  },
];
const ringLabels = ['F', 'O', 'S'];

const approachThemes = ['Financial transparency', 'Governance discipline', 'Execution cadence', 'Growth initiatives', 'Clear KPIs', 'Management alignment'];

const faqs = [
  { q: 'How confidential is the first conversation?', a: 'Initial conversations are private and focused on high-level fit.' },
  { q: 'How long does a process usually take?', a: 'Timelines vary, but we keep communication direct from first call through closing.' },
  { q: 'Do owners stay involved after a transaction?', a: 'We are prepared and flexible to work apropos of the needs and circumstances of each founding team.' },
];

function hashPath() {
  const raw = window.location.hash.replace(/^#/, '');
  return raw || '/';
}

function navigate(path) {
  window.location.hash = path;
}

function LoalLogo() {
  return (
    <svg className="loal-logo" viewBox="0 0 320 190" role="img" aria-label="Loal Capital">
      <g transform="translate(102,6)">
        <polygon points="0,18 38,18 38,82 0,110" fill="#143A67" />
        <polygon points="52,28 107,0 107,32 52,68" fill="#B89A58" />
        <polygon points="27,110 115,56 115,110" fill="#143A67" />
      </g>
      <text x="160" y="152" textAnchor="middle" fill="#143A67" fontSize="38" letterSpacing="11" fontWeight="700">LOAL</text>
      <text x="160" y="178" textAnchor="middle" fill="#6B7280" fontSize="16" letterSpacing="9" fontWeight="600">CAPITAL</text>
    </svg>
  );
}

function Section({ eyebrow, title, subtitle, children, tone = 'default', asH1 = false }) {
  const HeadingTag = asH1 ? 'h1' : 'h2';
  return (
    <section className={`section section-${tone} ${asH1 ? 'section-hero-heading' : ''}`}>
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <HeadingTag>{title}</HeadingTag>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

function CardGrid({ items }) {
  return <div className="card-grid">{items.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div>;
}

function Shell({ path, children }) {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => navigate('/')} aria-label="Go to Home"><LoalLogo /></button>
          <nav className="main-nav" aria-label="Main navigation">
            {routes.map((r) => <button key={r.path} className={`nav-link ${path === r.path ? 'active' : ''}`} onClick={() => navigate(r.path)}>{r.label}</button>)}
          </nav>
          <div className="header-cta">
            <button className="btn btn-primary" onClick={() => navigate('/owners')}>For Business Owners</button>
            <button className="btn btn-secondary" onClick={() => navigate('/contact')}>Contact</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <p className="footer-note">Loal Capital is currently in the process of formal legal structuring.</p>
          <div className="footer-links">
            {legalNavLinks.map((item) => <a key={item.path} href={`#${item.path}`}>{item.label}</a>)}
            <a href="mailto:contact@loalcapital.com">contact@loalcapital.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero"><div className="container hero-grid"><div><h1>Building lasting value in established businesses.</h1><p className="section-subtitle">Designing, producing and sustaining value in foundational industries through operational, financial and strategic rigor.</p><div className="hero-cta"><button className="btn btn-primary" onClick={() => navigate('/owners')}>Start a Confidential Conversation</button><button className="btn btn-secondary" onClick={() => navigate('/approach')}>Our Approach</button></div></div></div></section>
      <Section title="What We Do" subtitle="LOAL aims to deliver value and combined success to all whom we serve."><CardGrid items={[{ title: 'Acquire', desc: 'Target majority or full ownership with alignment from day one.' }, { title: 'Improve', desc: 'Drive measurable gains in operations, reporting, and governance.' }, { title: 'Build', desc: 'Institutionalize capabilities that support long-term continuity.' }]} /></Section>
      <Section title="Differentiators"><CardGrid items={[{ title: 'Local Intimacy, Global Rigor', desc: 'Boots-on-the-ground cultural and regulatory knowledge of the Guatemalan market, paired with the precision and rigor of global firms.' }, { title: 'Operational Hand-in-Glove', desc: 'Not passive investing: our operating partners are deeply embedded: not just balance sheets, but blueprints for value.' }, { title: 'Execution Velocity and Agility', desc: 'Our architecture eliminates friction. We are built for movement from discovery to closing with unmatched speed, enabling access to more market windows and deep value creation on a daily - not quarterly - cadence.' }]} /></Section>
      <Section tone="accent">
        <div className="audience-grid">
          <article className="audience-card">
            <h3>For Business Owners</h3>
            <p>Confidential conversations for founders evaluating growth, transition, or strategic options.</p>
            <button className="btn btn-primary" onClick={() => navigate('/owners')}>For Business Owners</button>
          </article>
          <article className="audience-card">
            <h3>Investors</h3>
            <p>LOAL is not currently fundraising, but certain investors can be accommodated. Reach out.</p>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>Investor Contact</button>
          </article>
        </div>
      </Section>
    </>
  );
}

function ApproachPage() {
  return (
    <>
      <Section
        eyebrow="Our Approach"
        title="Growth is not a series of isolated tasks"
        subtitle="Our thesis is an image of the Borromean knot -- Three distinct disciplines so thoroughly interlaced the collapse of one would collapse the whole."
        asH1
      >
        <p className="approach-italic-note"><em>This interdependence is not a weakness but our hallmark.</em></p>
        <figure className="approach-diagram" aria-label="Borromean knot style diagram" style={{ width: '400px', marginTop: '3.5rem' }}>
          <svg viewBox="0 0 360 320" role="img" aria-label="F, S, O diagram with a in the center" style={{ width: '400px', height: 'auto' }}>
            <circle cx="180" cy="82" r="82" fill="none" stroke="#111111" strokeWidth="1.35" vectorEffect="non-scaling-stroke" />
            <circle cx="112" cy="178" r="82" fill="none" stroke="#111111" strokeWidth="1.35" vectorEffect="non-scaling-stroke" />
            <circle cx="248" cy="178" r="82" fill="none" stroke="#111111" strokeWidth="1.35" vectorEffect="non-scaling-stroke" />
            <text x="180" y="82" className="approach-diagram-label">F</text>
            <text x="112" y="178" className="approach-diagram-label">S</text>
            <text x="248" y="178" className="approach-diagram-label">O</text>
            <text x="180" y="152" className="approach-diagram-center">a</text>
          </svg>
        </figure>
      </Section>
      <Section title="The Three Rings"><ol className="steps">{processSteps.map((s, i) => <li key={s.title}><span className="step-index">{ringLabels[i]}</span><div><h3>{s.title}</h3><p>{s.desc}</p>{s.note && <p className="step-note"><em>{s.note}</em></p>}</div></li>)}</ol></Section>
      <Section title="Operating Themes" tone="tinted"><div className="tag-grid">{approachThemes.map((t) => <span key={t} className="tag">{t}</span>)}</div></Section>
      <Section title="How We Work with Management"><div className="split"><article className="panel"><h3>Respectful Partnership</h3><p>We collaborate with management teams through clear roles and direct communication.</p></article><article className="panel"><h3>Accountability and Metrics</h3><p>Structured KPIs and and reporting cycles to ensure outcomes long-term.</p></article></div></Section>
      <Section title="FAQ"><div className="faq">{faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></Section>
    </>
  );
}

function OwnersPage() {
  return (
    <>
      <Section eyebrow="For Business Owners" title="A founder-first, confidential process" subtitle="We approach each conversation with respect for continuity, culture, and long-term outcomes." asH1 />
      <Section title="Reasons Owners Talk to Us"><CardGrid items={ownerReasons} /></Section>
      <Section title="What to Expect" tone="tinted"><ol className="timeline"><li><strong>Initial conversation:</strong> confidential fit discussion.</li><li><strong>Evaluation:</strong> aligned diligence scope and data request.</li><li><strong>LOI:</strong> structured proposal with clear terms.</li><li><strong>Close & transition:</strong> planned handoff with continuity.</li></ol></Section>
      <Section title="Owner-Friendly Assurances"><ul className="bullet-list"><li>Fair process and direct communication.</li><li>Continuity planning for employees and customers.</li><li>Respect for company culture and operating identity.</li></ul></Section>
      <Section tone="accent" title="Start a Confidential Conversation"><button className="btn btn-primary" onClick={() => navigate('/contact')}>Go to Contact</button></Section>
    </>
  );
}

function TeamPage() {
  return (
    <>
      <Section eyebrow="Team" title="Principals" subtitle="Experienced operators and investors committed to disciplined execution." asH1 />
      <Section title="Guillermo López"><div className="profile-layout"><img className="founder-photo" src="./assets/guillermo-lopez.jpeg" alt="Guillermo López portrait" loading="lazy" /><div className="profile-copy"><p>Guillermo López focuses on transaction structuring, capital discipline, and strategic alignment.</p><ul className="bullet-list compact"><li>Transaction process and negotiation discipline.</li><li>Financial transparency and governance systems.</li><li>Long-term strategy tied to executable milestones.</li></ul></div></div></Section>
    </>
  );
}

function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Start a confidential conversation" subtitle="Share basic details and we will follow up directly." asH1>
      <div className="split">
        <form
          className="contact-form"
          action="https://formsubmit.co/jose@loalcapital.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New LOAL website contact submission" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
          <p className="form-note">Please do not submit sensitive personal, financial, or confidential information through this form.</p>
          <label>Name<input type="text" name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Company<input type="text" name="company" /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <label className="check"><input type="checkbox" name="consent" value="yes" required /><span>I agree to be contacted regarding this inquiry.</span></label>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        <aside className="panel">
          <h3>Direct Contact</h3>
          <p><a href="mailto:jose@loalcapital.com">jose@loalcapital.com</a></p>
          <p><a href="mailto:guillermolopez@loalcapital.com">guillermolopez@loalcapital.com</a></p>
          <p><a href="tel:+50255164041">+502 5516-4041</a></p>
          <p><a href="tel:+50242177038">+502 4217-7038</a></p>
          <p>Guatemala</p>
          <h3>Confidentiality</h3>
          <p>No sensitive information is required in the first message.</p>
        </aside>
      </div>
    </Section>
  );
}

function PrivacyPage() {
  return (
    <>
      <Section eyebrow="Privacy Policy" title="Privacy Policy" subtitle="This policy explains what information LOAL Capital collects through this website and how that information is used." asH1>
        <div className="legal-copy">
          <p><strong>Effective date:</strong> March 17, 2026</p>
          <h3>Information we collect</h3>
          <p>LOAL Capital collects the information you choose to submit through the contact form, including your name, email address, company name, and message contents.</p>
          <h3>How we use information</h3>
          <p>We use submitted information to review inquiries, respond to potential counterparties or investors, and maintain a record of communications relevant to our business activities.</p>
          <h3>How the form works</h3>
          <p>Contact form submissions are transmitted through a third-party form processing service and forwarded to LOAL Capital email inboxes. You should not submit sensitive personal, financial, or confidential information through the website form.</p>
          <h3>Information sharing</h3>
          <p>We do not sell personal information submitted through this website. Information may be shared internally with relevant LOAL Capital personnel or with service providers supporting website operations, email handling, and security.</p>
          <h3>Data retention</h3>
          <p>We retain inquiry information for as long as reasonably necessary to evaluate, respond to, and document communications, or as otherwise required by applicable law or legitimate business needs.</p>
          <h3>Security</h3>
          <p>We use reasonable administrative and technical measures appropriate for a public corporate website, including HTTPS when enabled for the domain. No method of internet transmission or storage is completely secure.</p>
          <h3>Your choices</h3>
          <p>You may request that we update or delete contact information you previously submitted, subject to any legal, regulatory, or recordkeeping obligations that require retention.</p>
          <h3>Contact</h3>
          <p>Questions regarding this Privacy Policy may be sent to <a href="mailto:jose@loalcapital.com">jose@loalcapital.com</a> or <a href="mailto:guillermolopez@loalcapital.com">guillermolopez@loalcapital.com</a>.</p>
        </div>
      </Section>
    </>
  );
}

function TermsPage() {
  return (
    <>
      <Section eyebrow="Terms" title="Terms of Use" subtitle="These terms govern use of the LOAL Capital website." asH1>
        <div className="legal-copy">
          <p><strong>Effective date:</strong> March 17, 2026</p>
          <h3>Use of the website</h3>
          <p>This website is provided for general informational purposes only. By accessing or using the site, you agree to use it lawfully and in a manner consistent with these Terms of Use.</p>
          <h3>No offer or solicitation</h3>
          <p>Nothing on this website constitutes an offer to sell, a solicitation of an offer to buy, investment advice, legal advice, or a commitment to enter into any transaction or business relationship.</p>
          <h3>No reliance</h3>
          <p>Website content is presented on an as-is basis for general information. Visitors should not rely on the website as a substitute for direct diligence, professional advice, or formal written agreements.</p>
          <h3>Permitted communications</h3>
          <p>Any information submitted through the contact form must be lawful and appropriate for an initial business inquiry. Do not submit sensitive personal data, banking details, passwords, or highly confidential information through the site.</p>
          <h3>Intellectual property</h3>
          <p>Unless otherwise stated, website content, branding, layout, and text are owned by or used with permission by LOAL Capital. You may not copy, reproduce, or distribute site materials except for personal, non-commercial reference.</p>
          <h3>Third-party services</h3>
          <p>The website may rely on third-party hosting, domain, analytics, or form-processing services. LOAL Capital is not responsible for the independent policies or uptime of those third-party providers.</p>
          <h3>Limitation of liability</h3>
          <p>To the maximum extent permitted by law, LOAL Capital disclaims liability for any direct, indirect, incidental, or consequential loss arising from use of, or inability to use, this website.</p>
          <h3>Changes</h3>
          <p>We may update these Terms of Use from time to time by posting a revised version on this website. Continued use of the site after changes are posted constitutes acceptance of the revised terms.</p>
          <h3>Contact</h3>
          <p>Questions regarding these Terms of Use may be sent to <a href="mailto:jose@loalcapital.com">jose@loalcapital.com</a>.</p>
        </div>
      </Section>
    </>
  );
}

function App() {
  const [path, setPath] = useState(hashPath());
  useEffect(() => {
    const onChange = () => {
      const p = hashPath();
      const known = knownPaths.includes(p);
      setPath(known ? p : '/');
      if (!known) navigate('/');
    };
    window.addEventListener('hashchange', onChange);
    onChange();
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const page = useMemo(() => {
    const descriptionEl = document.querySelector('meta[name="description"]');
    switch (path) {
      case '/approach':
        document.title = 'Our Approach | Loal Capital';
        if (descriptionEl) descriptionEl.content = "See Loal Capital's 4-step approach to acquiring and improving established businesses.";
        return <ApproachPage />;
      case '/owners':
        document.title = 'For Business Owners | Loal Capital';
        if (descriptionEl) descriptionEl.content = 'Understand how Loal Capital works with owners through a confidential, founder-first process.';
        return <OwnersPage />;
      case '/team':
        document.title = 'Team | Loal Capital';
        if (descriptionEl) descriptionEl.content = 'Meet the principals behind Loal Capital and their operating focus.';
        return <TeamPage />;
      case '/contact':
        document.title = 'Contact | Loal Capital';
        if (descriptionEl) descriptionEl.content = 'Start a confidential conversation with Loal Capital.';
        return <ContactPage />;
      case '/privacy':
        document.title = 'Privacy Policy | Loal Capital';
        if (descriptionEl) descriptionEl.content = 'Read the privacy policy governing the collection and use of information submitted through the Loal Capital website.';
        return <PrivacyPage />;
      case '/terms':
        document.title = 'Terms of Use | Loal Capital';
        if (descriptionEl) descriptionEl.content = 'Read the terms of use for the Loal Capital website.';
        return <TermsPage />;
      default:
        document.title = 'Loal Capital';
        if (descriptionEl) descriptionEl.content = 'Loal Capital is an operator-led firm focused on building lasting value in established Guatemalan companies.';
        return <HomePage />;
    }
  }, [path]);

  return <Shell path={path}>{page}</Shell>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
