document.addEventListener("DOMContentLoaded", () => {
    if (typeof portfolio === 'undefined') {
        alert("Could not load portfolio data. Make sure data/portfolio.js exists.");
        return;
    }

    // Deep clone the portfolio data to manage edits in memory
    let currentData = JSON.parse(JSON.stringify(portfolio));
    let currentSection = null;

    const sectionSelect = document.getElementById('section-select');
    const editorContainer = document.getElementById('editor-form-container');
    const editorActions = document.getElementById('editor-actions');
    const saveBtn = document.getElementById('save-section-btn');
    const exportBtn = document.getElementById('export-btn');

    sectionSelect.addEventListener('change', (e) => {
        currentSection = e.target.value;
        if (currentSection) {
            renderEditor(currentSection);
            editorActions.style.display = 'flex';
        } else {
            editorContainer.innerHTML = '';
            editorActions.style.display = 'none';
        }
    });

    saveBtn.addEventListener('click', () => {
        saveCurrentSection();
        alert(`Changes to "${currentSection}" saved in memory. Click "EXPORT PORTFOLIO.JS" when finished.`);
    });

    exportBtn.addEventListener('click', () => {
        exportPortfolio();
    });

    function renderEditor(section) {
        editorContainer.innerHTML = '';
        const data = currentData[section];
        
        if (section === 'profile') {
            editorContainer.innerHTML = `
                <div class="form-group">
                    <label>Profile Text</label>
                    <textarea id="field-profile" class="form-control">${data}</textarea>
                </div>
            `;
        } else if (typeof data === 'object' && !Array.isArray(data)) {
            // Object renderer (personal, hero)
            let html = '';
            for (const key in data) {
                html += `
                    <div class="form-group">
                        <label>${key}</label>
                        <input type="text" id="field-${key}" class="form-control field-input" data-key="${key}" value="${escapeHtml(data[key])}">
                    </div>
                `;
            }
            editorContainer.innerHTML = html;
        } else if (Array.isArray(data)) {
            // Array renderer (projects, education, etc.)
            let html = `<div id="array-container">`;
            data.forEach((item, index) => {
                html += renderArrayItem(section, item, index);
            });
            html += `</div>`;
            html += `<button class="btn btn-secondary" onclick="addArrayItem('${section}')">+ ADD ITEM</button>`;
            editorContainer.innerHTML = html;
        }
    }

    window.addArrayItem = function(section) {
        const template = getTemplate(section);
        currentData[section].push(template);
        renderEditor(section);
    };

    window.removeArrayItem = function(section, index) {
        if (confirm("Are you sure you want to delete this item?")) {
            currentData[section].splice(index, 1);
            renderEditor(section);
        }
    };

    function renderArrayItem(section, item, index) {
        let html = `<div class="array-item" data-index="${index}">`;
        html += `<button class="array-item-remove" onclick="removeArrayItem('${section}', ${index})">×</button>`;
        
        if (typeof item === 'string') {
            html += `
                <div class="form-group">
                    <label>Item ${index + 1}</label>
                    <input type="text" class="form-control array-field" data-index="${index}" data-key="self" value="${escapeHtml(item)}">
                </div>
            `;
        } else {
            for (const key in item) {
                if (Array.isArray(item[key])) {
                    const joinChar = (key === 'description' || key === 'bullets') ? '\n' : ', ';
                    html += `
                        <div class="form-group">
                            <label>${key} ${joinChar === '\n' ? '(one per line)' : '(comma separated)'}</label>
                            <textarea class="form-control array-field" data-index="${index}" data-key="${key}">${escapeHtml(item[key].join(joinChar))}</textarea>
                        </div>
                    `;
                } else {
                    html += `
                        <div class="form-group">
                            <label>${key}</label>
                            ${key === 'description' || key === 'profile' ? 
                                `<textarea class="form-control array-field" data-index="${index}" data-key="${key}">${escapeHtml(item[key])}</textarea>` :
                                `<input type="text" class="form-control array-field" data-index="${index}" data-key="${key}" value="${escapeHtml(item[key])}">`
                            }
                        </div>
                    `;
                }
            }
        }
        html += `</div>`;
        return html;
    }

    function saveCurrentSection() {
        if (currentSection === 'profile') {
            currentData.profile = document.getElementById('field-profile').value;
        } else if (typeof currentData[currentSection] === 'object' && !Array.isArray(currentData[currentSection])) {
            const inputs = editorContainer.querySelectorAll('.field-input');
            inputs.forEach(input => {
                currentData[currentSection][input.getAttribute('data-key')] = input.value;
            });
        } else if (Array.isArray(currentData[currentSection])) {
            const items = editorContainer.querySelectorAll('.array-item');
            items.forEach((itemDiv) => {
                const index = parseInt(itemDiv.getAttribute('data-index'));
                const inputs = itemDiv.querySelectorAll('.array-field');
                inputs.forEach(input => {
                    const key = input.getAttribute('data-key');
                    if (key === 'self') {
                        currentData[currentSection][index] = input.value;
                    } else if (key === 'description' || key === 'bullets') {
                        currentData[currentSection][index][key] = input.value.split('\n').map(s => s.trim()).filter(s => s !== '');
                    } else if (key === 'technologies') {
                        currentData[currentSection][index][key] = input.value.split(',').map(s => s.trim()).filter(s => s !== '');
                    } else {
                        currentData[currentSection][index][key] = input.value;
                    }
                });
            });
        }
    }

    function getTemplate(section) {
        switch (section) {
            case 'education': return { title: "", date: "", institution: "", score: "" };
            case 'experience': return { title: "", date: "", company: "", bullets: [] };
            case 'projects': return { name: "", title: "", technologies: [], description: [], repository: "" };
            case 'skills': return { category: "", items: "" };
            case 'certifications': return { name: "", detail: "" };
            case 'achievements': return { name: "", detail: "" };
            case 'coursework': return "";
            default: return {};
        }
    }

    function exportPortfolio() {
        // We must ensure 'description' and 'bullets' in arrays remain properly handled.
        // Convert JS object to JS file string
        const jsString = "const portfolio = " + JSON.stringify(currentData, null, 4) + ";\\n";
        const blob = new Blob([jsString], { type: "text/javascript" });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = "portfolio.js";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function escapeHtml(unsafe) {
        if (typeof unsafe !== 'string') return unsafe;
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    }
});
