// Global data storage
let analyzersData = [];
let knowledgeData = [];
let projectsData = [];

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

async function fetchJson(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Failed to load ' + path);
    return response.json();
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('analyzers-container')) loadAnalyzers();
    if (document.getElementById('knowledge-container')) loadKnowledge();
    if (document.getElementById('projects-container')) loadProjects();
});

// ===== LIST PAGES =====
async function loadList(file, containerId, label, onLoad) {
    try {
        onLoad(await fetchJson(file));
    } catch (error) {
        console.log(label + ' data not found', error);
        const container = document.getElementById(containerId);
        if (container) container.innerHTML = `<p class="empty">No ${label} data loaded.</p>`;
    }
}

const loadAnalyzers = () => loadList('data/analyzers.json', 'analyzers-container', 'analyzer',
    d => { analyzersData = d; displayAnalyzers(d); });
const loadKnowledge = () => loadList('data/knowledge.json', 'knowledge-container', 'knowledge',
    d => { knowledgeData = d; displayKnowledge(d); });
const loadProjects = () => loadList('data/projects.json', 'projects-container', 'project',
    d => { projectsData = d; displayProjects(d); });

function renderCards(containerId, items, emptyMsg, cardFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.length
        ? items.map(cardFn).join('')
        : `<p class="empty">${emptyMsg}</p>`;
}

// Open-links shown next to the short description (one button per resource)
function actionHtml(attachments) {
    const links = (attachments || []).map(a => {
        const external = !String(a.url).endsWith('.html');
        const label = String(a.name).replace(/^[^\p{L}\p{N}]+/u, '');
        return `<a class="open-link" href="${esc(a.url)}"${external ? ' target="_blank" rel="noopener"' : ''}>${esc(label)} <span aria-hidden="true">→</span></a>`;
    }).join('');
    return links ? `<div class="card-actions">${links}</div>` : '';
}

const cardHtml = (title, meta, desc, extra, attachments) => `
    <div class="card">
        <div class="card-body">
            <h3>${esc(title)}</h3>
            ${meta ? `<p class="card-meta">${meta}</p>` : ''}
            <p class="card-desc">${esc(desc)}</p>
            ${extra || ''}
        </div>
        ${actionHtml(attachments)}
    </div>`;

const statusClass = (s) => String(s || '').toLowerCase().replace(/\s+/g, '-');

function displayAnalyzers(list) {
    renderCards('analyzers-container', list, 'No analyzers found.', a =>
        cardHtml(a.name, esc(a.type) + ' · ' + esc(a.manufacturer), a.description, '', a.attachments));
}

function displayKnowledge(list) {
    renderCards('knowledge-container', list, 'No terms found.', t =>
        cardHtml(t.term, esc(t.category), t.definition, '', t.attachments));
}

function displayProjects(list) {
    renderCards('projects-container', list, 'No projects found.', p =>
        cardHtml(p.name, 'Target: ' + esc(p.targetDate), p.description,
            `<span class="status ${statusClass(p.status)}">${esc(p.status)}</span>`, p.attachments));
}

// ===== SEARCH =====
function filterBy(data, query, fields, show) {
    const q = query.trim().toLowerCase();
    show(q ? data.filter(x => fields.some(f => String(x[f] ?? '').toLowerCase().includes(q))) : data);
}
const searchAnalyzers = q => filterBy(analyzersData, q, ['name', 'type', 'description'], displayAnalyzers);
const searchKnowledge = q => filterBy(knowledgeData, q, ['term', 'definition', 'category'], displayKnowledge);
const searchProjects  = q => filterBy(projectsData,  q, ['name', 'description'], displayProjects);

// Live search as you type
document.addEventListener('input', e => {
    if (!e.target.classList.contains('search-input')) return;
    const fn = { 'search-analyzers': searchAnalyzers, 'search-knowledge': searchKnowledge,
                 'search-projects': searchProjects }[e.target.id];
    if (fn) fn(e.target.value);
});
