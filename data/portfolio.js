const portfolio = {
    personal: {
        name: "AKRAM BHAT",
        jobTitle: "Software Engineer | Applied AI Engineer",
        github: "https://github.com/akrambhat",
        linkedin: "https://www.linkedin.com/in/akrambhat/",
        email: "bhatakram07@gmail.com",
        githubDisplay: "github.com/akrambhat",
        linkedinDisplay: "linkedin.com/in/akrambhat",
        cvFile: "Akram_Iyaz_CV.pdf",
        cvDownloadName: "Akram_Iyaz_AI_ML_Engineer_CV.pdf",
        copyrightYear: "2026"
    },
    hero: {
        label: "00 — PROFILE"
    },
    profile: "Information Science and Engineering graduate with hands-on experience in applied AI/ML, NLP, Python development, and software engineering. Built independent projects involving semantic embeddings, LLM-based analysis, browser automation, and client-server systems. Experienced with pretrained transformer models, vector similarity, REST APIs, Linux, and Git. Completed AWS Educate coursework in Cloud 101 and Machine Learning. Seeking an entry-level AI/ML Engineer role focused on applying machine learning and AI to practical software systems.",
    education: [
        {
            title: "Bachelor of Engineering in Information Science & Engineering",
            date: "JUNE 2026",
            institution: "Cambridge Institute of Technology, Bangalore",
            score: "CGPA: 7.91/10"
        },
        {
            title: "Three-Year Diploma in Information Technology",
            date: "JUNE 2023",
            institution: "Kashmir Government Polytechnic College, Srinagar",
            score: "Percentage: 78.8%"
        }
    ],
    experience: [
        {
            title: "Android Developer Intern",
            date: "FEB 2026 – MAY 2026",
            company: "MindMatrix",
            bullets: [
                "Contributed to development of Namma Raste, a civic reporting Android application, as part of a team using Kotlin and Jetpack Compose.",
                "Implemented the CameraX component for capturing images used in civic issue reporting.",
                "Contributed to application development and refinement through debugging, testing, and Git-based collaboration.",
                "Worked with Generative AI tools for code generation, debugging, UI development, and rapid feature implementation.",
                "Contributed to the version of the application shipped at the conclusion of the internship."
            ]
        }
    ],
    projects: [
        {
            name: "TabMind",
            title: "Semantic Browser Tab Clustering",
            technologies: ["PYTHON", "SENTENCE TRANSFORMERS", "NUMPY", "JAVASCRIPT", "CHROME EXTENSIONS", "HTTP", "CLIENT-SERVER ARCHITECTURE"],
            description: [
                "Built a functional Chrome extension that automatically organizes browser tabs into semantically related groups using NLP-based embeddings.",
                "Integrated the pretrained all-MiniLM-L6-v2 Sentence Transformer to convert tab titles and URLs into semantic vector representations.",
                "Implemented cosine similarity and centroid-based grouping to determine relationships between browser tabs.",
                "Developed a Python HTTP server to receive tab metadata from the Chrome extension and return clustering results.",
                "Implemented dynamic group assignment and centroid updates as new tabs are processed.",
                "Designed the system as an ongoing project, with the current release providing the core end-to-end semantic clustering functionality."
            ],
            repository: "https://github.com/akrambhat/TabMind"
        },
        {
            name: "EntrySense",
            title: "AI-Powered Job Discovery & Analysis",
            technologies: ["PYTHON", "LLMS", "OPENROUTER", "WEB CRAWLING", "SQLITE", "HTML PARSING"],
            description: [
                "Independently built an AI-assisted job discovery and analysis system from end to end.",
                "Developed crawlers for multiple ATS platforms to discover and collect job postings.",
                "Implemented keyword-based filtering to identify potentially relevant opportunities before AI analysis.",
                "Integrated an LLM through OpenRouter to analyze job postings and extract structured information.",
                "Built SQLite-based persistence for storing and managing processed job data.",
                "Designed the application as a modular Python pipeline combining web data collection, filtering, AI analysis, and structured storage."
            ],
            repository: "https://github.com/akrambhat/EntrySense"
        },
        {
            name: "RanMac",
            title: "Linux MAC Address Randomization Tool",
            technologies: ["PYTHON", "LINUX", "NETWORKING", "BASH"],
            description: [
                "Built a Python utility for dynamically randomizing MAC addresses on Linux network interfaces.",
                "Automated network-interface management using Linux networking commands.",
                "Supported both Ethernet and Wi-Fi interfaces.",
                "Applied Linux system scripting and networking concepts to automate low-level network configuration."
            ],
            repository: "https://github.com/akrambhat/RanMac"
        }
    ],
    skills: [
        {
            category: "PROGRAMMING",
            items: "Python, Java, JavaScript, SQL, C, Bash"
        },
        {
            category: "AI / ML / NLP",
            items: "Machine Learning, Natural Language Processing, Sentence Transformers, all-MiniLM-L6-v2, Semantic Embeddings, Vector Similarity, LLMs, Generative AI, Prompt Engineering"
        },
        {
            category: "PYTHON / DATA",
            items: "NumPy, pandas"
        },
        {
            category: "SOFTWARE & WEB",
            items: "REST APIs, HTTP Server, Client-Server Architecture, Chrome Extensions, HTML/CSS"
        },
        {
            category: "DATABASES",
            items: "SQLite, MySQL, MongoDB"
        },
        {
            category: "SYSTEMS & TOOLS",
            items: "Linux, Git, GitHub"
        },
        {
            category: "ANDROID",
            items: "Kotlin, Android, Jetpack Compose, CameraX"
        }
    ],
    certifications: [
        { name: "AWS Educate", detail: "Cloud 101" },
        { name: "AWS Educate", detail: "Machine Learning" },
        { name: "Android App Development using Generative AI", detail: "MindMatrix" },
        { name: "Innovation, Design and Entrepreneurship (IDE) Bootcamp", detail: "Certificate of Completion" }
    ],
    achievements: [
        { name: "Infosys-PALS Hackathon 2025", detail: "Certificate of participation/achievement for reaching Round 2 of the competition" }
    ],
    coursework: [
        "DEEP LEARNING",
        "MACHINE LEARNING",
        "ARTIFICIAL INTELLIGENCE",
        "DATA STRUCTURES & ALGORITHMS",
        "OBJECT-ORIENTED PROGRAMMING",
        "DATABASE MANAGEMENT SYSTEMS",
        "OPERATING SYSTEMS",
        "COMPUTER NETWORKS",
        "SOFTWARE ENGINEERING",
        "DEVOPS",
        "BIG DATA ANALYTICS"
    ]
};
