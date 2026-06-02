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
function loadAnalyzers() {
    fetch('data/analyzers.json')
        .then(response => response.json())
        .then(data => {
            analyzersData = data;
            displayAnalyzers(data);
        })
        .catch(error => console.log('Analyzers data loaded (or not found):', error));
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
    if (!detailContainer) {
        alert(`
${analyzer.name}

Type: ${analyzer.type}
Manufacturer: ${analyzer.manufacturer}

${analyzer.description}

Key Parameters:
${analyzer.parameters.join('\n')}

Troubleshooting:
${analyzer.troubleshooting.join('\n')}
        `);
        return;
    }
    
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
        
        <button onclick="closeDetail()">Close</button>
    `;
}

// KNOWLEDGE FUNCTIONS
function loadKnowledge() {
    fetch('data/knowledge.json')
        .then(response => response.json())
        .then(data => {
            knowledgeData = data;
            displayKnowledge(data);
        })
        .catch(error => console.log('Knowledge data loaded (or not found):', error));
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
    if (!detailContainer) {
        alert(`
${term.term}

Definition: ${term.definition}

Category: ${term.category}

Detailed Explanation:
${term.explanation}

Clinical Significance:
${term.clinicalSignificance}

Related Terms: ${term.relatedTerms.join(', ')}
        `);
        return;
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
        
        <button onclick="closeDetail()">Close</button>
    `;
}

// PROJECTS FUNCTIONS
function loadProjects() {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            projectsData = data;
            displayProjects(data);
        })
        .catch(error => console.log('Projects data loaded (or not found):', error));
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
        const statusClass = project.status.toLowerCase().replace(' ', '-');
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
    if (!detailContainer) {
        alert(`
${project.name}

Status: ${project.status}
Target Date: ${project.targetDate}

Description:
${project.description}

Objectives:
${project.objectives.join('\n')}

Resources Needed:
${project.resourcesNeeded.join('\n')}

Timeline:
${project.timeline}
        `);
        return;
    }
    
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
    
    const statusClass = project.status.toLowerCase().replace(' ', '-');
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
    const filtered = analyzersData.filter(a => 
        a.name.toLowerCase().includes(query.toLowerCase()) ||
        a.type.toLowerCase().includes(query.toLowerCase()) ||
        a.description.toLowerCase().includes(query.toLowerCase())
    );
    displayAnalyzers(filtered);
}

function searchKnowledge(query) {
    const filtered = knowledgeData.filter(t => 
        t.term.toLowerCase().includes(query.toLowerCase()) ||
        t.definition.toLowerCase().includes(query.toLowerCase()) ||
        t.category.toLowerCase().includes(query.toLowerCase())
    );
    displayKnowledge(filtered);
}

function searchProjects(query) {
    const filtered = projectsData.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProjects(filtered);
}

// UTILITY FUNCTIONS
function closeDetail() {
    document.getElementById('analyzer-detail')?.innerHTML = '';
    document.getElementById('knowledge-detail')?.innerHTML = '';
    document.getElementById('project-detail')?.innerHTML = '';
}

// Handle Enter key in search
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const searchInput = event.target;
        if (searchInput.className === 'search-input') {
            const query = searchInput.value;
            if (searchInput.id === 'search-analyzers') {
                searchAnalyzers(query);
            } else if (searchInput.id === 'search-knowledge') {
                searchKnowledge(query);
            } else if (searchInput.id === 'search-projects') {
                searchProjects(query);
            }
        }
    }
});
