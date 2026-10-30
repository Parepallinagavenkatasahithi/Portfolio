import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Naga Venkata Sahithi Parepalli",
    displayName: "SAHITHI",
    tagline: "Aspiring Software Engineer & AI Specialist",
    headline: "If it was easy, everyone would be doing it.",
    conciseBio: "Aspiring software engineer passionate about architecting intelligent systems, generative intelligence, and exploring quantum-classical computing boundaries to solve rigorous engineering challenges.",
    fullBio: [
      "I am an undergraduate technologist currently pursuing a B.Tech in Computer Science and Engineering with an academic standing of 8.9 CGPA. My curiosity lies at the intersection of robust software engineering, scalable artificial intelligence, and quantum computing paradigms.",
      "Rather than treating machine learning as an abstraction, I focus on the first-principles engineering required to build production-grade, multimodal pipelines, dynamic algorithmic pricing engines, and quantum approximate optimization algorithms (QAOA).",
      "As a team lead and technical builder, I thrive in high-stakes hackathons, competitive challenges, and collaborative engineering environments where clean code, structural clarity, and analytical rigor drive tangible outcomes."
    ],
    problemSolvingPhilosophy: "First-principles deconstruction, modular software design, and verifiable algorithmic correctness. Every problem is an opportunity to eliminate friction and build durable, scalable systems.",
    education: {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Artificial Intelligence, Data Systems & Software Engineering",
      status: "Currently Pursuing B.Tech",
      cgpa: "8.9 / 10",
      highlight: "Distinction academic record with leadership across technical research initiatives and competitive hackathons."
    },
    highlightClaim: {
      count: "30+",
      label: "Technical Builds & Projects",
      sublabel: "Spanning AI/ML, Quantum Algorithms, Full-Stack Architecture & Data Systems"
    },
    profileImage: {
      src: "/assets/images/profile/sahithi_portrait.jpg",
      alt: "Naga Venkata Sahithi Parepalli — Software Engineer & AI Specialist",
      caption: "Sahithi Parepalli — Building intelligent applications with algorithmic rigor.",
      objectPosition: "center 25%",
      aspectRatio: "portrait"
    },
    resumePath: "/assets/resume/Sahithi_Parepalli_Resume.pdf",
    social: {
      github: "https://github.com/Parepallinagavenkatasahithi",
      linkedin: "https://linkedin.com/in/naga-venkata-sahithi/",
      email: "mailto:parepalli.sahithi@example.com", // Replace with your verified email
      displayEmail: "parepalli.sahithi@example.com"  // Replace with your verified email
    },
    stats: [
      {
        value: "8.9",
        label: "B.Tech CGPA",
        description: "Currently pursuing B.Tech in Computer Science & Engineering"
      },
      {
        value: "30+",
        label: "Projects & Builds",
        description: "End-to-end applications across AI, QAOA, and Software Systems"
      },
      {
        value: "Team Lead",
        label: "Quantum Coders",
        description: "Leading competitive quantum algorithmic challenge teams"
      },
      {
        value: "100%",
        label: "First-Principles Focus",
        description: "Zero fluff, high impact, modular and maintainable codebases"
      }
    ]
  },

  expertise: [
    {
      id: "ai-ml",
      number: "01",
      title: "AI & Machine Learning",
      tagline: "Predictive Modeling, Computer Vision & Multimodal Forensics",
      description: "Developing robust statistical learning pipelines, deep neural networks, and computer vision models designed for high accuracy and low-latency inference on complex multimodal signals.",
      technologies: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "Transformers", "XGBoost"],
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
      tagline: "Context-Aware LLM Pipelines & Knowledge Retrieval Systems",
      description: "Architecting context-augmented generative systems leveraging dense vector retrieval, semantic embeddings, and orchestration frameworks for domain-grounded intelligence.",
      technologies: ["LangChain", "LlamaIndex", "ChromaDB", "FAISS", "Hugging Face", "FastAPI"],
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
      title: "Software Engineering",
      tagline: "Modular Backend Architectures, Clean Code & API Design",
      description: "Building reliable, scalable backend services and responsive frontends following SOLID principles, design patterns, clean abstractions, and testable micro-architectures.",
      technologies: ["Java", "Python", "TypeScript", "React", "Spring Boot / FastAPI", "PostgreSQL", "Git"],
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
      title: "Quantum Computing",
      tagline: "NISQ Algorithms, Variational Circuits & QAOA Optimization",
      description: "Exploring hybrid quantum-classical algorithms, variational quantum eigensolvers, and QAOA applied to combinatorially complex portfolio allocation and optimization problems.",
      technologies: ["Qiskit", "Pennylane", "QAOA", "VQE", "NumPy", "Matplotlib"],
      capabilities: [
        "Formulating QUBO / Ising Hamiltonians for combinatorial problems",
        "Parameterized quantum circuit design and statevector simulation",
        "Classical optimizer tuning (COBYLA, SLSQP) for quantum ansatzes",
        "Benchmarking quantum vs. classical Markowitz frontiers"
      ]
    },
    {
      id: "data-science",
      number: "05",
      title: "Data Science & Analytics",
      tagline: "Exploratory Data Analysis, Statistical Rigor & Insight Visualization",
      description: "Transforming unstructured, noisy real-world data into actionable mathematical models and decision engines through disciplined hypothesis testing and visual analytics.",
      technologies: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Statsmodels", "SQL"],
      capabilities: [
        "High-volume data cleaning and missingness imputation",
        "Exploratory data analysis (EDA) and pattern detection",
        "Statistical hypothesis formulation and significance testing",
        "Interactive executive dashboard and metric reporting"
      ]
    }
  ],

  experience: [
    {
      id: "elevateiq-java",
      role: "Java Developer",
      company: "ElevateIQ",
      period: "Internship / Role", // Editable period
      location: "Remote / Hybrid",   // Editable location
      type: "Professional Engineering Experience",
      summary: "Focused on core Java application development, object-oriented design, modular service architecture, and back-end integration pipelines.",
      responsibilities: [
        "Engineered scalable backend modules using modern Java paradigms and object-oriented architectural patterns.",
        "Collaborated on designing robust RESTful services, streamlining data interchange and handling edge-case validation.",
        "Refactored legacy routines to improve memory footprint, execution latency, and algorithmic efficiency.",
        "Participated in agile code reviews, unit testing, and version control workflows to maintain production code hygiene."
      ],
      technologies: ["Java", "OOP", "Data Structures", "REST APIs", "Git", "JUnit", "SQL"]
    }
  ],

  featuredProjects: [
    {
      id: "trustlens-ai",
      title: "TrustLens.AI",
      category: "ai-ml",
      categoryLabel: "Multimodal AI & Forensics",
      featured: true,
      tagline: "Multimodal Media-Forensics Platform for Manipulated-Media Detection",
      description: "A comprehensive media-forensics application engineered to detect deepfakes and manipulated content across multimodal channels — image, video, and audio streams. Employs deep feature extraction, frequency-domain artifacts analysis, and spectral inconsistencies to flag synthetic media with confidence scoring.",
      highlights: [
        "Analyzes spatial pixel artifacts and frequency-domain DCT/FFT spectra for visual manipulation cues.",
        "Processes multimodal inputs (visual frames, audio tracks, and temporal continuity).",
        "Generates explainable forensics reports detailing suspicious regions and manipulation confidence."
      ],
      technologies: ["Python", "PyTorch", "OpenCV", "Transformers", "Librosa", "FastAPI"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi/TrustLens.AI",
      liveUrl: undefined, // Add your live demo link when deployed
      image: {
        src: "/assets/images/projects/trustlens_ai.jpg",
        alt: "TrustLens.AI Multimodal Media Forensics Application Interface",
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
      tagline: "Machine-Learning-Driven Dynamic Pricing Engine & Demand Forecaster",
      description: "An intelligent pricing engine that computes revenue-optimal prices based on real-time market dynamics, competitor price monitoring, price elasticity of demand, and seasonal indicators. Utilizes gradient boosting and econometric regression to maximize margins while preserving sales volume.",
      highlights: [
        "Calculates price elasticity curves across varied product tiers and consumer demographics.",
        "Simulates revenue vs. demand frontiers to recommend optimal real-time pricing adjustments.",
        "Features an interactive analytics dashboard allowing scenario planning and margin stress-testing."
      ],
      technologies: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "NumPy", "Streamlit"],
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
      title: "Hybrid Quantum Portfolio Optimization",
      category: "quantum",
      categoryLabel: "Quantum Computing & Algorithms",
      featured: true,
      tagline: "QAOA & VQE-Driven Hybrid Quantum-Classical Asset Allocation",
      description: "A research-driven implementation solving the NP-hard Markowitz portfolio optimization problem using the Quantum Approximate Optimization Algorithm (QAOA) and classical co-optimization. Formulates the risk-return trade-off into an Ising Hamiltonian and evaluates variational quantum state evolution on simulated NISQ architectures.",
      highlights: [
        "Formulates quadratic unconstrained binary optimization (QUBO) matrices from historical covariance.",
        "Applies QAOA parameterized ansatz circuits to sample optimal discrete asset weighting sets.",
        "Benchmarks variational quantum solutions against classical Markowitz efficient frontiers."
      ],
      technologies: ["Python", "Qiskit", "QAOA", "NumPy", "Matplotlib", "Classical Optimizers"],
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

  additionalProjects: [
    {
      id: "quantum-circuit-bench",
      title: "Quantum Circuit Depth & Fidelity Benchmarker",
      category: "quantum",
      categoryLabel: "Quantum Computing",
      featured: false,
      tagline: "NISQ noise model simulation and quantum gate depth analyzer",
      description: "Tool evaluating quantum circuit fidelity across noisy quantum channels with depolarizing errors, thermal relaxation, and gate dephasing.",
      highlights: ["Gate count decomposition", "Noise model comparisons", "State tomography"],
      technologies: ["Qiskit", "Aer Simulator", "Python", "NumPy"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/quantum_bench.jpg",
        alt: "Quantum circuit benchmarking visualization",
        aspectRatio: "landscape"
      }
    },
    {
      id: "rag-knowledge-engine",
      title: "DocuSense RAG Knowledge Base",
      category: "generative-ai",
      categoryLabel: "Generative AI",
      featured: false,
      tagline: "Domain-grounded retrieval-augmented generation engine",
      description: "Enterprise PDF/technical document Q&A engine with dense vector semantic search, hybrid re-ranking, and hallucination reduction guards.",
      highlights: ["Hybrid vector & keyword search", "Source citation tracking", "Low latency chunking"],
      technologies: ["LangChain", "ChromaDB", "Python", "FastAPI", "React"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/docusense_rag.jpg",
        alt: "DocuSense RAG Knowledge Base Interface",
        aspectRatio: "landscape"
      }
    },
    {
      id: "vision-anomaly-detector",
      title: "Industrial Defect & Anomaly Detector",
      category: "ai-ml",
      categoryLabel: "Computer Vision",
      featured: false,
      tagline: "Unsupervised visual anomaly detection using convolutional autoencoders",
      description: "Computer vision pipeline that detects structural micro-defects in manufactured components with high sensitivity and zero labelled anomaly requirements.",
      highlights: ["Autoencoder reconstruction error", "Heatmap localization", "Real-time stream processing"],
      technologies: ["PyTorch", "OpenCV", "FastAPI", "NumPy"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/vision_anomaly.jpg",
        alt: "Industrial anomaly detection heatmaps",
        aspectRatio: "landscape"
      }
    },
    {
      id: "microservices-ecommerce-core",
      title: "Distributed Order & Inventory Core",
      category: "software",
      categoryLabel: "Software Engineering",
      featured: false,
      tagline: "Resilient Java-based backend service architecture",
      description: "Modular Java service handling concurrent transaction locking, inventory idempotency, and asynchronous event notifications.",
      highlights: ["ACID transaction handling", "Optimistic locking pattern", "RESTful endpoints"],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/java_backend.jpg",
        alt: "Distributed service architecture diagram",
        aspectRatio: "landscape"
      }
    },
    {
      id: "time-series-forecaster",
      title: "Multi-Variate Time Series Forecaster",
      category: "data-science",
      categoryLabel: "Data Science",
      featured: false,
      tagline: "Statistical and deep learning demand trend forecasting",
      description: "Comparative study and implementation of ARIMA, Prophet, and Temporal Convolutional Networks on volatile real-world sensor data.",
      highlights: ["Seasonal decomposition", "Error metric comparison (RMSE, MAPE)", "Interactive forecast plotting"],
      technologies: ["Python", "Pandas", "Statsmodels", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/timeseries_forecaster.jpg",
        alt: "Time series forecasting graphs",
        aspectRatio: "landscape"
      }
    },
    {
      id: "code-doc-assistant",
      title: "Contextual Code Intelligence Assistant",
      category: "generative-ai",
      categoryLabel: "Generative AI",
      featured: false,
      tagline: "Automated codebase summarizer and architecture documentation generator",
      description: "Parses AST trees of software repositories and feeds structured context into LLMs to automatically generate comprehensive developer documentation.",
      highlights: ["AST code structure parsing", "Automated markdown documentation", "Dependency mapping"],
      technologies: ["TypeScript", "Python", "LangChain", "Node.js"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/code_doc_gen.jpg",
        alt: "Code documentation assistant UI",
        aspectRatio: "landscape"
      }
    }
  ],

  achievements: [
    {
      id: "aqvh-challenge",
      title: "AQVH Portfolio Optimization Challenge",
      organization: "Autonomous Quantum & Variational Hackathon / Industry Consortium",
      date: "Competition Finalist",
      badge: "Finalist / Contender",
      stage: "Grand Finale Stage",
      description: "Spearheaded the algorithmic design and implementation of QAOA for real-world constrained portfolio allocation, advancing to the final competitive stages.",
      impactPoints: [
        "Formulated high-dimensional financial covariance matrices into compact QUBO representations.",
        "Demonstrated parameterized quantum circuit optimization under simulated NISQ constraints.",
        "Recognized by judges for clear mathematical formulation and computational rigor."
      ],
      image: {
        src: "/assets/images/achievements/aqvh_challenge.jpg",
        alt: "AQVH Portfolio Optimization Challenge Recognition",
        caption: "AQVH Challenge presentation and technical demonstration."
      }
    },
    {
      id: "quantum-coders-lead",
      title: "Quantum Coders — Team Leadership",
      organization: "National Technical & Quantum Innovation Hackathon",
      date: "Team Leadership",
      badge: "Team Lead",
      stage: "Leadership & Execution",
      description: "Served as the team lead for 'Quantum Coders', guiding architecture, task distribution, and quantum algorithm prototyping under tight hackathon sprint timelines.",
      impactPoints: [
        "Orchestrated cross-functional collaboration across algorithmic research, coding, and presentation.",
        "Ensured rigorous version control, modular code architecture, and high test coverage.",
        "Delivered end-to-end working proof of concept within 36 hours."
      ],
      image: {
        src: "/assets/images/achievements/quantum_coders.jpg",
        alt: "Quantum Coders Team Collaboration",
        caption: "Leading Quantum Coders team through intensive hackathon build."
      }
    },
    {
      id: "grand-finale-qualifier",
      title: "Grand Finale Qualification & Competition Recognition",
      organization: "Premier Collegiate & National Engineering Competitions",
      date: "Competitive Recognition",
      badge: "Grand Finalist",
      stage: "National Stage",
      description: "Qualified for the Grand Finale of premier collegiate technology hackathons after competitive screening rounds, demonstrating robust engineering problem-solving.",
      impactPoints: [
        "Pitched working prototypes to senior technical judges and industry domain experts.",
        "Selected among top contender teams out of extensive multi-round applicant pools.",
        "Exemplified technical precision in live demonstration and Q&A sessions."
      ],
      image: {
        src: "/assets/images/achievements/grand_finale.jpg",
        alt: "Grand Finale Hackathon Presentation and Stage",
        caption: "Live demonstration and competition defense during the Grand Finale."
      }
    },
    {
      id: "wiser-2026",
      title: "WISER 2026 Program Participation",
      organization: "Women in STEM, Engineering & Research Initiative",
      date: "Selected Cohort",
      badge: "Selected Participant",
      stage: "Mentorship & Research Cohort",
      description: "Selected to participate in the prestigious WISER 2026 program, engaging with research leaders, technical mentors, and fellow emerging engineers.",
      impactPoints: [
        "Engaged in advanced technical seminars spanning AI ethics, scalable computing, and research methodologies.",
        "Participated in peer technical exchange circles focusing on modern software engineering practices.",
        "Strengthened mentorship ties with seasoned industry and academic engineering leaders."
      ],
      image: {
        src: "/assets/images/achievements/wiser_2026.jpg",
        alt: "WISER 2026 Program Cohort & Sessions",
        caption: "WISER 2026 technical mentorship sessions and collaborative discussions."
      }
    },
    {
      id: "technical-accolades",
      title: "Institutional Technical & Academic Honors",
      organization: "Department of Computer Science & Engineering",
      date: "Ongoing Recognition",
      badge: "Academic Excellence",
      stage: "Institutional Honors",
      description: "Maintained a high cumulative GPA of 8.9/10 while actively participating in department technical symposia, coding leagues, and peer knowledge-sharing sessions.",
      impactPoints: [
        "Consistent academic excellence across core CS subjects: Data Structures, Algorithms, OS, DBMS.",
        "Active mentor for junior student developers in algorithmic problem-solving and Java paradigms.",
        "Organized departmental technical workshops introducing peers to modern Git and AI tooling."
      ],
      image: {
        src: "/assets/images/achievements/academic_honors.jpg",
        alt: "Technical and Academic Recognitions",
        caption: "Academic distinction and department technical community participation."
      }
    }
  ],

  certifications: [
    {
      id: "java-se-dev",
      title: "Java SE Programming & Object-Oriented Design",
      issuer: "ElevateIQ / Recognized Developer Certification",
      issueDate: "Verified Program",
      credentialId: "JSE-DEV-VERIFIED",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Core Java", "OOP Architecture", "Data Structures", "Multi-threading", "Exception Handling"],
      image: {
        src: "/assets/images/certificates/java_cert.jpg",
        alt: "Java SE Programming Certificate"
      }
    },
    {
      id: "ml-specialization",
      title: "Machine Learning & Statistical Learning Pipelines",
      issuer: "Premier Online Technical Specialization",
      issueDate: "Verified Credential",
      credentialId: "ML-SPEC-VERIFIED",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Supervised Learning", "Regression & Classification", "Neural Networks", "Gradient Boosting"],
      image: {
        src: "/assets/images/certificates/ml_cert.jpg",
        alt: "Machine Learning Specialization Certificate"
      }
    },
    {
      id: "quantum-fundamentals",
      title: "Quantum Computation & Variational Algorithms (Qiskit)",
      issuer: "Quantum Computing Foundations",
      issueDate: "Verified Credential",
      credentialId: "QISKIT-ALGO-VERIFIED",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Qiskit", "Quantum Circuits", "QAOA", "Bloch Sphere", "VQE"],
      image: {
        src: "/assets/images/certificates/quantum_cert.jpg",
        alt: "Quantum Computing Certificate"
      }
    },
    {
      id: "fullstack-systems",
      title: "Full-Stack Software Development & REST Architectures",
      issuer: "Software Engineering Professional Pathway",
      issueDate: "Verified Credential",
      credentialId: "SWE-ARCH-VERIFIED",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["REST APIs", "Modern Web Frameworks", "Git Workflows", "System Design"],
      image: {
        src: "/assets/images/certificates/swe_cert.jpg",
        alt: "Software Engineering Certificate"
      }
    }
  ],

  gallery: [
    {
      id: "hackathon-stage",
      title: "Grand Finale Live Presentation",
      category: "Hackathon",
      date: "Competition Defense",
      caption: "Presenting algorithmic architecture and live demo before hackathon jury.",
      aspectRatio: "landscape",
      image: {
        src: "/assets/images/gallery/gallery_hackathon_stage.jpg",
        alt: "Hackathon Grand Finale Presentation",
        objectPosition: "center"
      }
    },
    {
      id: "team-brainstorm",
      title: "Quantum Coders Sprint",
      category: "Team",
      date: "Sprint Session",
      caption: "Intense whiteboard sprint mapping QUBO matrix reduction during competition.",
      aspectRatio: "portrait",
      image: {
        src: "/assets/images/gallery/gallery_team_sprint.jpg",
        alt: "Quantum Coders Whiteboarding",
        objectPosition: "center"
      }
    },
    {
      id: "project-demo",
      title: "TrustLens.AI Live System Demo",
      category: "Demonstration",
      date: "Technical Demo",
      caption: "Showcasing real-time manipulated media detection to faculty and peers.",
      aspectRatio: "square",
      image: {
        src: "/assets/images/gallery/gallery_project_demo.jpg",
        alt: "TrustLens.AI Live System Demonstration",
        objectPosition: "center"
      }
    },
    {
      id: "workshop-lab",
      title: "Advanced AI Hands-On Workshop",
      category: "Workshop",
      date: "Technical Deep-Dive",
      caption: "Hands-on session analyzing deep feature representations and transformer attention maps.",
      aspectRatio: "landscape",
      image: {
        src: "/assets/images/gallery/gallery_workshop.jpg",
        alt: "AI Technical Workshop Session",
        objectPosition: "center"
      }
    },
    {
      id: "wiser-session",
      title: "WISER 2026 Cohort Exchange",
      category: "Technical Event",
      date: "Mentorship Gathering",
      caption: "Collaborating with researchers and engineers in the WISER 2026 initiative.",
      aspectRatio: "portrait",
      image: {
        src: "/assets/images/gallery/gallery_wiser_event.jpg",
        alt: "WISER 2026 Cohort Gathering",
        objectPosition: "center"
      }
    },
    {
      id: "awards-podium",
      title: "Challenge Recognition Ceremony",
      category: "Technical Event",
      date: "Award Ceremony",
      caption: "Celebrating finalist qualification and team recognition with peers.",
      aspectRatio: "square",
      image: {
        src: "/assets/images/gallery/gallery_award_stage.jpg",
        alt: "Challenge Recognition Ceremony",
        objectPosition: "center"
      }
    }
  ]
};
