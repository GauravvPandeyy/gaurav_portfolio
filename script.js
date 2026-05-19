// ==========================================
// 1. GLOBAL CONFIGURATION & DATA SOURCE
// ==========================================
const YOUR_EMAIL = "gauravpandey7245@gmail.com"; //
const RESUME_FILE_PATH = "assets/resume.pdf";

const skillCategories = [
  {
    title: "Databases & Programming",
    icon: "fas fa-database",
    color: "primary",
    skills: ["MySQL", "SQL Server", "Data Warehouse", "Python", "Pyspark"] //
  },
  {
    title: "Cloud & Big Data",
    icon: "fas fa-cloud",
    color: "secondary",
    skills: ["Microsoft Azure", "Synapse", "ADF", "Data Lake", "Delta Table", "Apache Spark", "Databricks"] //
  },
  {
    title: "Visualization & Models",
    icon: "fas fa-chart-bar",
    color: "accent",
    skills: ["Power BI", "SSRS", "DAX Measures", "Data Modelling", "SCD", "Common Data Modelling"] //
  },
  {
    title: "Orchestration & AI",
    icon: "fas fa-robot",
    color: "primary",
    skills: ["Apache Airflow","Databricks Workflow", "Docker Containerization", "LangChain", "OpenAI", "Agentic AI"] //
  }
];

const experiences = [
  {
    title: "Data Analyst", //
    company: "Wipro Ltd (Optum Technology)", //
    location: "Hyderabad, India", //
    period: "July 2021 – Current", //
    description: [
      "Designed and maintained 15+ interactive Power BI dashboards to track KPIs and SLA performance across teams.",
      "Automated Excel processes using complex DAX measures and data modelling, reducing report generation time by 60%.",
      "Integrated Service-now data with Power BI through REST APIs, ensuring real-time visibility of incident and SLA metrics.",
      "Designed and orchestrated end-to-end meta-data driven data pipelines using Azure Data Factory and transformed data following Medallion Architecture.",
      "Optimized Spark workloads by resolving data skew and performance bottlenecks, reducing processing time by 40%."
    ],
    technologies: ["Power BI", "SQL Server", "Python", "ADF", "Databricks", "Pyspark", "Apache Airflow", "Docker"], //
    icon: "fas fa-briefcase",
    color: "primary",
    current: true
  }
];

const projects = [
    {
    title: "Job Market Analytics", //
    description: "Engineered a scalable ETL pipeline using Apache Airflow, Docker, and SQL Server to automate data workflows. Processed API data with Python (Pandas) and created Power BI dashboards for actionable insights.", //
    technologies: ["Apache Airflow", "Docker", "SQL Server", "Python", "Pandas", "Power BI"], //
    category: "orchestration",
    icon: "fas fa-chart-line",
    gradient: "primary-secondary",
    githubUrl: "https://github.com/GauravvPandeyy/DE_Proj", //
    liveUrl: null,
    featured: true
  },
  {
    title: "Healthcare Revenue Cycle Management (RCM) ", //
    description: "Completed an enterprise-scale Healthcare Revenue Cycle Management (RCM) data platform leveraging Azure and Azure Databricks, designed around a metadata-driven architecture for scalable and maintainable data processing. Engineered ingestion frameworks for structured and API-based data sources, developed transformation pipelines using Databricks, and built curated Delta Lake layers with dimensional models and star schema design to enable high-performance analytical reporting and downstream business intelligence consumption.", //
    technologies: ["Azure Data Factory", "SQL Database", "Databricks", "PySpark", "Delta Table", "ADLS Gen2", "Azure Key Vault"], //
    category: "azure",
    icon: "fas fa-chart-line",
    gradient: "primary-secondary",
    githubUrl: "https://github.com/GauravvPandeyy/DE_Proj", //
    liveUrl: null,
    featured: true
  },
  {
    title: "Olympic Data Analytics", //
    description: "Built an end-to-end Azure data pipeline using ADF, Databricks, Synapse, Pyspark and Power BI. Processed and cleaned Olympic datasets to generate interactive insights on medal trends by country and athlete.", //
    technologies: ["Azure Data Factory", "Databricks", "Azure Synapse", "Pyspark", "Power BI"], //
    category: "azure",
    icon: "fas fa-trophy",
    gradient: "accent-primary",
    githubUrl: "https://github.com/Gauravvpandeyy", //
    liveUrl: null,
    featured: true
  }
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "azure", label: "Azure Cloud" },
  { id: "orchestration", label: "Pipelines & ETL" }
];

const HERO_TYPING_TEXTS = ["Data Analyst", "Azure Data Engineer", "Databricks Developer", "Business Analyst"]; //

// ==========================================
// 2. DOM INTERFACE ELEMENTS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const typingTextElement = document.getElementById("typing-text");
    const contactForm = document.getElementById("contact-form");
    const downloadResumeBtn = document.getElementById("download-resume");
    const scrollIndicator = document.getElementById("scroll-indicator");

    // Initialize Page Content
    initTheme();
    initTypingEffect(typingTextElement, HERO_TYPING_TEXTS);
    initSkills();
    initExperience();
    initProjects();
    initScrollTracking(scrollIndicator);

    // Menu Interactions
    mobileToggle.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
    themeToggle.addEventListener("click", toggleTheme);
    mobileThemeToggle.addEventListener("click", toggleTheme);

    // Resume Handler
    downloadResumeBtn.addEventListener("click", () => {
        window.open(RESUME_FILE_PATH, "_blank");
        showToast("Success", "Your resume download has been initiated.");
    });

    // Form Event Handler
    contactForm.addEventListener("submit", (e) => {
        // Safe check to verify action setup
        if(contactForm.getAttribute("action").includes("your_id_here")) {
            e.preventDefault();
            showToast("Notice", "Form submission is simulated. Please connect your Formspree ID inside index.html.");
        }
    });
});

// ==========================================
// 3. CORE APPLICATIVE LOGIC METRIC ENGINE
// ==========================================
function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        updateThemeIcons(true);
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
    const icons = document.querySelectorAll(".theme-toggle i");
    icons.forEach(icon => {
        icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    });
}

function initTypingEffect(element, texts) {
    let loopIdx = 0;
    let charIdx = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
        const fullText = texts[loopIdx % texts.length];
        if (isDeleting) {
            currentText = fullText.substring(0, charIdx - 1);
            charIdx--;
        } else {
            currentText = fullText.substring(0, charIdx + 1);
            charIdx++;
        }

        element.textContent = currentText;
        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIdx === fullText.length) {
            typeSpeed = 2000; // Pause at full string execution
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            loopIdx++;
            typeSpeed = 500; // Quick rest state change pause
        }
        setTimeout(type, typeSpeed);
    }
    type();
}

function initSkills() {
    const container = document.getElementById("skills-container");
    container.innerHTML = skillCategories.map(cat => `
        <div class="skill-card">
            <div class="skill-icon ${cat.color}"><i class="${cat.icon}"></i></div>
            <h3>${cat.title}</h3>
            <div class="skill-tags">
                ${cat.skills.map(s => `<span class="skill-tag ${cat.color}">${s}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function initExperience() {
    const container = document.getElementById("experience-container");
    const line = container.querySelector(".timeline-line");

    const elementsHtml = experiences.map(exp => `
        <div class="experience-item">
            <div class="timeline-dot ${exp.current ? 'current' : 'past'}"></div>
            <div class="experience-content">
                <div class="experience-card">
                    <div class="experience-header">
                        <div class="experience-icon ${exp.color}"><i class="${exp.icon}"></i></div>
                        <div class="experience-details">
                            <h3>${exp.title} ${exp.current ? '<span class="current-badge">Current</span>' : ''}</h3>
                            <div class="company-name ${exp.color}">${exp.company}</div>
                            <div class="experience-period">${exp.period} | ${exp.location}</div>
                        </div>
                    </div>
                    <div class="experience-description">
                        ${exp.description.map(desc => `<p>• ${desc}</p>`).join('')}
                    </div>
                    <div class="experience-tech">
                        ${exp.technologies.map(t => `<span class="tech-tag ${exp.color}">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = '';
    container.appendChild(line);
    container.insertAdjacentHTML('beforeend', elementsHtml);
}

function initProjects() {
    const filterContainer = document.getElementById("project-filters");
    const projectsContainer = document.getElementById("projects-container");

    // Build Filter Buttons
    filterContainer.innerHTML = filters.map((f, idx) => `
        <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${f.id}">${f.label}</button>
    `).join('');

    // Mount Strategy Filter Event Triggers
    filterContainer.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            renderProjects(e.target.dataset.filter);
        });
    });

    function renderProjects(filterId = "all") {
        const visibleProjects = filterId === "all" ? projects : projects.filter(p => p.category === filterId);
        projectsContainer.innerHTML = visibleProjects.map(proj => `
            <div class="project-card">
                <div class="project-image">
                    <div class="project-gradient ${proj.gradient}">
                        <div class="project-icon"><i class="${proj.icon}"></i></div>
                    </div>
                    <div class="project-overlay">
                        <p>Click details or repository link below to inspect source infrastructure.</p>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-title">
                        ${proj.title}
                        ${proj.featured ? '<span class="featured-badge">Featured</span>' : ''}
                    </div>
                    <p class="project-description">${proj.description}</p>
                    <div class="project-tech">
                        ${proj.technologies.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" class="project-link"><i class="fab fa-github"></i> Repository</a>` : ''}
                        ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" class="project-link secondary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderProjects();
}

function initScrollTracking(indicator) {
    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height);
        indicator.style.transform = `scaleX(${scrolled})`;
    });
}

function showToast(title, description) {
    const toast = document.getElementById("toast");
    const closeBtn = document.getElementById("toast-close");
    document.getElementById("toast-desc").textContent = description;

    toast.classList.remove("hidden");

    const dismiss = () => toast.classList.add("hidden");
    closeBtn.onclick = dismiss;
    setTimeout(dismiss, 4000);
}