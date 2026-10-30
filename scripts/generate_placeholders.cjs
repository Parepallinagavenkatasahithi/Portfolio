const fs = require('fs');
const path = require('path');

const placeholders = [
  // Profile
  {
    path: 'public/assets/images/profile/sahithi_portrait.svg',
    title: 'SAHITHI',
    subtitle: 'Naga Venkata Sahithi Parepalli',
    tag: 'PORTRAIT PLACEHOLDER',
    icon: '👤',
    accent: '#2D4A3E',
    w: 800,
    h: 1000
  },
  // Projects
  {
    path: 'public/assets/images/projects/trustlens_ai.svg',
    title: 'TrustLens.AI',
    subtitle: 'Multimodal Media-Forensics & Deepfake Detection',
    tag: 'PROJECT SCREENSHOT',
    icon: '🔍',
    accent: '#2D4A3E',
    w: 1200,
    h: 750
  },
  {
    path: 'public/assets/images/projects/ai_priceoptima.svg',
    title: 'AI-PriceOptima',
    subtitle: 'Dynamic Pricing & Demand Elasticity Simulator',
    tag: 'PROJECT SCREENSHOT',
    icon: '📈',
    accent: '#2D4A3E',
    w: 1200,
    h: 750
  },
  {
    path: 'public/assets/images/projects/quantum_portfolio.svg',
    title: 'Hybrid Quantum Portfolio',
    subtitle: 'QAOA & Variational Quantum Circuit Simulation',
    tag: 'PROJECT SCREENSHOT',
    icon: '⚛️',
    accent: '#2D4A3E',
    w: 1200,
    h: 750
  },
  // Achievements
  {
    path: 'public/assets/images/achievements/aqvh_challenge.svg',
    title: 'AQVH Challenge',
    subtitle: 'Grand Finale Finalist • Quantum Optimization',
    tag: 'ACHIEVEMENT ARTIFACT',
    icon: '🏆',
    accent: '#2D4A3E',
    w: 1000,
    h: 625
  },
  {
    path: 'public/assets/images/achievements/quantum_coders.svg',
    title: 'Quantum Coders',
    subtitle: 'Team Leadership • Algorithmic Sprint',
    tag: 'TEAM LEADERSHIP',
    icon: '👥',
    accent: '#2D4A3E',
    w: 1000,
    h: 625
  },
  {
    path: 'public/assets/images/achievements/grand_finale.svg',
    title: 'Grand Finale Qualifier',
    subtitle: 'Premier Collegiate Engineering Hackathon',
    tag: 'NATIONAL RECOGNITION',
    icon: '🎖️',
    accent: '#2D4A3E',
    w: 1000,
    h: 625
  },
  {
    path: 'public/assets/images/achievements/wiser_2026.svg',
    title: 'WISER 2026',
    subtitle: 'Selected Engineering & Research Cohort',
    tag: 'RESEARCH COHORT',
    icon: '🌟',
    accent: '#2D4A3E',
    w: 1000,
    h: 625
  },
  {
    path: 'public/assets/images/achievements/academic_honors.svg',
    title: 'Academic Distinction',
    subtitle: '8.9 CGPA • Department Technical Leadership',
    tag: 'INSTITUTIONAL HONORS',
    icon: '🎓',
    accent: '#2D4A3E',
    w: 1000,
    h: 625
  },
  // Certificates
  {
    path: 'public/assets/images/certificates/java_cert.svg',
    title: 'Java SE Programming',
    subtitle: 'Object-Oriented Design & Architecture',
    tag: 'VERIFIED CREDENTIAL',
    icon: '📜',
    accent: '#2D4A3E',
    w: 800,
    h: 600
  },
  {
    path: 'public/assets/images/certificates/ml_cert.svg',
    title: 'Machine Learning Specialization',
    subtitle: 'Statistical Learning & Predictive Models',
    tag: 'VERIFIED CREDENTIAL',
    icon: '📜',
    accent: '#2D4A3E',
    w: 800,
    h: 600
  },
  {
    path: 'public/assets/images/certificates/quantum_cert.svg',
    title: 'Quantum Computation (Qiskit)',
    subtitle: 'Variational Quantum Circuits & QAOA',
    tag: 'VERIFIED CREDENTIAL',
    icon: '📜',
    accent: '#2D4A3E',
    w: 800,
    h: 600
  },
  {
    path: 'public/assets/images/certificates/swe_cert.svg',
    title: 'Full-Stack Software Engineering',
    subtitle: 'Microservices, REST & Distributed Design',
    tag: 'VERIFIED CREDENTIAL',
    icon: '📜',
    accent: '#2D4A3E',
    w: 800,
    h: 600
  },
  // Gallery
  {
    path: 'public/assets/images/gallery/gallery_hackathon_stage.svg',
    title: 'Hackathon Grand Finale',
    subtitle: 'Live Jury Presentation & Defense',
    tag: 'GALLERY MOMENT',
    icon: '🎤',
    accent: '#2D4A3E',
    w: 1000,
    h: 625
  },
  {
    path: 'public/assets/images/gallery/gallery_team_sprint.svg',
    title: 'Quantum Coders Sprint',
    subtitle: 'Technical Brainstorming Session',
    tag: 'GALLERY MOMENT',
    icon: '💡',
    accent: '#2D4A3E',
    w: 800,
    h: 1000
  },
  {
    path: 'public/assets/images/gallery/gallery_project_demo.svg',
    title: 'TrustLens.AI Live Demo',
    subtitle: 'Forensics Platform Exhibition',
    tag: 'GALLERY MOMENT',
    icon: '💻',
    accent: '#2D4A3E',
    w: 800,
    h: 800
  },
  {
    path: 'public/assets/images/gallery/gallery_workshop.svg',
    title: 'AI Deep-Dive Workshop',
    subtitle: 'Computer Vision & Representation Learning',
    tag: 'GALLERY MOMENT',
    icon: '🔬',
    accent: '#2D4A3E',
    w: 1000,
    h: 625
  },
  {
    path: 'public/assets/images/gallery/gallery_wiser_event.svg',
    title: 'WISER 2026 Exchange',
    subtitle: 'Mentorship & Collaborative Research Gathering',
    tag: 'GALLERY MOMENT',
    icon: '🤝',
    accent: '#2D4A3E',
    w: 800,
    h: 1000
  },
  {
    path: 'public/assets/images/gallery/gallery_award_stage.svg',
    title: 'Challenge Recognition Stage',
    subtitle: 'Celebrating Finalist Team Honor',
    tag: 'GALLERY MOMENT',
    icon: '🎖️',
    accent: '#2D4A3E',
    w: 800,
    h: 800
  }
];

function generateSVG(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${item.w} ${item.h}" width="${item.w}" height="${item.h}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF8F5" />
      <stop offset="50%" stop-color="#F2EDE6" />
      <stop offset="100%" stop-color="#E7DFD4" />
    </linearGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="1" fill="#111111" opacity="0.08" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="url(#grid)" />

  <!-- Borders -->
  <rect x="20" y="20" width="${item.w - 40}" height="${item.h - 40}" fill="none" stroke="#D5CCC0" stroke-width="2" rx="16" />
  <rect x="32" y="32" width="${item.w - 64}" height="${item.h - 64}" fill="none" stroke="#2D4A3E" stroke-opacity="0.25" stroke-dasharray="6 6" rx="12" />

  <!-- Content Centered -->
  <g transform="translate(${item.w / 2}, ${item.h / 2})">
    <!-- Icon Circle -->
    <circle cx="0" cy="-60" r="48" fill="#FFFFFF" stroke="#D5CCC0" stroke-width="2" />
    <text x="0" y="-45" font-size="36" text-anchor="middle">${item.icon}</text>

    <!-- Tag -->
    <rect x="-120" y="8" width="240" height="28" rx="14" fill="#2D4A3E" />
    <text x="0" y="26" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="700" fill="#FAF8F5" text-anchor="middle" letter-spacing="2">${item.tag}</text>

    <!-- Title -->
    <text x="0" y="70" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="28" font-weight="800" fill="#111111" text-anchor="middle" letter-spacing="-0.5">${item.title}</text>

    <!-- Subtitle -->
    <text x="0" y="98" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="500" fill="#4A4A4F" text-anchor="middle">${item.subtitle}</text>

    <!-- Helper instruction -->
    <text x="0" y="140" font-family="'JetBrains Mono', monospace" font-size="11" fill="#6D6D75" text-anchor="middle">Replace with your real image in portfolio.ts</text>
  </g>
</svg>`;
}

for (const item of placeholders) {
  const fullPath = path.resolve(process.cwd(), item.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const svg = generateSVG(item);
  fs.writeFileSync(fullPath, svg, 'utf8');

  // Also write .jpg fallback file so if the user specifies .jpg in portfolioData, it resolves directly!
  const jpgPath = fullPath.replace(/\.svg$/, '.jpg');
  fs.writeFileSync(jpgPath, svg, 'utf8');
}

console.log(`Generated ${placeholders.length * 2} placeholder assets successfully.`);
