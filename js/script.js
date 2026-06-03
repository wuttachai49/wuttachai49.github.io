// Global data storage
let analyzersData = [];
let knowledgeData = [];
let projectsData = [];

// Load all data on page load
document.addEventListener('DOMContentLoaded', function() {
    loadAnalyzers();
    loadKnowledge();
    loadProjects();
});

// ANALYZERS FUNCTIONS
async function loadAnalyzers() {
    try {
        const response = await fetch('data/analyzers.json');
        if (!response.ok) throw new Error('Failed to load analyzers');
        analyzersData = await response.json();
        displayAnalyzers(analyzersData);
    } catch (error) {
        console.log('Analyzers data not found', error);
        const container = document.getElementById('analyzers-container');
        if (container) container.innerHTML = '<p>No analyzer data loaded.</p>';
    }
}

function displayAnalyzers(analyzers) {
    const container = document.getElementById('analyzers-container');
    if (!container) return;
    
    container.innerHTML = '';
    if (analyzers.length === 0) {
        container.innerHTML = '<p>No analyzers found.</p>';
        return;
    }
    
    analyzers.forEach(analyzer => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${analyzer.name}</h3>
            <p><strong>Type:</strong> ${analyzer.type}</p>
            <p>${analyzer.description}</p>
            <p class="card-meta">Manufacturer: ${analyzer.manufacturer}</p>
            <button onclick="showAnalyzerDetail('${analyzer.id}')">View Details</button>
        `;
        container.appendChild(card);
    });
}

function showAnalyzerDetail(analyzerId) {
    const analyzer = analyzersData.find(a => a.id === analyzerId);
    if (!analyzer) return;
    
    const detailContainer = document.getElementById('analyzer-detail');
    if (!detailContainer) return;
    
    let paramsHtml = '<table class="detail-table"><tr><th>Parameter</th></tr>';
    analyzer.parameters.forEach(param => {
        paramsHtml += `<tr><td>${param}</td></tr>`;
    });
    paramsHtml += '</table>';
    
    let troubleshootHtml = '<ul>';
    analyzer.troubleshooting.forEach(issue => {
        troubleshootHtml += `<li>${issue}</li>`;
    });
    troubleshootHtml += '</ul>';
    
    // BUILD ATTACHMENTS SECTION
    let attachmentsHtml = '';
    if (analyzer.attachments && analyzer.attachments.length > 0) {
        attachmentsHtml = '<h4>📎 Resources</h4><div style="display: flex; flex-direction: column; gap: 10px;">';
        analyzer.attachments.forEach(attachment => {
            if (attachment.type === 'Interactive HTML' || attachment.url.endsWith('.html')) {
                attachmentsHtml += `
                    <a href="${attachment.url}" style="display: inline-block; padding: 12px 20px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; text-align: center; font-weight: 500; transition: background 0.3s;" onmouseover="this.style.background='#764ba2'" onmouseout="this.style.background='#667eea'">
                        ${attachment.name}
                    </a>
                `;
            } else {
                attachmentsHtml += `
                    <a href="${attachment.url}" target="_blank" download style="padding: 10px 15px; background: #f0f0f0; border-left: 4px solid #667eea; text-decoration: none; border-radius: 3px; display: block;">
                        📄 ${attachment.name} (${attachment.type})
                    </a>
                `;
            }
        });
        attachmentsHtml += '</div>';
    }
    
    detailContainer.innerHTML = `
        <h3>${analyzer.name}</h3>
        <p><strong>Type:</strong> ${analyzer.type}</p>
        <p><strong>Manufacturer:</strong> ${analyzer.manufacturer}</p>
        <p><strong>Description:</strong> ${analyzer.description}</p>
        
        <h4>Key Parameters</h4>
        ${paramsHtml}
        
        <h4>Troubleshooting Guide</h4>
        ${troubleshootHtml}
        
        <h4>Additional Notes</h4>
        <p>${analyzer.notes}</p>
        
        ${attachmentsHtml}
        
        <button onclick="closeDetail()">Close</button>
    `;
}

// KNOWLEDGE FUNCTIONS
async function loadKnowledge() {
    try {
        const response = await fetch('data/knowledge.json');
        if (!response.ok) throw new Error('Failed to load knowledge');
        knowledgeData = await response.json();
        displayKnowledge(knowledgeData);
    } catch (error) {
        console.log('Knowledge data not found', error);
        const container = document.getElementById('knowledge-container');
        if (container) container.innerHTML = '<p>No knowledge data loaded.</p>';
    }
}

function displayKnowledge(terms) {
    const container = document.getElementById('knowledge-container');
    if (!container) return;
    
    container.innerHTML = '';
    if (terms.length === 0) {
        container.innerHTML = '<p>No terms found.</p>';
        return;
    }
    
    terms.forEach(term => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${term.term}</h3>
            <p><strong>Category:</strong> ${term.category}</p>
            <p>${term.definition}</p>
            <p class="card-meta">Related: ${term.relatedTerms.join(', ')}</p>
            <button onclick="showKnowledgeDetail('${term.id}')">Learn More</button>
        `;
        container.appendChild(card);
    });
}

function showKnowledgeDetail(termId) {
    const term = knowledgeData.find(t => t.id === termId);
    if (!term) return;
    
    const detailContainer = document.getElementById('knowledge-detail');
    if (!detailContainer) return;
    
    let attachmentsHtml = '';
    if (term.attachments && term.attachments.length > 0) {
        attachmentsHtml = '<h4>📎 Resources</h4><div style="display: flex; flex-direction: column; gap: 10px;">';
        term.attachments.forEach(attachment => {
            if (attachment.type === 'Interactive HTML' || attachment.url.endsWith('.html')) {
                attachmentsHtml += `
                    <a href="${attachment.url}" style="display: inline-block; padding: 12px 20px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; text-align: center; font-weight: 500; transition: background 0.3s;" onmouseover="this.style.background='#764ba2'" onmouseout="this.style.background='#667eea'">
                        ${attachment.name}
                    </a>
                `;
            } else {
                attachmentsHtml += `
                    <a href="${attachment.url}" target="_blank" download style="padding: 10px 15px; background: #f0f0f0; border-left: 4px solid #667eea; text-decoration: none; border-radius: 3px; display: block;">
                        📄 ${attachment.name} (${attachment.type})
                    </a>
                `;
            }
        });
        attachmentsHtml += '</div>';
    }
    
    detailContainer.innerHTML = `
        <h3>${term.term}</h3>
        <p><strong>Category:</strong> ${term.category}</p>
        
        <h4>Definition</h4>
        <p>${term.definition}</p>
        
        <h4>Detailed Explanation</h4>
        <p>${term.explanation}</p>
        
        <h4>Clinical Significance</h4>
        <p>${term.clinicalSignificance}</p>
        
        <h4>Related Terms</h4>
        <p>${term.relatedTerms.join(', ')}</p>
        
        ${attachmentsHtml}
        
        <button onclick="closeDetail()">Close</button>
    `;
}

// PROJECTS FUNCTIONS
async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        if (!response.ok) throw new Error('Failed to load projects');
        projectsData = await response.json();
        displayProjects(projectsData);
    } catch (error) {
        console.log('Projects data not found', error);
        const container = document.getElementById('projects-container');
        if (container) container.innerHTML = '<p>No project data loaded.</p>';
    }
}

function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    if (projects.length === 0) {
        container.innerHTML = '<p>No projects found.</p>';
        return;
    }
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        const statusClass = project.status.toLowerCase().replace(/\s+/g, '-');
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><span class="status ${statusClass}">${project.status}</span></p>
            <p class="card-meta">Target: ${project.targetDate}</p>
            <button onclick="showProjectDetail('${project.id}')">View Details</button>
        `;
        container.appendChild(card);
    });
}

function showProjectDetail(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const detailContainer = document.getElementById('project-detail');
    if (!detailContainer) return;
    
    let objectivesHtml = '<ul>';
    project.objectives.forEach(obj => {
        objectivesHtml += `<li>${obj}</li>`;
    });
    objectivesHtml += '</ul>';
    
    let resourcesHtml = '<ul>';
    project.resourcesNeeded.forEach(res => {
        resourcesHtml += `<li>${res}</li>`;
    });
    resourcesHtml += '</ul>';
    
    const statusClass = project.status.toLowerCase().replace(/\s+/g, '-');
    detailContainer.innerHTML = `
        <h3>${project.name}</h3>
        <p><span class="status ${statusClass}">${project.status}</span></p>
        
        <h4>Description</h4>
        <p>${project.description}</p>
        
        <h4>Objectives</h4>
        ${objectivesHtml}
        
        <h4>Resources Needed</h4>
        ${resourcesHtml}
        
        <h4>Timeline</h4>
        <p>${project.timeline}</p>
        
        <h4>Target Date</h4>
        <p>${project.targetDate}</p>
        
        <button onclick="closeDetail()">Close</button>
    `;
}

// SEARCH FUNCTIONS
function searchAnalyzers(query) {
    if (!query.trim()) {
        displayAnalyzers(analyzersData);
        return;
    }
    const filtered = analyzersData.filter(a => 
        a.name.toLowerCase().includes(query.toLowerCase()) ||
        a.type.toLowerCase().includes(query.toLowerCase()) ||
        a.description.toLowerCase().includes(query.toLowerCase())
    );
    displayAnalyzers(filtered);
}

function searchKnowledge(query) {
    if (!query.trim()) {
        displayKnowledge(knowledgeData);
        return;
    }
    const filtered = knowledgeData.filter(t => 
        t.term.toLowerCase().includes(query.toLowerCase()) ||
        t.definition.toLowerCase().includes(query.toLowerCase()) ||
        t.category.toLowerCase().includes(query.toLowerCase())
    );
    displayKnowledge(filtered);
}

function searchProjects(query) {
    if (!query.trim()) {
        displayProjects(projectsData);
        return;
    }
    const filtered = projectsData.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProjects(filtered);
}

// UTILITY FUNCTIONS
function closeDetail() {
    const analyzerDetail = document.getElementById('analyzer-detail');
    const knowledgeDetail = document.getElementById('knowledge-detail');
    const projectDetail = document.getElementById('project-detail');
    
    if (analyzerDetail) analyzerDetail.innerHTML = '';
    if (knowledgeDetail) knowledgeDetail.innerHTML = '';
    if (projectDetail) projectDetail.innerHTML = '';
}
