# SAHITHI PORTFOLIO — CONTENT & IMAGE EDITING GUIDE

Welcome to your personal portfolio codebase! This guide explains how to easily customize your content, photographs, project screenshots, certificates, and resume without touching complex React logic.

All portfolio content is centrally managed in **one single file**:
📂 `src/data/portfolio.ts`

---

## 1. Directory Structure for Images & Assets

Place your actual photographs, screenshots, and PDFs in the appropriate directories under `public/assets/`:

```
public/
  assets/
    images/
      profile/          <-- Your portrait and headshot photos
      projects/         <-- Project screenshots, architecture diagrams, UI captures
      events/           <-- Technical workshops, hackathons, seminars
      achievements/     <-- Award ceremonies, trophies, competition stages
      certificates/     <-- Certificates of completion, credentials
      gallery/          <-- Event moments, team sprints, demos
    resume/
      Sahithi_Parepalli_Resume.pdf  <-- Your PDF resume
```

---

## 2. How to Change Your Profile Picture

1. Save your professional portrait photo (JPG, PNG, or WebP) inside:
   `public/assets/images/profile/sahithi_portrait.jpg`
2. Open `src/data/portfolio.ts`.
3. Locate the `profileImage` block under `personal`:
   ```ts
   profileImage: {
     src: "/assets/images/profile/sahithi_portrait.jpg",
     alt: "Naga Venkata Sahithi Parepalli — Software Engineer & AI Specialist",
     caption: "Sahithi Parepalli — Building intelligent applications with algorithmic rigor.",
     objectPosition: "center 25%", // Adjust framing (e.g. 'top', 'center', '50% 20%')
     aspectRatio: "portrait"
   }
   ```
4. If your image file has a different name (e.g., `my_photo.png`), simply change `src: "/assets/images/profile/my_photo.png"`.
5. Adjust `objectPosition` to fine-tune cropping so your face is perfectly centered.

---

## 3. How to Add Project Screenshots & Links

1. Save your project screenshot in:
   `public/assets/images/projects/your_project_name.jpg`
2. Open `src/data/portfolio.ts`.
3. Locate `featuredProjects` (for TrustLens.AI, AI-PriceOptima, Hybrid Quantum Portfolio) or `additionalProjects`.
4. Update the project fields:
   ```ts
   {
     id: "trustlens-ai",
     title: "TrustLens.AI",
     category: "ai-ml",
     categoryLabel: "Multimodal AI & Forensics",
     featured: true,
     tagline: "Multimodal Media-Forensics Platform for Manipulated-Media Detection",
     description: "Your project description...",
     highlights: [
       "Highlight point 1",
       "Highlight point 2"
     ],
     technologies: ["Python", "PyTorch", "OpenCV", "Transformers", "FastAPI"],
     githubUrl: "https://github.com/Parepallinagavenkatasahithi/TrustLens.AI",
     liveUrl: "https://your-live-demo-url.com", // Optional: leave undefined if not deployed
     image: {
       src: "/assets/images/projects/trustlens_ai.jpg",
       alt: "TrustLens.AI Interface",
       caption: "Deepfake and manipulated media detection interface.",
       aspectRatio: "wide"
     }
   }
   ```

---

## 4. How to Update Experience (ElevateIQ)

Open `src/data/portfolio.ts` and locate the `experience` array:
```ts
experience: [
  {
    id: "elevateiq-java",
    role: "Java Developer",
    company: "ElevateIQ",
    period: "June 2024 – Present", // Update with your actual dates
    location: "Remote / Hybrid",   // Update with your location
    type: "Professional Engineering Experience",
    summary: "Your summary...",
    responsibilities: [
      "Engineered scalable backend modules...",
      "Designed robust RESTful services..."
    ],
    technologies: ["Java", "OOP", "Data Structures", "REST APIs", "Git", "SQL"]
  }
]
```

---

## 5. How to Add Event Photographs & Hackathon Moments

1. Save the photo in `public/assets/images/gallery/` (e.g. `hackathon_win.jpg`).
2. Open `src/data/portfolio.ts` and locate the `gallery` array:
   ```ts
   {
     id: "hackathon-stage",
     title: "Grand Finale Live Presentation",
     category: "Hackathon", // 'Hackathon' | 'Technical Event' | 'Workshop' | 'Team' | 'Demonstration'
     date: "Competition Defense",
     caption: "Presenting algorithmic architecture before the jury.",
     aspectRatio: "landscape", // 'square' | 'portrait' | 'landscape'
     image: {
       src: "/assets/images/gallery/hackathon_win.jpg",
       alt: "Grand Finale Live Presentation",
       objectPosition: "center"
     }
   }
   ```

---

## 6. How to Replace Certificates

1. Save your certificate image in `public/assets/images/certificates/` (e.g. `java_cert.jpg`).
2. In `src/data/portfolio.ts`, update the `certifications` array:
   ```ts
   {
     id: "java-se-dev",
     title: "Java SE Programming & Object-Oriented Design",
     issuer: "ElevateIQ / Recognized Developer Certification",
     issueDate: "2024",
     credentialId: "YOUR-ACTUAL-CREDENTIAL-ID",
     credentialUrl: "https://your-verification-link.com",
     skills: ["Core Java", "OOP", "Data Structures"],
     image: {
       src: "/assets/images/certificates/java_cert.jpg",
       alt: "Java SE Programming Certificate"
     }
   }
   ```

---

## 7. How to Replace Your Resume

1. Export your resume as a PDF.
2. Rename it to:
   `Sahithi_Parepalli_Resume.pdf`
3. Place it in:
   `public/assets/resume/Sahithi_Parepalli_Resume.pdf`
4. The website's "Resume" buttons across the Navbar, Hero, Contact, and Footer will immediately link to and download your new PDF!

---

## 8. How to Update Your Email and Social Links

In `src/data/portfolio.ts`, find the `social` block inside `personal`:
```ts
social: {
  github: "https://github.com/Parepallinagavenkatasahithi",
  linkedin: "https://linkedin.com/in/naga-venkata-sahithi/",
  email: "mailto:yourname@gmail.com",       // Clicking 'Send Mail' will open this
  displayEmail: "yourname@gmail.com"        // Shown on screen and copied to clipboard
}
```

---

## 9. Running the Website Locally

To start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

To create a production build:
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 10. Free One-Click Deployment (GitHub Pages or Vercel)

### Option A: Deploy to GitHub Pages
1. Install `gh-pages` if desired or use GitHub Actions:
   Add a GitHub Actions workflow `.github/workflows/deploy.yml` to automatically build and deploy `dist/` to GitHub Pages whenever you push to `main`.
2. Ensure `base: '/Portfolio/'` is set in `vite.config.ts` if deploying under `https://Parepallinagavenkatasahithi.github.io/Portfolio/`.

### Option B: Deploy to Vercel / Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Click **Deploy**. Your site will be live on a custom URL with free SSL in less than 60 seconds!
