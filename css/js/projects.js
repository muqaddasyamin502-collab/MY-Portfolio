const projects = [{
        title: 'CASPAM-Bot',
        category: 'AI Study Assistant',
        description: 'A BZU-focused AI study companion for academic questions, coding support and learning assistance.',
        image: 'assets/projects/caspam-bot.png',
        demo: 'https://ai-study-assistent-rbbv.onrender.com/',
        tags: ['AI Assistant', 'Python', 'Web App']
    },
    {
        title: 'NeuralInsight',
        category: 'Interactive AI Experience',
        description: 'An immersive web experience that introduces AI thinking, workflow and intelligent systems.',
        image: 'assets/projects/neural-insight.png',
        demo: 'https://muqaddasyamin502-collab.github.io/Neural-insight/?v=3',
        tags: ['AI Concepts', 'JavaScript', 'UI Design']
    },
    {
        title: 'Friends Trader',
        category: 'Business Website',
        description: 'A polished e-commerce website for premium kitchen utensils and cookware, built for browsing and conversion.',
        image: 'assets/projects/friends-traders.png',
        demo: 'https://friends-traders.onrender.com/',
        tags: ['Business Site', 'E-commerce', 'Responsive UI']
    },
    {
        title: 'SmartSearch AI',
        category: 'AI-Powered Search Algorithm',
        description: 'A concept dashboard for semantic search, smart ranking and personalized AI-powered results.',
        image: 'assets/projects/smartsearch-ai.png',
        tags: ['Semantic Search', 'AI UX', 'Dashboard']
    },
    {
        title: 'AI Game Agent',
        category: 'Intelligent Game Assistant',
        description: 'A futuristic game companion concept featuring strategies, guides and personalised gaming insights.',
        image: 'assets/projects/ai-game-agent.png',
        tags: ['Game AI', 'Product Design', 'Dashboard']
    },
    {
        title: 'Responsive Portfolio',
        category: 'Personal Portfolio',
        description: 'A responsive personal portfolio that presents work, credentials and a distinctive visual identity.',
        image: 'assets/projects/portfolio.png',
        demo: 'https://muqaddasyamin502-collab.github.io/Portfolio-/?share=3',
        tags: ['Portfolio', 'Responsive Design', 'Frontend']
    }
];

const projectGrid = document.querySelector('.projects-grid');

if (projectGrid) {
    projectGrid.innerHTML = projects.map((project) => `
        <article class="project-card showcase-card fade-in visible">
            <a class="project-preview" href="${project.demo || project.image}" target="_blank" rel="noopener" aria-label="View ${project.title}">
                <img src="${project.image}" alt="${project.title} project preview" loading="lazy">
                <span class="project-preview-label">${project.demo ? 'Live preview' : 'Project preview'} <i class="fas fa-arrow-up-right-from-square"></i></span>
            </a>
            <div class="project-content">
                <p class="project-category">${project.category}</p>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">${project.tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}</div>
                ${project.demo ? `<a class="project-demo-link" href="${project.demo}" target="_blank" rel="noopener">Live demo <i class="fas fa-arrow-up-right-from-square"></i></a>` : '<span class="project-demo-soon">Concept preview</span>'}
            </div>
        </article>
    `).join('');
}