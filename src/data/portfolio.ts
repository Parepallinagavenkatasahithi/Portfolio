import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Naga Venkata Sahithi Parepalli",
    displayName: "SAHITHI",
    shortName: "Sahithi",
    tagline: "Software Engineer | AI/ML & Quantum Computing Enthusiast",
    quote: "If it was easy, everyone would be doing it?",
    headline: "If it was easy, everyone would be doing it?",
    heroGreeting: "Hi, I'm Sahithi, a passionate Computer Science Engineering student dedicated to building intelligent systems through AI, ML, and Quantum innovations.",
    conciseBio: "Computer Science and Engineering student with hands-on experience in Java development, Object-Oriented Programming, Data Structures and Algorithms, and SQL, with strong practical experience in AI/ML, Generative AI, and Quantum Computing. Led team Quantum Coders to 1st place in the Amaravati Quantum Valley Hackathon semifinals and Grand Finale qualification.",
    fullBio: [
      "I am a Computer Science Engineering student currently pursuing B.Tech with an 8.9 CGPA, focused on architecting intelligent applications across AI/ML, Quantum Computing (QAOA), and modern Java backend systems.",
      "With hands-on software development experience at ElevateIQ Soft Tech and Infosys Springboard, I specialize in building multimodal forensics platforms, dynamic pricing models, and quantum variational optimization algorithms.",
      "A proactive team lead and fast learner, I led team 'Quantum Coders' to 1st place in the Amaravati Quantum Valley Hackathon semifinals and was selected for the prestigious global WISER Quantum Computing Program."
    ],
    problemSolvingPhilosophy: "Code with purpose, learn with passion, and build with heart. First-principles deconstruction, modular software design, and verifiable algorithmic correctness.",
    education: {
      college: "PSCMR College of Engineering and Technology (PSCMRCET)",
      university: "Jawaharlal Nehru Technological University Kakinada (JNTUK)",
      degree: "B.Tech in Computer Science and Engineering",
      status: "Currently Pursuing B.Tech",
      cgpa: "8.9 / 10.0",
      location: "Vijayawada, Andhra Pradesh, India",
      highlight: "Academic distinction with 8.9 CGPA, Department technical leadership, and national hackathon finalist recognitions."
    },
    schooling: [
      {
        institution: "Kakarapathi Bhavanarayana College",
        qualification: "Intermediate (MPC)",
        score: "91%",
        location: "Andhra Pradesh, India"
      },
      {
        institution: "Geethanjali E.M. High School",
        qualification: "Class X Secondary School Education",
        score: "98%",
        location: "Andhra Pradesh, India"
      }
    ],
    highlightClaim: {
      count: "30+",
      label: "Real World Projects & Technical Builds",
      sublabel: "Hands-on experience delivering real-world AI, ML, Quantum and Java systems."
    },
    profileImage: {
      src: "/assets/images/profile/sahithi_portrait.jpg",
      alt: "Naga Venkata Sahithi Parepalli — Software Engineer & AI Specialist",
      caption: "Sahithi Parepalli — Building intelligent applications with algorithmic rigor.",
      objectPosition: "center 20%",
      aspectRatio: "portrait"
    },
    resumePath: "/assets/resume/Sahithi_Parepalli_Resume.pdf",
    contact: {
      phone: "+91 7793923299",
      email: "sahithiparepalli11@gmail.com",
      location: "Vijayawada, Andhra Pradesh, India"
    },
    social: {
      github: "https://github.com/Parepallinagavenkatasahithi",
      linkedin: "https://www.linkedin.com/in/naga-venkata-sahithi/",
      email: "mailto:sahithiparepalli11@gmail.com",
      displayEmail: "sahithiparepalli11@gmail.com"
    },
    stats: [
      {
        value: "8.9",
        label: "B.Tech CGPA",
        description: "Currently pursuing B.Tech in CSE at PSCMRCET"
      },
      {
        value: "30+",
        label: "Projects & Builds",
        description: "Production-grade AI, Quantum & Software Systems"
      },
      {
        value: "1st Place",
        label: "AQVH Semifinals",
        description: "Led team Quantum Coders to Grand Finale & prize"
      },
      {
        value: "Top 3K",
        label: "WISER Selection",
        description: "Selected among 65,000+ global applicants"
      }
    ]
  },

  // Filtered organizations
  companiesWorkedWith: [
    { name: "ElevateIQ Soft Tech", role: "Java Software Engineer", period: "Aug 2026 – Present" },
    { name: "Infosys Springboard", role: "Artificial Intelligence Intern", period: "Sept 2025 – Dec 2025" }
  ],

  expertise: [
    {
      id: "ai-ml",
      number: "01",
      title: "AI & Machine Learning",
      tagline: "Multimodal Forensics, Computer Vision & Predictive Models",
      description: "Developing robust statistical learning pipelines, deep neural networks, and computer vision models designed for high accuracy and low-latency inference on complex multimodal signals.",
      technologies: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "LightGBM", "XGBoost", "MediaPipe"],
      capabilities: [
        "Multimodal media-forensics and deepfake detection",
        "Predictive modeling and non-linear regression engines",
        "Feature engineering and high-dimensional data processing",
        "Automated evaluation metrics and model validation"
      ]
    },
    {
      id: "gen-ai",
      number: "02",
      title: "Generative AI & RAG",
      tagline: "Context-Aware LLM Pipelines, Gemini API & Dense Retrieval",
      description: "Architecting context-augmented generative systems leveraging Google Gemini, dense vector retrieval, semantic embeddings, and orchestration frameworks for domain-grounded intelligence.",
      technologies: ["LangChain", "Vertex AI", "Google AI Studio", "ChromaDB", "FAISS", "Hugging Face", "FastAPI"],
      capabilities: [
        "Retrieval-Augmented Generation (RAG) architecture",
        "Vector search indexing and hybrid retrieval strategies",
        "Prompt engineering, tool-calling agents & evaluation",
        "Document ingestion and chunking optimization"
      ]
    },
    {
      id: "software-eng",
      number: "03",
      title: "Software Engineering (Java)",
      tagline: "Modular Backend Architectures, Clean OOP & REST APIs",
      description: "Building reliable, scalable backend services and responsive frontends following SOLID principles, design patterns, clean abstractions, and testable micro-architectures.",
      technologies: ["Java", "Spring Boot", "OOP", "Data Structures", "REST APIs", "SQL / DBMS", "Git", "Docker"],
      capabilities: [
        "Enterprise-grade Object-Oriented Java development",
        "RESTful API design and asynchronous request handling",
        "Database schema modeling and relational data querying",
        "CI/CD workflows and automated testing suites"
      ]
    },
    {
      id: "quantum-computing",
      number: "04",
      title: "Quantum Computing (QAOA)",
      tagline: "NISQ Algorithms, Variational Circuits & QAOA Optimization",
      description: "Exploring hybrid quantum-classical algorithms, variational quantum eigensolvers, and QAOA applied to combinatorially complex portfolio allocation and optimization problems.",
      technologies: ["Qiskit", "PennyLane", "QAOA", "CVXPY", "PySide6", "NumPy", "Matplotlib"],
      capabilities: [
        "Formulating QUBO / Ising Hamiltonians for combinatorial problems",
        "Parameterized quantum circuit design and statevector simulation",
        "Classical optimizer tuning (COBYLA, SLSQP) for quantum ansatzes",
        "Benchmarking quantum vs. classical Markowitz frontiers"
      ]
    },
    {
      id: "cloud-data",
      number: "05",
      title: "Cloud & Intelligent Workflows",
      tagline: "Cloud API Integrations, Docker Containers & Streamlit UIs",
      description: "Deploying intelligent services and automated pipelines with Docker, Streamlit dashboards, and cloud integrations across AWS, Google Cloud, and IBM watsonx.ai.",
      technologies: ["Docker", "AWS APAC", "Vertex AI", "Streamlit", "Flask", "MLflow", "IBM watsonx.ai"],
      capabilities: [
        "Microservice containerization with Docker",
        "Third-party API integration (OpenAI, OpenWeather, OpenCage)",
        "Automated model lifecycle tracking with MLflow",
        "Interactive executive dashboards with Streamlit"
      ]
    }
  ],

  // Filtered to ElevateIQ and Infosys Springboard as requested
  experience: [
    {
      id: "elevateiq-java",
      role: "Java Software Engineer",
      company: "ElevateIQ Soft Tech Pvt. Ltd",
      period: "August 2026 – Present",
      location: "Chennai, Tamil Nadu, India (Hybrid)",
      type: "Professional Engineering Experience",
      summary: "Working on core Java development assignments, scalable backend routines, object-oriented design, and maintainable enterprise service architecture.",
      responsibilities: [
        "Completed Java development assignments focused on practical software development and backend workflows.",
        "Applied Object-Oriented Programming and robust exception handling to write structured, maintainable code.",
        "Practiced deep debugging, memory optimization, and algorithmic problem-solving to strengthen core Java skills."
      ],
      technologies: ["Java", "OOP", "Data Structures", "Exception Handling", "REST APIs", "SQL", "Git"]
    },
    {
      id: "infosys-ai-intern",
      role: "Artificial Intelligence Intern",
      company: "Infosys Springboard",
      period: "September 2025 – December 2025",
      location: "Virtual / Remote",
      type: "Industry Internship",
      summary: "Developed and optimized machine learning models for real-world AI applications covering end-to-end workflows including preprocessing, model training, evaluation, and deployment.",
      responsibilities: [
        "Built an AI-powered customer support chatbot using NLP techniques achieving 90%+ query accuracy.",
        "Designed a dynamic price optimization algorithm using machine learning to maximize revenue based on real-time market demand analysis.",
        "Executed model evaluation pipelines, hyperparameter tuning, and metric benchmarking."
      ],
      technologies: ["Python", "NLP", "Machine Learning", "Scikit-learn", "Chatbot Development", "Pandas"]
    }
  ],

  featuredProjects: [
    {
      id: "trustlens-ai",
      title: "TrustLens.AI",
      category: "ai-ml",
      categoryLabel: "Multimodal AI & Forensics",
      featured: true,
      tagline: "Multimodal Media-Forensics Platform for Deepfake & Manipulated-Media Detection",
      description: "Developed a comprehensive multimodal media forensics platform using Python and FastAPI to analyze manipulated images, videos, and audio. Implemented FFT frequency analysis, Grad-CAM attention visualizations, facial artifact analysis with MediaPipe, and audio signal feature extraction with detailed explainable reporting.",
      highlights: [
        "Multimodal forensics pipeline detecting visual, facial, and spectral inconsistencies.",
        "FFT frequency-domain artifact analysis and Grad-CAM explainability heatmaps.",
        "Audio signal feature extraction (spectral centroid, MFCCs, zero-crossing rate) for synthetic voice detection.",
        "FastAPI backend with automated verification reporting."
      ],
      technologies: ["Python", "FastAPI", "Computer Vision", "OpenCV", "MediaPipe", "Signal Processing", "PyTorch"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi/TrustLens.AI",
      liveUrl: undefined,
      image: {
        src: "/assets/images/projects/trustlens_ai.jpg",
        alt: "TrustLens.AI Multimodal Deepfake Detection Interface",
        caption: "Deepfake and manipulated media detection across image, video, and audio streams.",
        aspectRatio: "wide"
      }
    },
    {
      id: "ai-priceoptima",
      title: "AI-PriceOptima",
      category: "ai-ml",
      categoryLabel: "Machine Learning & Economics",
      featured: true,
      tagline: "Intelligent Dynamic Pricing Solution Driven by LightGBM & XGBoost",
      description: "Developed a machine learning-based dynamic pricing solution using LightGBM and XGBoost to predict and optimize product prices based on real-time market demand analysis. Evaluated predictive models on historical pricing data to support data-driven pricing decisions, maximizing revenue while preserving conversion rates.",
      highlights: [
        "LightGBM and XGBoost gradient-boosted decision engines for demand forecasting.",
        "Price elasticity curve simulation to determine revenue-maximizing price points.",
        "Evaluated predictive models on historical transaction datasets with robust cross-validation.",
        "Interactive dashboard interface for scenario modeling and margin analysis."
      ],
      technologies: ["Python", "LightGBM", "XGBoost", "Machine Learning", "Scikit-learn", "Pandas", "Streamlit"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi/AI-PriceOptima",
      liveUrl: undefined,
      image: {
        src: "/assets/images/projects/ai_priceoptima.jpg",
        alt: "AI-PriceOptima Dynamic Pricing System Interface",
        caption: "Machine-learning dynamic pricing and demand forecasting dashboard.",
        aspectRatio: "wide"
      }
    },
    {
      id: "hybrid-quantum-portfolio",
      title: "Hybrid Quantum Portfolio Optimizer",
      category: "quantum",
      categoryLabel: "Quantum Computing (QAOA)",
      featured: true,
      tagline: "QAOA-Driven Hybrid Quantum-Classical Portfolio Asset Allocation (AQVH916)",
      description: "Led team 'Quantum Coders' in building a hybrid quantum-classical portfolio optimizer using QAOA (Quantum Approximate Optimization Algorithm) with a classical mean-variance (Markowitz) comparison. Qualified for the AQVH Grand Finale and secured first place in the semi-final round, earning an INR 10,000 prize and recognition from APSCHE, IBM, and TCS.",
      highlights: [
        "Formulated portfolio covariance and return constraints into a Quadratic Unconstrained Binary Optimization (QUBO) Hamiltonian.",
        "Constructed parameterized QAOA quantum circuits in Qiskit and PennyLane with variational optimization.",
        "Compared simulated quantum ansatz states against classical CVXPY quadratic solvers.",
        "Engineered an interactive desktop / visualization GUI using PySide6."
      ],
      technologies: ["Python", "Qiskit", "QAOA", "PennyLane", "CVXPY", "PySide6", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi/Hybrid-Quantum-Portfolio-Optimization",
      liveUrl: undefined,
      image: {
        src: "/assets/images/projects/quantum_portfolio.jpg",
        alt: "Hybrid Quantum Portfolio Optimization Algorithm Simulation",
        caption: "QAOA quantum circuit state evolution and classical comparison frontier.",
        aspectRatio: "wide"
      }
    }
  ],

  additionalProjects: [],

  // Academic honors item removed as requested
  achievements: [
    {
      id: "aqvh-challenge",
      title: "AQVH Quantum Computing Challenge — 1st Place & Grand Finalist",
      organization: "Amaravati Quantum Valley Hackathon 2025 (APSCHE, IBM, TCS)",
      date: "2025",
      badge: "1st Place Semifinals • INR 10,000 Prize",
      stage: "Grand Finale Finalist",
      description: "Secured 1st place in the semifinals, qualified for the prestigious Grand Finale, and received an INR 10,000 cash prize. Led team Quantum Coders in engineering a QAOA-based portfolio optimization model (AQVH916) earning recognition from APSCHE, IBM, and TCS, along with regional media coverage.",
      impactPoints: [
        "Secured 1st Place in the semi-final round and advanced to Grand Finale.",
        "Awarded INR 10,000 cash prize for quantum algorithmic innovation.",
        "Built QAOA-based portfolio optimization model (AQVH916) balancing risk and return.",
        "Recognized by APSCHE, IBM, and TCS with regional media press coverage."
      ],
      image: {
        src: "/assets/images/achievements/aqvh_challenge.jpg",
        alt: "AQVH Quantum Computing Challenge 1st Place Recognition",
        caption: "AQVH Semifinals 1st Place & Grand Finale qualification."
      }
    },
    {
      id: "quantum-coders-lead",
      title: "Quantum Coders — Team Leadership",
      organization: "Amaravati Quantum Valley Hackathon & National Challenges",
      date: "Team Lead",
      badge: "Team Lead",
      stage: "Leadership & Algorithmic Design",
      description: "Served as Team Lead for 'Quantum Coders', directing algorithmic strategy, task distribution, mathematical formulation of Hamiltonians, and Qiskit circuit simulation under intensive competitive deadlines.",
      impactPoints: [
        "Led cross-functional team in mathematical modeling of financial covariance matrices into QUBO form.",
        "Spearheaded QAOA circuit execution and hybrid classical comparison routines.",
        "Delivered winning presentation and live defense to senior jury."
      ],
      image: {
        src: "/assets/images/achievements/quantum_coders.jpg",
        alt: "Quantum Coders Team Leadership",
        caption: "Leading Quantum Coders team through intensive hackathon build."
      }
    },
    {
      id: "wiser-2025",
      title: "WISER Quantum Computing Program Selection (2025)",
      organization: "WISER (BQPhy®) Global Quantum Computing Initiative",
      date: "2025",
      badge: "Top 3,000 of 65,000+ Applicants",
      stage: "Highly Selective Global Cohort",
      description: "Selected among the top 3,000 out of 65,000+ applicants worldwide for the prestigious WISER (BQPhy®) Quantum Computing Program.",
      impactPoints: [
        "Rigorous global selection process with <4.6% acceptance rate.",
        "Intensive training in quantum mechanics, quantum algorithms, and computational physics.",
        "Hands-on quantum simulation projects and peer exchange circles."
      ],
      image: {
        src: "/assets/images/achievements/wiser_2026.jpg",
        alt: "WISER Quantum Computing Program Selection",
        caption: "Selected among top 3,000 of 65,000+ applicants globally."
      }
    },
    {
      id: "wiser-summer-2026",
      title: "WISER Summer Program 2026 — Fully Funded ($1,000)",
      organization: "WISER Global Initiative (Participants from 68 Countries)",
      date: "2026",
      badge: "Fully Funded $1,000 Program",
      stage: "International Research Cohort",
      description: "Selected for the prestigious, fully funded $1,000 WISER Summer Program 2026, collaborating with aspiring quantum scientists and engineers across 68 nations.",
      impactPoints: [
        "Awarded full $1,000 scholarship funding for summer research.",
        "Global cohort representing 68 countries worldwide.",
        "Advanced exploration of quantum information systems and scalable computing."
      ],
      image: {
        src: "/assets/images/achievements/wiser_summer.jpg",
        alt: "WISER Summer Program 2026",
        caption: "Fully funded $1,000 program with participants from 68 countries."
      }
    },
    {
      id: "qc2-quantum-award",
      title: "Quantum Innovation Excellence Award (2026)",
      organization: "QC² — SRM University AP & GeeksforGeeks Student Chapter",
      date: "2026",
      badge: "Best Innovation Excellence Award",
      stage: "36-Hour National Quantum Hackathon",
      description: "Awarded at QC², a premier 36-hour national-level Quantum Computing Hackathon hosted at SRM University AP in collaboration with the GeeksforGeeks Student Chapter, for pioneering innovation in quantum solutions.",
      impactPoints: [
        "36-hour continuous national quantum hackathon marathon.",
        "Awarded 'Best Innovation Excellence' for novel quantum problem formulation.",
        "Evaluated and commended by leading academic and industry quantum researchers."
      ],
      image: {
        src: "/assets/images/achievements/grand_finale.jpg",
        alt: "Quantum Innovation Excellence Award at QC² SRM AP",
        caption: "36-hour national hackathon innovation award at SRM University AP."
      }
    }
  ],

  // Certifications updated and renamed as requested
  certifications: [
    {
      id: "cert-nptel-java",
      title: "Certification on Java Programming",
      issuer: "NPTEL",
      issueDate: "Certified by NPTEL",
      credentialId: "NPTEL-JAVA-VERIFIED",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Java Programming", "OOP Fundamentals", "Data Structures", "Structured Coding"],
      image: {
        src: "/assets/images/certificates/java_cert.jpg",
        alt: "Certification on Java Programming - NPTEL"
      }
    },
    {
      id: "cert-quantum-algo",
      title: "Quantum Algorithm Fundamentals and Hands-on Training",
      issuer: "Quantum Computing Foundations / Qiskit Community",
      issueDate: "Verified Credential",
      credentialId: "Q-ALGO-FUNDAMENTALS",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Quantum Algorithms", "Qiskit", "Quantum Circuits", "Variational Solvers"],
      image: {
        src: "/assets/images/certificates/quantum_cert.jpg",
        alt: "Quantum Algorithm Fundamentals Certificate"
      }
    },
    {
      id: "cert-gemini-imagen",
      title: "Build Real World AI Applications with Gemini and Imagen",
      issuer: "Google / Google AI Studio",
      issueDate: "Google AI Credential",
      credentialId: "GOOGLE-IMAGEN-GEMINI",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Gemini 1.5", "Imagen", "Google AI Studio", "Generative Vision"],
      image: {
        src: "/assets/images/certificates/imagen_cert.jpg",
        alt: "Gemini and Imagen Real World AI Applications Certificate"
      }
    }
  ],

  // Gallery items with WISER gathering and AI Workshop removed as requested
  gallery: [
    {
      id: "hackathon-stage",
      title: "Grand Finale Live Presentation & Defense",
      category: "Hackathon",
      date: "Competition Stage",
      caption: "Presenting algorithmic architecture and QAOA live demo before the hackathon jury.",
      aspectRatio: "landscape",
      image: {
        src: "/assets/images/gallery/gallery_hackathon_stage.jpg",
        alt: "Hackathon Grand Finale Presentation",
        objectPosition: "center"
      }
    },
    {
      id: "team-brainstorm",
      title: "Quantum Coders Sprint Session",
      category: "Team",
      date: "Hackathon Sprint",
      caption: "Intense whiteboard sprint mapping QUBO matrix reduction during the competition.",
      aspectRatio: "portrait",
      image: {
        src: "/assets/images/gallery/gallery_team_sprint.jpg",
        alt: "Quantum Coders Whiteboarding",
        objectPosition: "center"
      }
    },
    {
      id: "project-demo",
      title: "TrustLens.AI Live Forensics Exhibition",
      category: "Demonstration",
      date: "Technical Demo",
      caption: "Showcasing real-time manipulated media detection and FFT spectral analysis.",
      aspectRatio: "square",
      image: {
        src: "/assets/images/gallery/gallery_project_demo.jpg",
        alt: "TrustLens.AI Live System Demonstration",
        objectPosition: "center"
      }
    },
    {
      id: "awards-podium",
      title: "AQVH Semifinals Award Ceremony",
      category: "Technical Event",
      date: "Award Ceremony",
      caption: "Celebrating 1st place semifinal victory and Grand Finale qualification.",
      aspectRatio: "square",
      image: {
        src: "/assets/images/gallery/gallery_award_stage.jpg",
        alt: "AQVH Semifinals Award Stage",
        objectPosition: "center"
      }
    }
  ]
};
