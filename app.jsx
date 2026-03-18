const { useEffect, useMemo, useState } = React;

const routeDefs = [
  { path: '/', key: 'home' },
  { path: '/approach', key: 'approach' },
  { path: '/owners', key: 'owners' },
  { path: '/team', key: 'team' },
  { path: '/contact', key: 'contact' },
];

const legalRouteDefs = [
  { path: '/privacy', key: 'privacy' },
  { path: '/terms', key: 'terms' },
];

const knownPaths = [...routeDefs, ...legalRouteDefs].map((item) => item.path);
const ringLabels = ['F', 'O', 'S'];
const legalDate = 'March 17, 2026';
const legalDateEs = '18 de marzo de 2026';

const copy = {
  en: {
    meta: {
      homeTitle: 'Loal Capital',
      homeDescription: 'Loal Capital is an operator-led firm focused on building lasting value in established Guatemalan companies.',
      approachTitle: 'Our Approach | Loal Capital',
      approachDescription: "See Loal Capital's operating thesis across financial, operational, and strategic execution.",
      ownersTitle: 'For Business Owners | Loal Capital',
      ownersDescription: 'Understand how Loal Capital works with owners through a confidential, founder-first process.',
      teamTitle: 'Team | Loal Capital',
      teamDescription: 'Meet the principals behind Loal Capital and their operating focus.',
      contactTitle: 'Contact | Loal Capital',
      contactDescription: 'Start a confidential conversation with Loal Capital.',
      privacyTitle: 'Privacy Policy | Loal Capital',
      privacyDescription: 'Read the privacy policy governing the collection and use of information submitted through the Loal Capital website.',
      termsTitle: 'Terms of Use | Loal Capital',
      termsDescription: 'Read the terms of use for the Loal Capital website.',
    },
    nav: {
      home: 'Home',
      approach: 'Our Approach',
      owners: 'For Business Owners',
      team: 'Team',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      ownersCta: 'For Business Owners',
      contactCta: 'Contact',
    },
    language: {
      label: 'Language',
      en: 'EN',
      es: 'ES',
    },
    footer: {
      note: 'Loal Capital is currently in the process of formal legal structuring.',
    },
    home: {
      title: 'Building lasting value in established businesses.',
      subtitle: 'Designing, producing and sustaining value in foundational industries through operational, financial and strategic rigor.',
      primaryCta: 'Start a Confidential Conversation',
      secondaryCta: 'Our Approach',
      whatWeDoTitle: 'What We Do',
      whatWeDoSubtitle: 'LOAL aims to deliver value and combined success to all whom we serve.',
      whatWeDoCards: [
        { title: 'Acquire', desc: 'Target majority or full ownership with alignment from day one.' },
        { title: 'Improve', desc: 'Drive measurable gains in operations, reporting, and governance.' },
        { title: 'Build', desc: 'Institutionalize capabilities that support long-term continuity.' },
      ],
      differentiatorsTitle: 'Differentiators',
      differentiatorsCards: [
        { title: 'Local Intimacy, Global Rigor', desc: 'Boots-on-the-ground cultural and regulatory knowledge of the Guatemalan market, paired with the precision and rigor of global firms.' },
        { title: 'Operational Hand-in-Glove', desc: 'Not passive investing: our operating partners are deeply embedded: not just balance sheets, but blueprints for value.' },
        { title: 'Execution Velocity and Agility', desc: 'Our architecture eliminates friction. We are built for movement from discovery to closing with unmatched speed, enabling access to more market windows and deep value creation on a daily - not quarterly - cadence.' },
      ],
      ownerCard: {
        title: 'For Business Owners',
        desc: 'Confidential conversations for founders evaluating growth, transition, or strategic options.',
        cta: 'For Business Owners',
      },
      investorCard: {
        title: 'Investors',
        desc: 'LOAL is not currently fundraising, but certain investors can be accommodated. Reach out.',
        cta: 'Investor Contact',
      },
    },
    approach: {
      eyebrow: 'Our Approach',
      title: 'Growth is not a series of isolated tasks',
      subtitle: 'Our thesis is an image of the Borromean knot -- Three distinct disciplines so thoroughly interlaced the collapse of one would collapse the whole.',
      italic: 'This interdependence is not a weakness but our hallmark.',
      diagramLabel: 'F, S, O diagram with a in the center',
      ringsTitle: 'The Three Rings',
      steps: [
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
      ],
      operatingThemesTitle: 'Operating Themes',
      operatingThemes: ['Financial transparency', 'Governance discipline', 'Execution cadence', 'Growth initiatives', 'Clear KPIs', 'Management alignment'],
      managementTitle: 'How We Work with Management',
      partnershipTitle: 'Respectful Partnership',
      partnershipDesc: 'We collaborate with management teams through clear roles and direct communication.',
      metricsTitle: 'Accountability and Metrics',
      metricsDesc: 'Structured KPIs and and reporting cycles to ensure outcomes long-term.',
      faqTitle: 'FAQ',
      faqs: [
        { q: 'How confidential is the first conversation?', a: 'Initial conversations are private and focused on high-level fit.' },
        { q: 'How long does a process usually take?', a: 'Timelines vary, but we keep communication direct from first call through closing.' },
        { q: 'Do owners stay involved after a transaction?', a: 'We are prepared and flexible to work apropos of the needs and circumstances of each founding team.' },
      ],
    },
    owners: {
      eyebrow: 'For Business Owners',
      title: 'A founder-first, confidential process',
      subtitle: 'We approach each conversation with respect for continuity, culture, and long-term outcomes.',
      reasonsTitle: 'Reasons Owners Talk to Us',
      reasons: [
        { title: 'Succession', desc: 'A structured path when ownership transition needs clarity.' },
        { title: 'Partial Liquidity', desc: 'Flexibility for owners seeking liquidity without abrupt disruption.' },
        { title: 'Growth Partner', desc: 'Operational support to scale with stronger systems and cadence.' },
        { title: 'Institutionalization', desc: 'Governance and reporting that strengthen long-term resilience.' },
      ],
      expectTitle: 'What to Expect',
      expectSteps: [
        { strong: 'Initial conversation:', text: 'confidential fit discussion.' },
        { strong: 'Evaluation:', text: 'aligned diligence scope and data request.' },
        { strong: 'LOI:', text: 'structured proposal with clear terms.' },
        { strong: 'Close & transition:', text: 'planned handoff with continuity.' },
      ],
      assurancesTitle: 'Owner-Friendly Assurances',
      assurances: [
        'Fair process and direct communication.',
        'Continuity planning for employees and customers.',
        'Respect for company culture and operating identity.',
      ],
      ctaTitle: 'Start a Confidential Conversation',
      ctaButton: 'Go to Contact',
    },
    team: {
      eyebrow: 'Team',
      title: 'Principals',
      subtitle: 'Experienced operators and investors committed to disciplined execution.',
      principalTitle: 'Guillermo López',
      principalBody: 'Guillermo López focuses on transaction structuring, capital discipline, and strategic alignment.',
      bullets: [
        'Transaction process and negotiation discipline.',
        'Financial transparency and governance systems.',
        'Long-term strategy tied to executable milestones.',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start a confidential conversation',
      subtitle: 'Share basic details and we will follow up directly.',
      subject: 'New LOAL website contact submission',
      warning: 'Please do not submit sensitive personal, financial, or confidential information through this form.',
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      consent: 'I agree to be contacted regarding this inquiry.',
      submit: 'Submit',
      directContact: 'Direct Contact',
      country: 'Guatemala',
      confidentialityTitle: 'Confidentiality',
      confidentialityBody: 'No sensitive information is required in the first message.',
    },
    privacy: {
      eyebrow: 'Privacy Policy',
      title: 'Privacy Policy',
      subtitle: 'This policy explains what information LOAL Capital collects through this website and how that information is used.',
      effectiveDateLabel: 'Effective date:',
      effectiveDate: legalDate,
      sections: [
        { title: 'Information we collect', body: 'LOAL Capital collects the information you choose to submit through the contact form, including your name, email address, company name, and message contents.' },
        { title: 'How we use information', body: 'We use submitted information to review inquiries, respond to potential counterparties or investors, and maintain a record of communications relevant to our business activities.' },
        { title: 'How the form works', body: 'Contact form submissions are transmitted through a third-party form processing service and forwarded to LOAL Capital email inboxes. You should not submit sensitive personal, financial, or confidential information through the website form.' },
        { title: 'Information sharing', body: 'We do not sell personal information submitted through this website. Information may be shared internally with relevant LOAL Capital personnel or with service providers supporting website operations, email handling, and security.' },
        { title: 'Data retention', body: 'We retain inquiry information for as long as reasonably necessary to evaluate, respond to, and document communications, or as otherwise required by applicable law or legitimate business needs.' },
        { title: 'Security', body: 'We use reasonable administrative and technical measures appropriate for a public corporate website, including HTTPS when enabled for the domain. No method of internet transmission or storage is completely secure.' },
        { title: 'Your choices', body: 'You may request that we update or delete contact information you previously submitted, subject to any legal, regulatory, or recordkeeping obligations that require retention.' },
      ],
      contactTitle: 'Contact',
      contactBody: 'Questions regarding this Privacy Policy may be sent to',
    },
    terms: {
      eyebrow: 'Terms',
      title: 'Terms of Use',
      subtitle: 'These terms govern use of the LOAL Capital website.',
      effectiveDateLabel: 'Effective date:',
      effectiveDate: legalDate,
      sections: [
        { title: 'Use of the website', body: 'This website is provided for general informational purposes only. By accessing or using the site, you agree to use it lawfully and in a manner consistent with these Terms of Use.' },
        { title: 'No offer or solicitation', body: 'Nothing on this website constitutes an offer to sell, a solicitation of an offer to buy, investment advice, legal advice, or a commitment to enter into any transaction or business relationship.' },
        { title: 'No reliance', body: 'Website content is presented on an as-is basis for general information. Visitors should not rely on the website as a substitute for direct diligence, professional advice, or formal written agreements.' },
        { title: 'Permitted communications', body: 'Any information submitted through the contact form must be lawful and appropriate for an initial business inquiry. Do not submit sensitive personal data, banking details, passwords, or highly confidential information through the site.' },
        { title: 'Intellectual property', body: 'Unless otherwise stated, website content, branding, layout, and text are owned by or used with permission by LOAL Capital. You may not copy, reproduce, or distribute site materials except for personal, non-commercial reference.' },
        { title: 'Third-party services', body: 'The website may rely on third-party hosting, domain, analytics, or form-processing services. LOAL Capital is not responsible for the independent policies or uptime of those third-party providers.' },
        { title: 'Limitation of liability', body: 'To the maximum extent permitted by law, LOAL Capital disclaims liability for any direct, indirect, incidental, or consequential loss arising from use of, or inability to use, this website.' },
        { title: 'Changes', body: 'We may update these Terms of Use from time to time by posting a revised version on this website. Continued use of the site after changes are posted constitutes acceptance of the revised terms.' },
      ],
      contactTitle: 'Contact',
      contactBody: 'Questions regarding these Terms of Use may be sent to',
    },
  },
  es: {
    meta: {
      homeTitle: 'Loal Capital',
      homeDescription: 'Loal Capital es una firma operadora enfocada en construir valor duradero en empresas guatemaltecas consolidadas.',
      approachTitle: 'Nuestro Enfoque | Loal Capital',
      approachDescription: 'Conozca la tesis operativa de Loal Capital en la ejecución financiera, operativa y estratégica.',
      ownersTitle: 'Para Dueños de Empresas | Loal Capital',
      ownersDescription: 'Entienda cómo Loal Capital trabaja con dueños a través de un proceso confidencial centrado en el fundador.',
      teamTitle: 'Equipo | Loal Capital',
      teamDescription: 'Conozca a los principales de Loal Capital y su enfoque operativo.',
      contactTitle: 'Contacto | Loal Capital',
      contactDescription: 'Inicie una conversación confidencial con Loal Capital.',
      privacyTitle: 'Política de Privacidad | Loal Capital',
      privacyDescription: 'Lea la política de privacidad que regula la recopilación y uso de información enviada a través del sitio web de Loal Capital.',
      termsTitle: 'Términos de Uso | Loal Capital',
      termsDescription: 'Lea los términos de uso del sitio web de Loal Capital.',
    },
    nav: {
      home: 'Inicio',
      approach: 'Nuestro Enfoque',
      owners: 'Para Dueños',
      team: 'Equipo',
      contact: 'Contacto',
      privacy: 'Privacidad',
      terms: 'Términos',
      ownersCta: 'Para Dueños',
      contactCta: 'Contacto',
    },
    language: {
      label: 'Idioma',
      en: 'EN',
      es: 'ES',
    },
    footer: {
      note: 'Loal Capital se encuentra actualmente en proceso de estructuración legal formal.',
    },
    home: {
      title: 'Construyendo valor duradero en empresas consolidadas.',
      subtitle: 'Diseñando, produciendo y sosteniendo valor en industrias fundacionales mediante rigor operativo, financiero y estratégico.',
      primaryCta: 'Iniciar una Conversación Confidencial',
      secondaryCta: 'Nuestro Enfoque',
      whatWeDoTitle: 'Qué Hacemos',
      whatWeDoSubtitle: 'LOAL busca generar valor y éxito compartido para todos a quienes sirve.',
      whatWeDoCards: [
        { title: 'Adquirir', desc: 'Buscar propiedad mayoritaria o total con alineación desde el primer día.' },
        { title: 'Mejorar', desc: 'Impulsar mejoras medibles en operaciones, reportes y gobierno corporativo.' },
        { title: 'Construir', desc: 'Institucionalizar capacidades que respalden la continuidad de largo plazo.' },
      ],
      differentiatorsTitle: 'Diferenciadores',
      differentiatorsCards: [
        { title: 'Intimidad Local, Rigor Global', desc: 'Conocimiento cultural y regulatorio de campo del mercado guatemalteco, combinado con la precisión y el rigor de firmas globales.' },
        { title: 'Operación Mano a Mano', desc: 'No es inversión pasiva: nuestros socios operadores están profundamente involucrados; no solo balances, sino planos para crear valor.' },
        { title: 'Velocidad y Agilidad de Ejecución', desc: 'Nuestra arquitectura elimina fricciones. Estamos construidos para avanzar desde el descubrimiento hasta el cierre con velocidad excepcional, habilitando más ventanas de mercado y una creación profunda de valor en una cadencia diaria, no trimestral.' },
      ],
      ownerCard: {
        title: 'Para Dueños de Empresas',
        desc: 'Conversaciones confidenciales para fundadores que evalúan crecimiento, transición u opciones estratégicas.',
        cta: 'Para Dueños',
      },
      investorCard: {
        title: 'Inversionistas',
        desc: 'LOAL no se encuentra levantando capital actualmente, pero ciertos inversionistas pueden ser considerados. Contáctenos.',
        cta: 'Contacto para Inversionistas',
      },
    },
    approach: {
      eyebrow: 'Nuestro Enfoque',
      title: 'El crecimiento no es una serie de tareas aisladas',
      subtitle: 'Nuestra tesis es una imagen del nudo borromeo -- Tres disciplinas distintas tan profundamente entrelazadas que el colapso de una colapsaría al conjunto.',
      italic: 'Esta interdependencia no es una debilidad, sino nuestro sello distintivo.',
      diagramLabel: 'Diagrama de F, S, O con a en el centro',
      ringsTitle: 'Los Tres Anillos',
      steps: [
        {
          title: 'Mayordomía Financiera',
          desc: 'El capital es la sangre vital; la disciplina es su pulso. Visión y acción más allá de la optimización del balance para asegurar estructuras de capital resilientes que puedan impulsar el crecimiento y resistir la volatilidad.',
          note: 'Solvencia blindada, liquidez optimizada.',
        },
        {
          title: 'Comando Operativo',
          desc: 'La eficiencia es un hábito, no un acto. LOAL está inserto en los flujos reales de la economía de nuestras compañías: expansión de márgenes desde adentro hacia afuera mediante metodologías lean y sistemas modernos.',
          note: 'Desempeño de nivel institucional y sistemas escalables en toda la operación.',
        },
        {
          title: 'Visión Estratégica',
          desc: 'Sin dirección, la ejecución es energía desperdiciada. Ya sea mediante M&A accretivo, expansión geográfica o transformación digital, nuestra estrella polar no es sobrevivir a la industria, sino fijar el estándar.',
          note: 'Valor compuesto de largo plazo.',
        },
      ],
      operatingThemesTitle: 'Temas Operativos',
      operatingThemes: ['Transparencia financiera', 'Disciplina de gobierno', 'Cadencia de ejecución', 'Iniciativas de crecimiento', 'KPIs claros', 'Alineación gerencial'],
      managementTitle: 'Cómo Trabajamos con la Gerencia',
      partnershipTitle: 'Alianza Respetuosa',
      partnershipDesc: 'Colaboramos con los equipos gerenciales mediante roles claros y comunicación directa.',
      metricsTitle: 'Responsabilidad y Métricas',
      metricsDesc: 'KPIs estructurados y ciclos de reporte para asegurar resultados sostenidos en el tiempo.',
      faqTitle: 'Preguntas Frecuentes',
      faqs: [
        { q: '¿Qué tan confidencial es la primera conversación?', a: 'Las conversaciones iniciales son privadas y se enfocan en un encaje general de alto nivel.' },
        { q: '¿Cuánto suele durar un proceso?', a: 'Los tiempos varían, pero mantenemos una comunicación directa desde la primera llamada hasta el cierre.' },
        { q: '¿Los dueños continúan involucrados después de una transacción?', a: 'Estamos preparados y somos flexibles para trabajar según las necesidades y circunstancias de cada equipo fundador.' },
      ],
    },
    owners: {
      eyebrow: 'Para Dueños de Empresas',
      title: 'Un proceso confidencial centrado en el fundador',
      subtitle: 'Abordamos cada conversación con respeto por la continuidad, la cultura y los resultados de largo plazo.',
      reasonsTitle: 'Motivos por los que los Dueños Hablan con Nosotros',
      reasons: [
        { title: 'Sucesión', desc: 'Un camino estructurado cuando la transición de propiedad requiere claridad.' },
        { title: 'Liquidez Parcial', desc: 'Flexibilidad para dueños que buscan liquidez sin una disrupción abrupta.' },
        { title: 'Socio de Crecimiento', desc: 'Apoyo operativo para escalar con sistemas y cadencias más sólidas.' },
        { title: 'Institucionalización', desc: 'Gobierno corporativo y reportes que fortalecen la resiliencia de largo plazo.' },
      ],
      expectTitle: 'Qué Esperar',
      expectSteps: [
        { strong: 'Conversación inicial:', text: 'discusión confidencial sobre encaje.' },
        { strong: 'Evaluación:', text: 'alcance de due diligence y requerimiento de información alineados.' },
        { strong: 'LOI:', text: 'propuesta estructurada con términos claros.' },
        { strong: 'Cierre y transición:', text: 'traspaso planificado con continuidad.' },
      ],
      assurancesTitle: 'Compromisos hacia el Dueño',
      assurances: [
        'Proceso justo y comunicación directa.',
        'Planificación de continuidad para empleados y clientes.',
        'Respeto por la cultura de la empresa y su identidad operativa.',
      ],
      ctaTitle: 'Iniciar una Conversación Confidencial',
      ctaButton: 'Ir a Contacto',
    },
    team: {
      eyebrow: 'Equipo',
      title: 'Principales',
      subtitle: 'Operadores e inversionistas con experiencia comprometidos con una ejecución disciplinada.',
      principalTitle: 'Guillermo López',
      principalBody: 'Guillermo López se enfoca en estructuración de transacciones, disciplina de capital y alineación estratégica.',
      bullets: [
        'Disciplina en proceso transaccional y negociación.',
        'Transparencia financiera y sistemas de gobierno corporativo.',
        'Estrategia de largo plazo vinculada a hitos ejecutables.',
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Inicie una conversación confidencial',
      subtitle: 'Comparta información básica y le responderemos directamente.',
      subject: 'Nueva consulta enviada desde el sitio web de LOAL',
      warning: 'Por favor no envíe información personal, financiera o confidencial sensible a través de este formulario.',
      name: 'Nombre',
      email: 'Correo electrónico',
      company: 'Empresa',
      message: 'Mensaje',
      consent: 'Acepto ser contactado en relación con esta consulta.',
      submit: 'Enviar',
      directContact: 'Contacto Directo',
      country: 'Guatemala',
      confidentialityTitle: 'Confidencialidad',
      confidentialityBody: 'No se requiere información sensible en el primer mensaje.',
    },
    privacy: {
      eyebrow: 'Política de Privacidad',
      title: 'Política de Privacidad',
      subtitle: 'Esta política explica qué información recopila LOAL Capital a través de este sitio web y cómo se utiliza dicha información.',
      effectiveDateLabel: 'Fecha de vigencia:',
      effectiveDate: legalDateEs,
      sections: [
        { title: 'Información que recopilamos', body: 'LOAL Capital recopila la información que usted decida enviar a través del formulario de contacto, incluyendo su nombre, dirección de correo electrónico, nombre de empresa y contenido del mensaje.' },
        { title: 'Cómo usamos la información', body: 'Utilizamos la información enviada para revisar consultas, responder a posibles contrapartes o inversionistas y mantener un registro de comunicaciones relevantes para nuestras actividades comerciales.' },
        { title: 'Cómo funciona el formulario', body: 'Los envíos del formulario de contacto se transmiten a través de un servicio externo de procesamiento de formularios y se reenvían a los correos electrónicos de LOAL Capital. No debe enviar información personal, financiera o confidencial sensible a través del formulario del sitio web.' },
        { title: 'Compartición de información', body: 'No vendemos información personal enviada a través de este sitio web. La información puede ser compartida internamente con personal relevante de LOAL Capital o con proveedores de servicios que apoyen la operación del sitio, el manejo de correos y la seguridad.' },
        { title: 'Retención de datos', body: 'Conservamos la información de consultas durante el tiempo razonablemente necesario para evaluar, responder y documentar comunicaciones, o según lo exijan la ley aplicable o necesidades comerciales legítimas.' },
        { title: 'Seguridad', body: 'Utilizamos medidas administrativas y técnicas razonables apropiadas para un sitio corporativo público, incluyendo HTTPS cuando esté habilitado para el dominio. Ningún método de transmisión o almacenamiento por internet es completamente seguro.' },
        { title: 'Sus opciones', body: 'Puede solicitar que actualicemos o eliminemos información de contacto que haya enviado previamente, sujeto a obligaciones legales, regulatorias o de archivo que requieran su conservación.' },
      ],
      contactTitle: 'Contacto',
      contactBody: 'Las preguntas sobre esta Política de Privacidad pueden enviarse a',
    },
    terms: {
      eyebrow: 'Términos',
      title: 'Términos de Uso',
      subtitle: 'Estos términos regulan el uso del sitio web de LOAL Capital.',
      effectiveDateLabel: 'Fecha de vigencia:',
      effectiveDate: legalDateEs,
      sections: [
        { title: 'Uso del sitio web', body: 'Este sitio web se proporciona únicamente con fines informativos generales. Al acceder o utilizar el sitio, usted acepta usarlo de manera lícita y conforme a estos Términos de Uso.' },
        { title: 'Sin oferta ni solicitud', body: 'Nada en este sitio web constituye una oferta de venta, una solicitud de oferta de compra, asesoría de inversión, asesoría legal o un compromiso de entrar en una transacción o relación comercial.' },
        { title: 'Sin confianza indebida', body: 'El contenido del sitio se presenta tal cual para información general. Los visitantes no deben confiar en el sitio como sustituto de diligencia directa, asesoría profesional o acuerdos escritos formales.' },
        { title: 'Comunicaciones permitidas', body: 'Toda información enviada a través del formulario de contacto debe ser lícita y apropiada para una consulta comercial inicial. No envíe datos personales sensibles, datos bancarios, contraseñas o información altamente confidencial a través del sitio.' },
        { title: 'Propiedad intelectual', body: 'Salvo que se indique lo contrario, el contenido, marca, diseño y textos del sitio son propiedad de LOAL Capital o se utilizan con su autorización. No puede copiar, reproducir o distribuir materiales del sitio salvo para referencia personal y no comercial.' },
        { title: 'Servicios de terceros', body: 'El sitio puede depender de servicios de terceros para hosting, dominio, analítica o procesamiento de formularios. LOAL Capital no es responsable por las políticas independientes ni por la disponibilidad de dichos proveedores.' },
        { title: 'Limitación de responsabilidad', body: 'En la máxima medida permitida por la ley, LOAL Capital rechaza responsabilidad por cualquier pérdida directa, indirecta, incidental o consecuente derivada del uso o imposibilidad de uso de este sitio web.' },
        { title: 'Cambios', body: 'Podemos actualizar estos Términos de Uso periódicamente mediante la publicación de una versión revisada en este sitio web. El uso continuado del sitio después de la publicación de cambios constituye aceptación de los términos revisados.' },
      ],
      contactTitle: 'Contacto',
      contactBody: 'Las preguntas sobre estos Términos de Uso pueden enviarse a',
    },
  },
};

function hashPath() {
  const raw = window.location.hash.replace(/^#/, '');
  return raw || '/';
}

function navigate(path) {
  window.location.hash = path;
}

function detectInitialLanguage() {
  const stored = window.localStorage.getItem('loal-language');
  if (stored === 'en' || stored === 'es') return stored;
  return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
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

function LanguageToggle({ lang, setLang, t }) {
  return (
    <div className="lang-toggle" aria-label={t.language.label}>
      <button type="button" className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>{t.language.en}</button>
      <button type="button" className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>{t.language.es}</button>
    </div>
  );
}

function Shell({ path, children, lang, setLang, t }) {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => navigate('/')} aria-label="Go to Home"><LoalLogo /></button>
          <nav className="main-nav" aria-label="Main navigation">
            {routeDefs.map((r) => <button key={r.path} className={`nav-link ${path === r.path ? 'active' : ''}`} onClick={() => navigate(r.path)}>{t.nav[r.key]}</button>)}
          </nav>
          <div className="header-cta">
            <LanguageToggle lang={lang} setLang={setLang} t={t} />
            <button className="btn btn-primary" onClick={() => navigate('/owners')}>{t.nav.ownersCta}</button>
            <button className="btn btn-secondary" onClick={() => navigate('/contact')}>{t.nav.contactCta}</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <p className="footer-note">{t.footer.note}</p>
          <div className="footer-links">
            {legalRouteDefs.map((item) => <a key={item.path} href={`#${item.path}`}>{t.nav[item.key]}</a>)}
            <a href="mailto:contact@loalcapital.com">contact@loalcapital.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function HomePage({ t }) {
  return (
    <>
      <section className="hero"><div className="container hero-grid"><div><h1>{t.home.title}</h1><p className="section-subtitle">{t.home.subtitle}</p><div className="hero-cta"><button className="btn btn-primary" onClick={() => navigate('/owners')}>{t.home.primaryCta}</button><button className="btn btn-secondary" onClick={() => navigate('/approach')}>{t.home.secondaryCta}</button></div></div></div></section>
      <Section title={t.home.whatWeDoTitle} subtitle={t.home.whatWeDoSubtitle}><CardGrid items={t.home.whatWeDoCards} /></Section>
      <Section title={t.home.differentiatorsTitle}><CardGrid items={t.home.differentiatorsCards} /></Section>
      <Section tone="accent">
        <div className="audience-grid">
          <article className="audience-card">
            <h3>{t.home.ownerCard.title}</h3>
            <p>{t.home.ownerCard.desc}</p>
            <button className="btn btn-primary" onClick={() => navigate('/owners')}>{t.home.ownerCard.cta}</button>
          </article>
          <article className="audience-card">
            <h3>{t.home.investorCard.title}</h3>
            <p>{t.home.investorCard.desc}</p>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>{t.home.investorCard.cta}</button>
          </article>
        </div>
      </Section>
    </>
  );
}

function ApproachPage({ t }) {
  return (
    <>
      <Section eyebrow={t.approach.eyebrow} title={t.approach.title} subtitle={t.approach.subtitle} asH1>
        <p className="approach-italic-note"><em>{t.approach.italic}</em></p>
        <figure className="approach-diagram" aria-label="Borromean knot style diagram" style={{ width: '400px', marginTop: '3.5rem' }}>
          <svg viewBox="0 0 360 320" role="img" aria-label={t.approach.diagramLabel} style={{ width: '400px', height: 'auto' }}>
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
      <Section title={t.approach.ringsTitle}><ol className="steps">{t.approach.steps.map((s, i) => <li key={s.title}><span className="step-index">{ringLabels[i]}</span><div><h3>{s.title}</h3><p>{s.desc}</p>{s.note && <p className="step-note"><em>{s.note}</em></p>}</div></li>)}</ol></Section>
      <Section title={t.approach.operatingThemesTitle} tone="tinted"><div className="tag-grid">{t.approach.operatingThemes.map((theme) => <span key={theme} className="tag">{theme}</span>)}</div></Section>
      <Section title={t.approach.managementTitle}><div className="split"><article className="panel"><h3>{t.approach.partnershipTitle}</h3><p>{t.approach.partnershipDesc}</p></article><article className="panel"><h3>{t.approach.metricsTitle}</h3><p>{t.approach.metricsDesc}</p></article></div></Section>
      <Section title={t.approach.faqTitle}><div className="faq">{t.approach.faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></Section>
    </>
  );
}

function OwnersPage({ t }) {
  return (
    <>
      <Section eyebrow={t.owners.eyebrow} title={t.owners.title} subtitle={t.owners.subtitle} asH1 />
      <Section title={t.owners.reasonsTitle}><CardGrid items={t.owners.reasons} /></Section>
      <Section title={t.owners.expectTitle} tone="tinted"><ol className="timeline">{t.owners.expectSteps.map((item) => <li key={item.strong}><strong>{item.strong}</strong> {item.text}</li>)}</ol></Section>
      <Section title={t.owners.assurancesTitle}><ul className="bullet-list">{t.owners.assurances.map((item) => <li key={item}>{item}</li>)}</ul></Section>
      <Section tone="accent" title={t.owners.ctaTitle}><button className="btn btn-primary" onClick={() => navigate('/contact')}>{t.owners.ctaButton}</button></Section>
    </>
  );
}

function TeamPage({ t, lang }) {
  return (
    <>
      <Section eyebrow={t.team.eyebrow} title={t.team.title} subtitle={t.team.subtitle} asH1 />
      <Section title={t.team.principalTitle}><div className="profile-layout"><img className="founder-photo" src="./assets/guillermo-lopez.jpeg" alt={lang === 'es' ? 'Retrato de Guillermo López' : 'Guillermo López portrait'} loading="lazy" /><div className="profile-copy"><p>{t.team.principalBody}</p><ul className="bullet-list compact">{t.team.bullets.map((item) => <li key={item}>{item}</li>)}</ul></div></div></Section>
    </>
  );
}

function ContactPage({ t }) {
  return (
    <Section eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} asH1>
      <div className="split">
        <form className="contact-form" action="https://formsubmit.co/jose@loalcapital.com" method="POST">
          <input type="hidden" name="_subject" value={t.contact.subject} />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
          <p className="form-note">{t.contact.warning}</p>
          <label>{t.contact.name}<input type="text" name="name" required /></label>
          <label>{t.contact.email}<input type="email" name="email" required /></label>
          <label>{t.contact.company}<input type="text" name="company" /></label>
          <label>{t.contact.message}<textarea name="message" rows="5" required /></label>
          <label className="check"><input type="checkbox" name="consent" value="yes" required /><span>{t.contact.consent}</span></label>
          <button className="btn btn-primary" type="submit">{t.contact.submit}</button>
        </form>
        <aside className="panel">
          <h3>{t.contact.directContact}</h3>
          <p><a href="mailto:jose@loalcapital.com">jose@loalcapital.com</a></p>
          <p><a href="mailto:guillermolopez@loalcapital.com">guillermolopez@loalcapital.com</a></p>
          <p><a href="tel:+50255164041">+502 5516-4041</a></p>
          <p><a href="tel:+50242177038">+502 4217-7038</a></p>
          <p>{t.contact.country}</p>
          <h3>{t.contact.confidentialityTitle}</h3>
          <p>{t.contact.confidentialityBody}</p>
        </aside>
      </div>
    </Section>
  );
}

function LegalPage({ eyebrow, title, subtitle, effectiveDateLabel, effectiveDate, sections, contactTitle, contactBody, contactEmails }) {
  return (
    <Section eyebrow={eyebrow} title={title} subtitle={subtitle} asH1>
      <div className="legal-copy">
        <p><strong>{effectiveDateLabel}</strong> {effectiveDate}</p>
        {sections.map((section) => <React.Fragment key={section.title}><h3>{section.title}</h3><p>{section.body}</p></React.Fragment>)}
        <h3>{contactTitle}</h3>
        <p>{contactBody} {contactEmails}</p>
      </div>
    </Section>
  );
}

function PrivacyPage({ t, lang }) {
  return (
    <LegalPage
      eyebrow={t.privacy.eyebrow}
      title={t.privacy.title}
      subtitle={t.privacy.subtitle}
      effectiveDateLabel={t.privacy.effectiveDateLabel}
      effectiveDate={t.privacy.effectiveDate}
      sections={t.privacy.sections}
      contactTitle={t.privacy.contactTitle}
      contactBody={t.privacy.contactBody}
      contactEmails={<><a href="mailto:jose@loalcapital.com">jose@loalcapital.com</a> {lang === 'es' ? 'o' : 'or'} <a href="mailto:guillermolopez@loalcapital.com">guillermolopez@loalcapital.com</a>.</>}
    />
  );
}

function TermsPage({ t }) {
  return (
    <LegalPage
      eyebrow={t.terms.eyebrow}
      title={t.terms.title}
      subtitle={t.terms.subtitle}
      effectiveDateLabel={t.terms.effectiveDateLabel}
      effectiveDate={t.terms.effectiveDate}
      sections={t.terms.sections}
      contactTitle={t.terms.contactTitle}
      contactBody={t.terms.contactBody}
      contactEmails={<><a href="mailto:jose@loalcapital.com">jose@loalcapital.com</a>.</>}
    />
  );
}

function App() {
  const [path, setPath] = useState(hashPath());
  const [lang, setLang] = useState(detectInitialLanguage);

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

  useEffect(() => {
    window.localStorage.setItem('loal-language', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = copy[lang];

  const page = useMemo(() => {
    const descriptionEl = document.querySelector('meta[name="description"]');
    switch (path) {
      case '/approach':
        document.title = t.meta.approachTitle;
        if (descriptionEl) descriptionEl.content = t.meta.approachDescription;
        return <ApproachPage t={t} />;
      case '/owners':
        document.title = t.meta.ownersTitle;
        if (descriptionEl) descriptionEl.content = t.meta.ownersDescription;
        return <OwnersPage t={t} />;
      case '/team':
        document.title = t.meta.teamTitle;
        if (descriptionEl) descriptionEl.content = t.meta.teamDescription;
        return <TeamPage t={t} lang={lang} />;
      case '/contact':
        document.title = t.meta.contactTitle;
        if (descriptionEl) descriptionEl.content = t.meta.contactDescription;
        return <ContactPage t={t} />;
      case '/privacy':
        document.title = t.meta.privacyTitle;
        if (descriptionEl) descriptionEl.content = t.meta.privacyDescription;
        return <PrivacyPage t={t} lang={lang} />;
      case '/terms':
        document.title = t.meta.termsTitle;
        if (descriptionEl) descriptionEl.content = t.meta.termsDescription;
        return <TermsPage t={t} />;
      default:
        document.title = t.meta.homeTitle;
        if (descriptionEl) descriptionEl.content = t.meta.homeDescription;
        return <HomePage t={t} />;
    }
  }, [path, t, lang]);

  return <Shell path={path} lang={lang} setLang={setLang} t={t}>{page}</Shell>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
