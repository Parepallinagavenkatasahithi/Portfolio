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
      "I'm Sahithi — a Computer Science Engineering student passionate about transforming complex algorithmic ideas into intelligent, real-world solutions. With an academic CGPA of 8.9 / 10.0 and hands-on experience across multiple internships, I've built a strong foundation in software engineering, Quantum Computing, AI/ML, and cloud systems, driven by deep curiosity and continuous learning.",
      "Through hands-on engineering roles at ElevateIQ Soft Tech, Infosys Springboard, Edunet Foundation, and Axcentra, I've developed end-to-end multimodal forensics systems, dynamic pricing engines, intelligent chatbots, and cloud workflows.",
      "One of my flagship achievements was leading team 'Quantum Coders' to secure 1st place in the semifinals of the Amaravati Quantum Valley Hackathon 2025 (AQVH916) and advancing to the Grand Finale with an INR 10,000 prize. We engineered a hybrid quantum-classical QAOA portfolio optimizer, earning recognition from APSCHE, IBM, and TCS with regional media coverage.",
      "I was also selected among the top 3,000 out of 65,000+ applicants for the WISER (BQPhy®) Quantum Computing Program, earned a fully funded $1,000 seat in the WISER Summer Program 2026, and received the Quantum Innovation Excellence Award at SRM University AP's 36-hour QC² national hackathon."
    ],
    problemSolvingPhilosophy: "Code with purpose, learn with passion, and build with heart. First-principles deconstruction, modular software design, and verifiable algorithmic correctness.",
    education: {
      college: "PSCMR College of Engineering and Technology (PSCMRCET)",
      university: "Jawaharlal Nehru Technological University Kakinada (JNTUK)",
      degree: "B.Tech in Computer Science and Engineering",
      status: "Currently Pursuing B.Tech", // NEVER graduate or 2027 graduate
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

  // Organizations & Internships ticker for the dark band
  companiesWorkedWith: [
    { name: "ElevateIQ Soft Tech", role: "Java Software Engineer", period: "Aug 2026 – Present" },
    { name: "Infosys Springboard", role: "AI Intern & Pragati Cohort 5", period: "2025" },
    { name: "Edunet Foundation", role: "AI & Cloud Intern", period: "2025" },
    { name: "Axcentra", role: "ML & AI Intern", period: "2025" },
    { name: "SkillDzire", role: "Artificial Intelligence Intern", period: "2025" },
    { name: "WISER Quantum (BQPhy®)", role: "Selected Cohort & Summer 2026", period: "2025 – 2026" },
    { name: "SRM University AP (QC²)", role: "Quantum Innovation Award", period: "2026" },
    { name: "Skill Wallet", role: "AI/ML Training", period: "2026" },
    { name: "CodeAlpha", role: "Python Programming Intern", period: "2025" },
    { name: "StaxTech", role: "Software Developer", period: "2025" }
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
    },
    {
      id: "infosys-pragati-cohort5",
      role: "Pragati Path To Future (Cohort-5)",
      company: "Infosys Springboard",
      period: "April 2025 – July 2025",
      location: "Virtual / Remote",
      type: "Selective 10-Week Cohort",
      summary: "Completed the prestigious Infosys Pragathi Cohort 5 program gaining practical exposure to Python programming, data science fundamentals, AI concepts, and core software engineering principles.",
      responsibilities: [
        "Mastered advanced Python programming, data science workflows, and software engineering design principles.",
        "Collaborated with peers on team-based technical sprints and modular software deliverables.",
        "Refined technical communication, resume building, and professional development through structured instructor-led modules."
      ],
      technologies: ["Python", "Data Science", "AI Fundamentals", "Software Engineering", "Agile Collaboration"]
    },
    {
      id: "edunet-ai-cloud",
      role: "Artificial Intelligence & Cloud Technology Intern",
      company: "Edunet Foundation",
      period: "September 2025 – November 2025",
      location: "Virtual / Remote",
      type: "AI & Cloud Internship",
      summary: "Worked as an AI & Cloud Intern developing an AI-based Travel Planner web application with real-time multi-API orchestration.",
      responsibilities: [
        "Developed an AI-based Travel Planner web app using Python and Streamlit.",
        "Integrated OpenAI, OpenWeather, and OpenCage APIs for real-time itinerary generation, live weather data, and location mapping.",
        "Gained hands-on experience in API integration, cloud deployment, and AI-driven application development."
      ],
      technologies: ["Python", "Streamlit", "OpenAI API", "OpenWeather API", "OpenCage API", "Cloud Deployment"]
    },
    {
      id: "axcentra-intern",
      role: "Machine Learning & AI Intern",
      company: "Axcentra",
      period: "October 2025 – November 2025",
      location: "Virtual / Remote",
      type: "Internship",
      summary: "Collaborated on machine learning model development, data preprocessing pipelines, and exploratory data analysis for intelligent predictive services.",
      responsibilities: [
        "Implemented supervised learning pipelines and evaluated performance on structured datasets.",
        "Cleaned and engineered domain-specific features to boost classification and regression metrics.",
        "Documented algorithmic findings and presented results to senior engineering mentors."
      ],
      technologies: ["Python", "Scikit-Learn", "Data Preprocessing", "Feature Engineering", "Git"]
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

  additionalProjects: [
    {
      id: "ai-travel-planner",
      title: "AI-Powered Travel Planner",
      category: "generative-ai",
      categoryLabel: "Generative AI & Cloud",
      featured: false,
      tagline: "Multi-API intelligent itinerary generation and live mapping",
      description: "Built during Edunet Foundation internship using Python and Streamlit. Integrates OpenAI, OpenWeather, and OpenCage APIs for real-time personalized travel planning, weather forecasting, and location intelligence.",
      highlights: ["OpenAI LLM prompt orchestration", "Live weather and geo-coordinate APIs", "Interactive Streamlit UI"],
      technologies: ["Python", "Streamlit", "OpenAI API", "OpenWeather", "OpenCage"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/travel_planner.jpg",
        alt: "AI Travel Planner Interface",
        aspectRatio: "landscape"
      }
    },
    {
      id: "ai-nlp-chatbot",
      title: "Intelligent Customer Support Chatbot",
      category: "ai-ml",
      categoryLabel: "NLP & Conversational AI",
      featured: false,
      tagline: "High-accuracy intent recognition chatbot for automated query resolution",
      description: "Developed during Infosys Springboard AI internship. Employs NLP preprocessing, TF-IDF / transformer embeddings, and intent classification achieving 90%+ query accuracy for automated support workflows.",
      highlights: ["90%+ query intent accuracy", "Contextual fallback handling", "Low latency inference"],
      technologies: ["Python", "NLP", "Scikit-Learn", "Flask", "NLTK"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/ai_chatbot.jpg",
        alt: "Intelligent Customer Support Chatbot",
        aspectRatio: "landscape"
      }
    },
    {
      id: "quantum-circuit-bench",
      title: "Quantum Circuit Depth & Noise Analyzer",
      category: "quantum",
      categoryLabel: "Quantum Computing",
      featured: false,
      tagline: "NISQ noise model simulation and quantum gate depth analyzer",
      description: "Evaluates quantum circuit fidelity across noisy quantum channels with depolarizing errors, thermal relaxation, and gate dephasing using Qiskit Aer simulator.",
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
      id: "enterprise-java-core",
      title: "ElevateIQ Java Core Services",
      category: "software",
      categoryLabel: "Software Engineering",
      featured: false,
      tagline: "Structured OOP Java backend modules and API handlers",
      description: "Modular enterprise Java application routines engineered with clean architecture, robust exception handling, and relational DBMS persistence.",
      highlights: ["Clean OOP architecture", "Robust exception handling", "REST API integration"],
      technologies: ["Java", "OOP", "SQL", "REST APIs", "Git"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/java_backend.jpg",
        alt: "Enterprise Java Core architecture",
        aspectRatio: "landscape"
      }
    },
    {
      id: "route-optimization-engine",
      title: "Algorithmic Route & Fleet Optimizer",
      category: "data-science",
      categoryLabel: "Optimization & Graph Algorithms",
      featured: false,
      tagline: "Vehicle routing and cost-minimization optimization engine",
      description: "Applies graph algorithms, heuristic distance matrices, and constraint satisfaction to optimize delivery routing and travel times.",
      highlights: ["Graph distance matrices", "Heuristic optimization", "Cost reduction simulations"],
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/route_optimizer.jpg",
        alt: "Route Optimization Engine",
        aspectRatio: "landscape"
      }
    },
    {
      id: "genai-gemini-suite",
      title: "Gemini & Vertex AI Multimodal Assistant",
      category: "generative-ai",
      categoryLabel: "Generative AI",
      featured: false,
      tagline: "Exploration of Gemini 1.5 and Imagen on Vertex AI",
      description: "Hands-on projects built with Google AI Studio and Vertex AI exploring multi-turn conversational agents, multimodal vision prompts, and Imagen image generation pipelines.",
      highlights: ["Gemini API integration", "Multimodal prompt engineering", "Vertex AI deployment"],
      technologies: ["Google AI Studio", "Vertex AI", "Gemini API", "Python"],
      githubUrl: "https://github.com/Parepallinagavenkatasahithi",
      image: {
        src: "/assets/images/projects/gemini_assistant.jpg",
        alt: "Gemini and Vertex AI Suite",
        aspectRatio: "landscape"
      }
    }
  ],

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
    },
    {
      id: "academic-distinction",
      title: "Academic Excellence — 8.9 CGPA & Department Honors",
      organization: "PSCMR College of Engineering and Technology (PSCMRCET)",
      date: "Ongoing",
      badge: "CGPA: 8.9 / 10.0",
      stage: "Institutional Honors",
      description: "Maintaining a stellar cumulative GPA of 8.9/10 while actively driving technical hackathons, peer workshops, and research initiatives.",
      impactPoints: [
        "Consistent top-tier academic standing across core CS curriculum.",
        "Mentoring peers in Java, data structures, and algorithmic optimization.",
        "Schooling foundations: 91% in Intermediate (MPC) and 98% in Class X."
      ],
      image: {
        src: "/assets/images/achievements/academic_honors.jpg",
        alt: "Academic Distinction and Department Honors",
        caption: "Academic distinction with 8.9 CGPA at PSCMRCET."
      }
    }
  ],

  certifications: [
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
      id: "cert-wiser-quantum",
      title: "Quantum Fundamentals from WISER",
      issuer: "WISER (BQPhy®)",
      issueDate: "Verified Program",
      credentialId: "WISER-Q-FUNDAMENTALS",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Quantum Physics", "Quantum Computation", "Linear Algebra", "Qubit Systems"],
      image: {
        src: "/assets/images/certificates/wiser_cert.jpg",
        alt: "WISER Quantum Fundamentals Certificate"
      }
    },
    {
      id: "cert-gemini-vertex",
      title: "Explore Generative AI with the Gemini API in Vertex AI",
      issuer: "Google Cloud / Vertex AI",
      issueDate: "Google Cloud Credential",
      credentialId: "GCLOUD-GEMINI-VERTEX",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Gemini API", "Vertex AI", "Prompt Engineering", "Multimodal LLMs"],
      image: {
        src: "/assets/images/certificates/google_cert.jpg",
        alt: "Google Cloud Vertex AI Gemini Certificate"
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
    },
    {
      id: "cert-aws-apac",
      title: "AWS APAC - Solutions Architecture Job Simulation",
      issuer: "Amazon Web Services (AWS) / Forage",
      issueDate: "AWS Credential",
      credentialId: "AWS-APAC-ARCH-SIM",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Cloud Architecture", "AWS Well-Architected", "Scalability", "System Security"],
      image: {
        src: "/assets/images/certificates/aws_cert.jpg",
        alt: "AWS APAC Solutions Architecture Certificate"
      }
    },
    {
      id: "cert-java-se",
      title: "Java SE Programming & Object-Oriented Architecture",
      issuer: "ElevateIQ Soft Tech",
      issueDate: "Professional Credential",
      credentialId: "ELEVATEIQ-JAVA-DEV",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Core Java", "OOP Architecture", "Data Structures", "Multi-threading", "Exception Handling"],
      image: {
        src: "/assets/images/certificates/java_cert.jpg",
        alt: "Java SE Programming Certificate"
      }
    },
    {
      id: "cert-ml-spec",
      title: "Machine Learning & Statistical Pipelines Specialization",
      issuer: "Machine Learning Foundations / GDSC",
      issueDate: "Verified Specialization",
      credentialId: "ML-PIPELINES-VERIFIED",
      credentialUrl: "https://github.com/Parepallinagavenkatasahithi",
      skills: ["Supervised Learning", "Gradient Boosting", "Deep Learning", "Evaluation Metrics"],
      image: {
        src: "/assets/images/certificates/ml_cert.jpg",
        alt: "Machine Learning Specialization Certificate"
      }
    }
  ],

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
      id: "workshop-lab",
      title: "AI Hands-On Technical Deep-Dive",
      category: "Workshop",
      date: "Technical Deep-Dive",
      caption: "Hands-on session exploring deep feature representations and gradient attribution maps.",
      aspectRatio: "landscape",
      image: {
        src: "/assets/images/gallery/gallery_workshop.jpg",
        alt: "AI Technical Workshop Session",
        objectPosition: "center"
      }
    },
    {
      id: "wiser-session",
      title: "WISER Quantum Cohort Gathering",
      category: "Technical Event",
      date: "Research Exchange",
      caption: "Collaborating with researchers and international peers in the WISER initiative.",
      aspectRatio: "portrait",
      image: {
        src: "/assets/images/gallery/gallery_wiser_event.jpg",
        alt: "WISER Quantum Cohort Gathering",
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
