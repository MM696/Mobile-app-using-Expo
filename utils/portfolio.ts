export const features = [
  {
    id: 'feature-product',
    icon: 'sparkles',
    title: 'Product Strategy',
    tagline: 'From idea to roadmap',
    description:
      'Translate business goals into practical product direction, clear milestones, and measurable outcomes.',
  },
  {
    id: 'feature-frontend',
    icon: 'phone-portrait',
    title: 'Frontend Engineering',
    tagline: 'Fast, polished interfaces',
    description:
      'Build responsive web and mobile interfaces with clean architecture, accessibility, and smooth UX.',
  },
  {
    id: 'feature-backend',
    icon: 'server',
    title: 'Backend Systems',
    tagline: 'Reliable APIs and services',
    description:
      'Design scalable backend services, robust APIs, and integrations that support real production traffic.',
  },
  {
    id: 'feature-delivery',
    icon: 'rocket',
    title: 'Delivery & Ownership',
    tagline: 'Ship with confidence',
    description:
      'Drive projects from planning through launch with testing, monitoring, and continuous iteration.',
  },
];

export const stats = [
  { id: 'stat-projects', value: '20+', label: 'Projects delivered' },
  { id: 'stat-clients', value: '12', label: 'Partner teams' },
  { id: 'stat-exp', value: '5 yrs', label: 'Hands-on experience' },
  { id: 'stat-sat', value: '98%', label: 'Client satisfaction' },
];

export const projects = [
  {
    id: 'project-fintech',
    title: 'FinPulse Dashboard',
    year: '2025',
    status: 'Live',
    featured: true,
    summary: 'Analytics dashboard helping finance teams monitor cashflow and risk in real time.',
    description:
      'Designed and shipped a multi-tenant analytics platform with live metrics, role-based access, and export workflows.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com/finpulse',
    repoUrl: 'https://github.com/example/finpulse',
  },
  {
    id: 'project-health',
    title: 'CareBridge Platform',
    year: '2024',
    status: 'Live',
    featured: true,
    summary: 'Patient care coordination platform that streamlines updates between clinics and families.',
    description:
      'Built secure messaging, scheduling, and records modules that reduced administrative turnaround time.',
    tech: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com/carebridge',
    repoUrl: 'https://github.com/example/carebridge',
  },
  {
    id: 'project-logistics',
    title: 'RoutePilot Suite',
    year: '2023',
    status: 'In Progress',
    featured: false,
    summary: 'Operations suite for fleet tracking, route planning, and delivery proof automation.',
    description:
      'Implemented optimization flows, driver mobile tools, and reporting that improved route efficiency.',
    tech: ['Next.js', 'Node.js', 'Redis', 'Tailwind'],
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com/routepilot',
    repoUrl: 'https://github.com/example/routepilot',
  },
];

export const testimonials = [
  {
    id: 'testimonial-1',
    quote:
      'McAnthony combines technical depth with product sense. We shipped faster and with fewer regressions.',
    author: 'Aisha Bello',
    role: 'Head of Product, FinPulse',
  },
  {
    id: 'testimonial-2',
    quote:
      'Great collaborator and owner. Communication stayed clear from kickoff to launch, even under tight timelines.',
    author: 'Daniel Okeke',
    role: 'Engineering Manager, CareBridge',
  },
];

export const contactChannels = [
  {
    id: 'contact-email',
    label: 'Email',
    value: 'mcanthony.dev@example.com',
    href: 'mailto:mcanthony.dev@example.com',
    icon: 'mail',
  },
  {
    id: 'contact-phone',
    label: 'Phone',
    value: '+234 800 000 0000',
    href: 'tel:+2348000000000',
    icon: 'call',
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mcanthony',
    href: 'https://www.linkedin.com',
    icon: 'logo-linkedin',
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'github.com/mcanthony',
    href: 'https://github.com',
    icon: 'logo-github',
  },
];
