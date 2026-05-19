// DOM Elements
const themeToggle = document.getElementById("theme-toggle");
const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const typingText = document.getElementById("typing-text");
const contactForm = document.getElementById("contact-form");
const downloadResumeBtn = document.getElementById("download-resume");
const toast = document.getElementById("toast");
const toastClose = document.getElementById("toast-close");

// Data
const skillCategories = [
  {
    title: "Languages",
    icon: "fas fa-code",
    color: "primary",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Go",
      "Solidity",
      "C++",
      "Rust",
      "Sql",
    ],
  },
  {
    title: "Frontend",
    icon: "fas fa-palette",
    color: "secondary",
    skills: ["React", "Redux", "Tailwind CSS", "HTML5", "NextJs", "WebRTC"],
  },
  {
    title: "Backend",
    icon: "fas fa-server",
    color: "accent",
    skills: [
      "Gin",
      "Spring Boot",
      "Node.js",
      "Express",
      "WebSocket",
      "gRPC",
      "NextJS",
      "kafka",
      "Microservice",
      "Redis MQ, Pub/Sub",
    ],
  },
  {
    title: "Database & Tools",
    icon: "fas fa-database",
    color: "primary",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Docker",
      "Git",
      "AWS",
      "Kubernetes",
      "Prometheus",
      "CI/CD",
    ],
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company: "IthiSaga Dev Pvt Ltd",
    location: "Hyderabad",
    period: "Feb 2025 – Feb 2026",
    description: [
      "Migrated entire frontend to React with role-based authorization",
      "Implemented map integration using MapMyIndia and Leaflet",
      "Working with PostgreSQL, Express, Docker Compose, and AWS",
    ],
    technologies: [
      "PostgreSQL",
      "React",
      "Express",
      "Docker",
      "AWS",
      "Docker-Compose",
    ],
    icon: "fas fa-briefcase",
    color: "primary",
    current: true,
  },
  {
    title: "Backend Developer Intern",
    company: "CourseConnect",
    location: "Bengaluru",
    period: "Nov 2024 – Jan 2025",
    description: [
      "Designed and developed full-stack application using Golang and Gin framework",
      "Optimized backend logic reducing storage usage by 80%",
      "Worked with Next.js and MySQL InnoDb for enhanced performance",
    ],
    technologies: ["Golang", "Gin", "Next.js", "MySQL"],
    icon: "fas fa-laptop-code",
    color: "secondary",
    current: false,
  },
];

const projects = [
  {
    title: "Virtual Metaverse Workspace",
    description:
      "Real-time 2D metaverse that functions as a virtual collaborative workspace, enabling users to navigate a digital environment and interact instantly with others, effectively replicating the immediacy of a physical office setting.",
    technologies: [
      "TypeScript",
      "Websockets",
      "React",
      "Postgres",
      "Node.js",
      "Prisma ORM",
    ],
    category: ["backend", "websockets", "fullstack", "realtime", "react"],
    icon: "fas fa-chart-line",
    gradient: "accent-primary",
    githubUrl: "https://github.com/AyushmaanPandey11/metaverse-game",
    featured: true,
  },
  {
    title: "Stock Exchange(LADDOO_INR)",
    description:
      "Exchange assets( Laddoo with INR ) using websockets and orderbook server for filling orders using in memory variable for faster realtime data. High-Level System having Api Server, Engine, Websockets and TimeScaleDb, Redis Queue & PubSub and Nextjs Frontend.",
    technologies: [
      "TypeScript",
      "Redis Pub/Subs",
      "Redis Queues",
      "Engine",
      "Websockets",
      "Next.js",
      "Postgres",
      "Docker",
      "Node.js",
    ],
    category: [
      "backend",
      "advance backend",
      "websockets",
      "fullstack",
      "realtime",
    ],
    icon: "fas fa-chart-line",
    gradient: "accent-primary",
    githubUrl: "https://github.com/AyushmaanPandey11/stock-exchange",
    featured: true,
  },
  {
    title: "gRPC Backend Implementation",
    description:
      "Backend application using gRPC and Proto Buffs to optimise the communication between systems.",
    technologies: ["TypeScript", "gRPC", "Node.js", "Scaling"],
    category: ["backend", "advance-backend"],
    icon: "fas fa-network-wired",
    gradient: "accent-primary",
    githubUrl: "https://github.com/AyushmaanPandey11/grpc-implementaion",
    featured: true,
  },
  {
    title: "Video Chat Application",
    description:
      "Full stack application with real-time Video Chat using WebSocket and WebRTC.",
    technologies: ["TypeScript", "WebSocket", "Node.js", "React", "WebRTC"],
    category: ["fullstack", "websocket", "react", "frontend"],
    icon: "fas fa-video",
    gradient: "accent-primary",
    githubUrl: "https://github.com/AyushmaanPandey11/video-chat-app",
    liveUrl: "https://video-chat-app-swart-delta.vercel.app/",
    featured: true,
  },
  {
    title: "Horizontally Scaled Websocket",
    description:
      "Backend application with real-time messaging using WebSocket horizontally scaled using Pub/Sub and follows Singleton Pattern.",
    technologies: [
      "TypeScript",
      "WebSocket",
      "Node.js",
      "Redis Pub/Sub",
      "Scaling",
    ],
    category: ["backend", "realtime", "websocket", "advance-backend"],
    icon: "fas fa-expand-arrows-alt",
    gradient: "accent-primary",
    githubUrl: "https://github.com/AyushmaanPandey11/scalable-chat",
    featured: true,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Full-stack chat application with real-time messaging using WebSocket, built with React TypeScript and deployed on Render.",
    technologies: ["React", "TypeScript", "WebSocket", "Node.js", "Render"],
    category: [
      "fullstack",
      "react",
      "realtime",
      "websocket",
      "advance-backend",
    ],
    icon: "fas fa-comments",
    gradient: "accent-primary",
    githubUrl: "https://github.com/AyushmaanPandey11/chat-app-ws",
    liveUrl: "https://chat-app-ws-2-3dx3.onrender.com/",
    featured: true,
  },
  {
    title: "Journal App",
    description:
      "Secure journal application built with Spring Boot, Spring Security, JWT token system, and MongoDB for personal diary management.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MongoDB"],
    category: ["java", "backend"],
    icon: "fas fa-book",
    gradient: "primary-secondary",
    githubUrl: "https://github.com/AyushmaanPandey11/journal-app",
    liveUrl: null,
    featured: true,
  },
  {
    title: "Job Portal",
    description:
      "Full-stack job portal developed with Spring Boot, Spring Security, JWT authentication, and PostgreSQL database.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "JDBC",
    ],
    category: ["java", "backend"],
    icon: "fas fa-briefcase",
    gradient: "secondary-accent",
    githubUrl: "https://github.com/AyushmaanPandey11/job-portal",
    liveUrl: null,
    featured: true,
  },
  {
    title: "Quiz Microservice",
    description:
      "Simple Implementation of a Microservice in Java using Spring Boot, Eureka Service Registry, Api gateway, postgres database and docker for a quiz application.",
    technologies: [
      "Java",
      "Spring Boot",
      "Eureka Serive Registry",
      "Api Gateway",
      "PostgreSQL",
      "Docker",
    ],
    category: ["java", "backend"],
    icon: "fas fa-briefcase",
    gradient: "secondary-accent",
    githubUrl: "https://github.com/AyushmaanPandey11/quiz-microservice",
    liveUrl: null,
    featured: true,
  },
  {
    title: "Movie Recommendation App",
    description:
      "React-based movie recommendation system using free movie APIs, Firebase authentication, and Redux for state management.",
    technologies: ["React", "Redux", "Firebase", "Movie API", "JavaScript"],
    category: ["frontend", "react"],
    icon: "fas fa-film",
    gradient: "accent-primary",
    githubUrl: "https://github.com/AyushmaanPandey11/Movie-Recommendation-App",
    liveUrl: null,
    featured: true,
  },
  {
    title: "Food Delivery App",
    description:
      "Food delivery application using Swiggy API for restaurant and food selection with cart management functionality.",
    technologies: ["React", "Redux", "Swiggy API", "JavaScript", "CSS"],
    category: ["frontend", "react"],
    icon: "fas fa-utensils",
    gradient: "primary-secondary",
    githubUrl: "https://github.com/AyushmaanPandey11/Food-Delivery-App",
    liveUrl: "https://food-delivery-app-kappa-lovat.vercel.app",
    featured: true,
  },
  {
    title: "Kickstarter Blockchain",
    description:
      "Ethereum blockchain-based crowdfunding platform solving kickstarter scam issues by giving fund allocation power to contributors.",
    technologies: [
      "Solidity",
      "Ethereum",
      "Blockchain",
      "Smart Contracts",
      "Web3",
    ],
    category: ["blockchain", "solidity"],
    icon: "fas fa-coins",
    gradient: "secondary-accent",
    githubUrl: "https://github.com/AyushmaanPandey11/kickstarter",
    liveUrl: null,
    featured: true,
  },
  {
    title: "Event Booking App",
    description:
      "Secure event booking application built with GoLang and Gin framework, featuring user authentication and SQLite database.",
    technologies: ["GoLang", "Gin", "SQLite", "JWT", "Bcrypt"],
    category: ["golang", "backend"],
    icon: "fas fa-calendar-check",
    gradient: "secondary-accent",
    githubUrl: "https://github.com/AyushmaanPandey11/event-booking",
    liveUrl: null,
    featured: false,
  },
  {
    title: "Cross-Currency Payment Interface",
    description:
      "End-to-end payment solution facilitating transactions in any currency with pseudonymity. Built with MERN stack and Live Currency API.",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Express", "JWT"],
    category: ["fullstack", "react"],
    icon: "fas fa-credit-card",
    gradient: "accent-primary",
    githubUrl: "https://github.com/AyushmaanPandey11/PiedPiper",
    liveUrl: "#",
    featured: false,
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "java", label: "Java" },
  { id: "golang", label: "Go" },
  { id: "react", label: "React" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "blockchain", label: "Blockchain" },
  { id: "websocket", label: "Websockets" },
  { id: "advance-backend", label: "Advance Backend" },
];

// State
let activeFilter = "all";
let isDarkMode = false;

// Initialize application
document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  initNavigation();
  initTypingEffect();
  initScrollProgress();
  initSkills();
  initExperience();
  initProjects();
  initContactForm();
  initResumeDownload();
  initSmoothScroll();
  initToast();
  initAnimationObserver();
});

// Theme Management
function initTheme() {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  isDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  }

  updateThemeIcons();

  // Add event listeners
  themeToggle?.addEventListener("click", toggleTheme);
  mobileThemeToggle?.addEventListener("click", toggleTheme);
}

function toggleTheme() {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  updateThemeIcons();
}

function updateThemeIcons() {
  const icons = [
    themeToggle?.querySelector("i"),
    mobileThemeToggle?.querySelector("i"),
  ];
  const text = mobileThemeToggle?.querySelector("span");

  icons.forEach((icon) => {
    if (icon) {
      icon.className = isDarkMode ? "fas fa-sun" : "fas fa-moon";
    }
  });

  if (text) {
    text.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  }
}

// Navigation
function initNavigation() {
  mobileToggle?.addEventListener("click", toggleMobileMenu);

  // Add click listeners to all navigation links
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        scrollToSection(href.substring(1));
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          toggleMobileMenu();
        }
      }
    });
  });
}

function toggleMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Account for fixed navbar
    const elementTop = element.offsetTop - offset;
    window.scrollTo({
      top: elementTop,
      behavior: "smooth",
    });
  }
}

// Smooth scroll for hero buttons
function initSmoothScroll() {
  const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
  heroButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const href = button.getAttribute("href");
      scrollToSection(href.substring(1));
    });
  });
}

// Typing Effect
function initTypingEffect() {
  if (!typingText) return;

  const fullText = "Full Stack Developer";
  let currentIndex = 0;

  function typeText() {
    if (currentIndex <= fullText.length) {
      typingText.textContent = fullText.slice(0, currentIndex);
      currentIndex++;
      setTimeout(typeText, 100);
    }
  }

  // Start typing effect after a short delay
  setTimeout(typeText, 1000);
}

// Scroll Progress
function initScrollProgress() {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (!scrollIndicator) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / documentHeight) * 100;

    scrollIndicator.style.transform = `scaleX(${progress / 100})`;
  });
}

// Skills Section
function initSkills() {
  const skillsGrid = document.getElementById("skills-grid");
  if (!skillsGrid) return;

  skillsGrid.innerHTML = skillCategories
    .map(
      (category) => `
    <div class="skill-card animate-slide-up">
      <div class="skill-icon ${category.color}">
        <i class="${category.icon}"></i>
      </div>
      <h3>${category.title}</h3>
      <div class="skill-tags">
        ${category.skills
          .map(
            (skill) =>
              `<span class="skill-tag ${category.color}">${skill}</span>`,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

// Experience Section
function initExperience() {
  const experienceTimeline = document.getElementById("experience-timeline");
  if (!experienceTimeline) return;

  experienceTimeline.innerHTML = experiences
    .map(
      (exp, index) => `
    <div class="experience-item">
      <div class="experience-content">
        <div class="experience-card animate-slide-up">
          <div class="experience-header">
            <div class="experience-icon ${exp.color}">
              <i class="${exp.icon}"></i>
            </div>
            <div class="experience-details">
              <h3>
                ${exp.title}
                ${
                  exp.current
                    ? '<span class="current-badge">Current</span>'
                    : ""
                }
              </h3>
              <p class="company-name ${exp.color}">${exp.company}</p>
              <p class="experience-period">${exp.period}</p>
            </div>
          </div>
          <div class="experience-description">
            ${exp.description.map((desc) => `<p>• ${desc}</p>`).join("")}
          </div>
          <div class="experience-tech">
            ${exp.technologies
              .map(
                (tech) => `<span class="tech-tag ${exp.color}">${tech}</span>`,
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="timeline-dot ${exp.current ? "current" : "past"}"></div>
    </div>
  `,
    )
    .join("");
}

// Projects Section
function initProjects() {
  const projectFilters = document.getElementById("project-filters");
  const projectsGrid = document.getElementById("projects-grid");

  if (!projectFilters || !projectsGrid) return;

  // Render filters
  projectFilters.innerHTML = filters
    .map(
      (filter) => `
    <button class="filter-btn ${filter.id === activeFilter ? "active" : ""}" 
            data-filter="${filter.id}">
      ${filter.label}
    </button>
  `,
    )
    .join("");

  // Add filter event listeners
  projectFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      const filterId = e.target.dataset.filter;
      setActiveFilter(filterId);
    }
  });

  // Initial render
  renderProjects();
}

function setActiveFilter(filterId) {
  activeFilter = filterId;

  // Update filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filterId);
  });

  renderProjects();
}

function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
    <div class="project-card">
      <div class="project-image">
        <div class="project-gradient ${project.gradient}">
          <i class="${project.icon} project-icon"></i>
          <div class="project-overlay">
            <div>
              <i class="fas fa-external-link-alt" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
              <p>View Project</p>
            </div>
          </div>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">
          ${project.title}
          ${
            project.featured
              ? '<span class="featured-badge">Featured</span>'
              : ""
          }
        </h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies
            .map((tech) => `<span class="project-tech-tag">${tech}</span>`)
            .join("")}
        </div>
        <div class="project-links">
          <a href="${
            project.githubUrl
          }" class="project-link" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> GitHub
          </a>
          ${
            project.liveUrl
              ? `<a href="${project.liveUrl}" class="project-link secondary" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>`
              : ""
          }
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// Contact Form
function initContactForm() {
  if (!contactForm) {
    console.warn("Contact form not found");
    return;
  }

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const submitText = document.getElementById("submit-text");

    if (!submitBtn || !submitText) {
      console.warn("Submit button or text element not found");
      return;
    }

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Basic validation
    if (!name || !email || !subject || !message) {
      showToast("Validation Error", "Please fill in all fields.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showToast(
        "Invalid Email",
        "Please enter a valid email address.",
        "error",
      );
      return;
    }

    // Disable form and show loading
    submitBtn.disabled = true;
    submitText.textContent = "Sending...";

    try {
      // Simulate form submission (in real app, you'd send to a server)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Create mailto link as fallback
      const mailtoLink = `mailto:ayushmaan1122pandey@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      )}`;
      window.location.href = mailtoLink;

      showToast(
        "Message prepared!",
        "Your email client will open with the message ready to send.",
        "success",
      );
      contactForm.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      showToast(
        "Error",
        "Failed to prepare message. Please try again.",
        "error",
      );
    } finally {
      submitBtn.disabled = false;
      submitText.textContent = "Send Message";
    }
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Resume Download
function initResumeDownload() {
  if (!downloadResumeBtn) {
    console.warn("Download resume button not found");
    return;
  }

  downloadResumeBtn.addEventListener("click", () => {
    try {
      const link = document.createElement("a");
      link.href = "assets/resume.pdf";
      link.download = "Ayushmaan_Pandey_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast("Download Started", "Resume download has begun.", "success");
    } catch (error) {
      console.error("Resume download error:", error);
      showToast(
        "Download Error",
        "Failed to download resume. Please try again.",
        "error",
      );
    }
  });
}

// Toast Notifications
function initToast() {
  if (toastClose) {
    toastClose.addEventListener("click", hideToast);
  }
}

function showToast(title, description, type = "success") {
  if (!toast) return;

  const toastTitle = toast.querySelector(".toast-title");
  const toastDescription = toast.querySelector(".toast-description");
  const toastIcon = toast.querySelector(".toast-icon i");

  if (toastTitle) toastTitle.textContent = title;
  if (toastDescription) toastDescription.textContent = description;

  if (toastIcon) {
    toastIcon.className =
      type === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle";
  }

  toast.classList.remove("hidden");

  // Auto-hide after 5 seconds
  setTimeout(hideToast, 5000);
}

function hideToast() {
  if (toast) {
    toast.classList.add("hidden");
  }
}

// Intersection Observer for animations
function initAnimationObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll(
    ".skill-card, .experience-card, .project-card",
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// Initialize animation observer when DOM is loaded
document.addEventListener("DOMContentLoaded", initAnimationObserver);
