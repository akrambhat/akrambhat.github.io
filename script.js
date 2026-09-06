document.addEventListener("DOMContentLoaded", () => {
    // 1. RENDER PORTFOLIO DATA
    if (typeof portfolio !== 'undefined') {
        
        // Personal / Hero
        document.getElementById('nav-logo').textContent = portfolio.personal.name;
        document.getElementById('hero-label').textContent = portfolio.hero.label;
        document.getElementById('hero-subtitle').textContent = portfolio.personal.jobTitle;
        document.getElementById('about-text').textContent = portfolio.profile;

        // Nav Links
        const navLinksHtml = `
            <a href="${portfolio.personal.github}" target="_blank" rel="noopener noreferrer">GH</a>
            <a href="${portfolio.personal.linkedin}" target="_blank" rel="noopener noreferrer">IN</a>
            <a href="mailto:${portfolio.personal.email}">EM</a>
        `;
        document.getElementById('nav-social-links').innerHTML = navLinksHtml;

        // Hero Actions
        const heroActionsHtml = `
            <a href="${portfolio.personal.cvFile}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">OPEN CHEAT SHEET ↗</a>
            <a href="${portfolio.personal.cvFile}" download="${portfolio.personal.cvDownloadName}" class="btn btn-secondary">DOWNLOAD CV ↓</a>
        `;
        document.getElementById('hero-actions').innerHTML = heroActionsHtml;

        // Footer
        document.getElementById('footer-left').textContent = `© ${portfolio.personal.copyrightYear} ${portfolio.personal.name}. All rights reserved.`;
        document.getElementById('footer-right').innerHTML = `
            <a href="${portfolio.personal.github}" target="_blank" rel="noopener noreferrer">${portfolio.personal.githubDisplay}</a>
            <a href="${portfolio.personal.linkedin}" target="_blank" rel="noopener noreferrer">${portfolio.personal.linkedinDisplay}</a>
            <a href="mailto:${portfolio.personal.email}">${portfolio.personal.email}</a>
        `;

        // Projects
        const projectsContainer = document.getElementById('projects-list-container');
        projectsContainer.innerHTML = portfolio.projects.map(p => `
            <div class="project-entry">
                <div class="project-header">
                    <h3 class="project-title">${p.name} — ${p.title}</h3>
                    <a href="${p.repository}" target="_blank" class="project-link">VIEW SOURCE ↗</a>
                </div>
                <div class="project-tech">
                    ${p.technologies.map(t => `<span>${t}</span>`).join('')}
                </div>
                <ul class="editorial-list">
                    ${p.description.map(d => `<li>${d}</li>`).join('')}
                </ul>
                <div class="command-box clone-box">
                    <div class="command-text">git clone ${p.repository}</div>
                    <button class="command-btn copy-btn" data-clipboard-text="git clone ${p.repository}">COPY</button>
                </div>
            </div>
        `).join('');

        // Experience
        document.getElementById('experience-container').innerHTML = portfolio.experience.map(e => `
            <div class="exp-entry">
                <div class="exp-header">
                    <h3 class="exp-title">${e.title}</h3>
                    <span class="exp-date">${e.date}</span>
                </div>
                <div class="exp-company">${e.company}</div>
                <ul class="editorial-list">
                    ${e.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>
        `).join('');

        // Education
        document.getElementById('education-container').innerHTML = portfolio.education.map(e => `
            <div class="edu-entry">
                <div class="edu-header">
                    <h3 class="edu-title">${e.title}</h3>
                    <span class="edu-date">${e.date}</span>
                </div>
                <div class="edu-institution">${e.institution}</div>
                <div class="edu-score">${e.score}</div>
            </div>
        `).join('');

        // Skills
        document.getElementById('skills-container').innerHTML = portfolio.skills.map(s => `
            <div class="skill-block">
                <div class="skill-cat">${s.category}</div>
                <div class="skill-items">${s.items}</div>
            </div>
        `).join('');

        // Certifications
        document.getElementById('certifications-container').innerHTML = portfolio.certifications.map(c => `
            <li><strong>${c.name}:</strong> ${c.detail}</li>
        `).join('');

        // Achievements
        document.getElementById('achievements-container').innerHTML = portfolio.achievements.map(a => `
            <li><strong>${a.name}</strong> — ${a.detail}</li>
        `).join('');

        // Coursework
        document.getElementById('coursework-container').innerHTML = portfolio.coursework.map(c => `
            <span>${c}</span>
        `).join('');
    }

    // 2. BEHAVIOR & INTERACTIVITY

    // Typing effect
    const typingElement = document.getElementById("typed-name");
    if (typingElement && typeof portfolio !== 'undefined') {
        const textToType = portfolio.personal.name;
        typingElement.textContent = "";
        let charIndex = 0;
        const typingSpeed = 100;
    
        function type() {
            if (charIndex < textToType.length) {
                typingElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            }
        }
        setTimeout(type, 300);
    }

    // Mobile Nav Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (hamburgerBtn && mobileNav) {
        const navLinks = mobileNav.querySelectorAll('a');
        
        hamburgerBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            if (mobileNav.classList.contains('active')) {
                hamburgerBtn.textContent = "[ CLOSE ]";
            } else {
                hamburgerBtn.textContent = "[ MENU ]";
            }
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                hamburgerBtn.textContent = "[ MENU ]";
            });
        });
    }

    // Run Command Logic
    const runBtn = document.getElementById('run-projects-btn');
    const projectsList = document.getElementById('projects-list-container');
    
    if (runBtn && projectsList) {
        runBtn.addEventListener('click', () => {
            if (projectsList.classList.contains('hidden')) {
                runBtn.textContent = 'RUNNING...';
                setTimeout(() => {
                    projectsList.classList.remove('hidden');
                    runBtn.textContent = 'DONE';
                }, 400); // 400ms delay for restrained simulation
            }
        });
    }

    // Copy to Clipboard Logic
    // We bind it after rendering projects
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-clipboard-text');
            if (textToCopy && navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalText = btn.textContent;
                    btn.textContent = 'COPIED';
                    setTimeout(() => {
                        btn.textContent = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        });
    });
});