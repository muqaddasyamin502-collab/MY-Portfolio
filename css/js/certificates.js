const certificateItems = [
    { title: 'Google AI Professional Certificate', issuer: 'Google / Coursera', type: 'Professional Certificate', preview: 'google-ai-professional.png', file: 'Coursera OPOASG98NN1A google ai professional certificate.pdf', verify: 'https://coursera.org/verify/professional-cert/OPOASG98NN1A' },
    { title: 'Google AI Essentials', issuer: 'Google / Coursera', type: 'Specialization', preview: 'google-ai-essentials.png', file: 'Coursera FTQEAQYUFCNM Google Ai Essentials .pdf', verify: 'https://coursera.org/verify/specialization/FTQEAQYUFCNM' },
    { title: 'Google Prompting Essentials', issuer: 'Google / Coursera', type: 'Specialization', preview: 'prompting-essentials.png', file: 'Coursera RB3L0DAMV9H9 google prompting essentials .pdf', verify: 'https://coursera.org/verify/specialization/RB3L0DAMV9H9' },
    { title: 'AI Seekho 2026 Hackathon', issuer: 'Google for Developers', type: 'Hackathon', preview: 'ai-seekho.png', file: 'certificate-ai-seekho.jpg' },
    { title: 'Elements of AI', issuer: 'University of Helsinki', type: 'AI Course', preview: 'elements.png', file: 'certificate-elements-of-ai.png', verify: 'https://certificates.mooc.fi/validate/srnupa4xyb' },
    { title: 'Gemini Certified Student', issuer: 'Google for Education', type: 'Certification', preview: 'gemini.png', file: '595yg16k_1787940356392.pdf' },
    { title: 'Building with Artificial Intelligence', issuer: 'Saylor University', type: 'AI Course', preview: 'saylor.png', file: '0632755375MY.pdf' },
    { title: 'Technology Job Simulation', issuer: 'Deloitte / Forage', type: 'Job Simulation', preview: 'deloitte.png', file: 'Technology Job Simulation_completion_certificate.pdf' },
    { title: 'Getting Started with Cisco Packet Tracer', issuer: 'Cisco Networking Academy', type: 'Technology', preview: 'cisco.png', file: 'Getting_Started_with_Cisco_Packet_Tracer_certificate_muqaddasyamin502-gmail-com_ccbdeb02-3e24-47ec-b873-c98beaa0083b.pdf' },
    { title: 'Critical Thinking in the AI Era', issuer: 'HP LIFE', type: 'Professional Skill', preview: 'hp-life.png', file: 'Critical Thinking in the AI Era.pdf' },
    { title: 'Generative AI - A Way of Life', issuer: 'Analytics Vidhya', type: 'AI Course', preview: 'analytics-vidhya.png', file: 'Generative Ai.pdf' },
    { title: 'Gen AI Quiz Competition', issuer: 'Unstop / Biforgence', type: 'Achievement', preview: 'gen-ai-quiz.png', file: 'fb69d0b2-fc0c-49bb-a224-6f43c5abd95a unstop gen ai .pdf' },
    { title: 'AI for Research and Insights', issuer: 'Google / Coursera', type: 'AI Course', preview: 'research.png', file: 'Coursera XG20MC5YPURT research.pdf', verify: 'https://coursera.org/verify/XG20MC5YPURT' },
    { title: 'AI for Brainstorming and Planning', issuer: 'Google / Coursera', type: 'AI Course', preview: 'brainstorming.png', file: 'Coursera UT9ZX4M3TVDT brainstorming and planning.pdf', verify: 'https://coursera.org/verify/UT9ZX4M3TVDT' },
    { title: 'AI for App Building', issuer: 'Google / Coursera', type: 'AI Course', preview: 'app-building.png', file: 'Coursera QGML5Q782CPL ai for app building .pdf', verify: 'https://coursera.org/verify/QGML5Q782CPL' },
    { title: 'Maximize Productivity with AI Tools', issuer: 'Google / Coursera', type: 'AI Course', preview: 'productivity.png', file: 'Coursera Q6RKXEODH3G8 productivity with ai tools.pdf', verify: 'https://coursera.org/verify/Q6RKXEODH3G8' },
    { title: 'AI for Data Analysis', issuer: 'Google / Coursera', type: 'AI Course', preview: 'data-analysis.png', file: 'Coursera DYXQ9IX99QJH data ananylysis.pdf', verify: 'https://coursera.org/verify/DYXQ9IX99QJH' },
    { title: 'Use AI Responsibly', issuer: 'Google / Coursera', type: 'AI Course', preview: 'responsibly.png', file: 'Coursera C3DHJT9LCLWG use ai responsibly.pdf', verify: 'https://coursera.org/verify/C3DHJT9LCLWG' },
    { title: 'AI for Writing and Communication', issuer: 'Google / Coursera', type: 'Professional Skill', preview: 'writing.png', file: 'Coursera 6183SSBCBEIH for writting and communication.pdf', verify: 'https://coursera.org/verify/6183SSBCBEIH' },
    { title: 'AI Fundamentals', issuer: 'Google / Coursera', type: 'AI Course', preview: 'fundamentals.png', file: 'Coursera 95KGJFW10V99 ai fundamentals.pdf', verify: 'https://coursera.org/verify/95KGJFW10V99' },
    { title: 'Start Writing Prompts like a Pro', issuer: 'Google / Coursera', type: 'Prompt Engineering', preview: 'prompt-pro.png', file: 'Coursera 12AGE7WECMZR prompt like a pro.pdf', verify: 'https://coursera.org/verify/12AGE7WECMZR' },
    { title: 'AI for Content Creation', issuer: 'Google / Coursera', type: 'AI Course', preview: 'content.png', file: 'Coursera 9AFCIB6AR2O2 ai for content creation.pdf', verify: 'https://coursera.org/verify/9AFCIB6AR2O2' },
    { title: 'Stay Ahead of the AI Curve', issuer: 'Google / Coursera', type: 'AI Course', preview: 'stay-ahead.png', file: 'Coursera 0VMGLSNF96F0 stay ahead of ai curve.pdf', verify: 'https://coursera.org/verify/0VMGLSNF96F0' },
    { title: 'Introduction to AI', issuer: 'Google / Coursera', type: 'AI Course', preview: 'intro.png', file: '7ZKT7XM3V5CG intro to Ai.pdf', verify: 'https://coursera.org/verify/7ZKT7XM3V5CG' },
    { title: 'Design Prompts for Everyday Work Tasks', issuer: 'Google / Coursera', type: 'Prompt Engineering', preview: 'design-prompts.png', file: 'Coursera BMJBO73PX435 design prompts .pdf', verify: 'https://coursera.org/verify/BMJBO73PX435' }
];

const featuredCertificateTitles = new Set([
    'Google AI Professional Certificate', 'Google AI Essentials', 'Google Prompting Essentials',
    'Critical Thinking in the AI Era', 'Building with Artificial Intelligence', 'Elements of AI',
    'Gen AI Quiz Competition', 'Technology Job Simulation'
]);

const grid = document.querySelector('.certificates-grid');
const showMoreButton = document.getElementById('showMoreCertificates');
let displayingAllCertificates = false;

function renderCertificates() {
    if (!grid) return;
    const visibleCertificates = displayingAllCertificates ? certificateItems : certificateItems.filter((item) => featuredCertificateTitles.has(item.title));
    grid.innerHTML = visibleCertificates.map((item) => {
        const localFile = item.file && item.file.endsWith('.pdf') ? `assets/certificates/${encodeURIComponent(item.file)}` : `assets/certificate-previews/${item.preview}`;
        const previewDownload = item.file && item.file.endsWith('.pdf') ? 'download' : '';
        const credentialAction = item.verify ?
            `<a class="credential-link" target="_blank" rel="noopener" href="${item.verify}">Verify credential <i class="fas fa-arrow-up-right-from-square"></i></a>` :
            `<a class="credential-link" href="${localFile}" ${previewDownload}>Download certificate <i class="fas fa-download"></i></a>`;
        return `<article class="cert-card fade-in visible"><a class="cert-preview-link" href="${localFile}" ${previewDownload} aria-label="Download ${item.title} certificate"><img class="cert-preview-image" src="assets/certificate-previews/${item.preview}" alt="${item.title} certificate preview" loading="lazy"></a><div class="cert-content"><span class="cert-badge">${item.type}</span><h3>${item.title}</h3><p>Issued by ${item.issuer}.</p><div class="credential-actions">${credentialAction}</div></div></article>`;
    }).join('');
    if (showMoreButton) {
        showMoreButton.textContent = displayingAllCertificates ? 'Show featured credentials' : `Show ${certificateItems.length - visibleCertificates.length} more credentials`;
        showMoreButton.setAttribute('aria-expanded', String(displayingAllCertificates));
    }
}

if (grid) {
    renderCertificates();
    if (showMoreButton) {
        showMoreButton.addEventListener('click', () => {
            displayingAllCertificates = !displayingAllCertificates;
            renderCertificates();

            const certificateSection = document.getElementById('certificates');
            if (!displayingAllCertificates && certificateSection) {
                certificateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}
