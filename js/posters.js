document.addEventListener('DOMContentLoaded', () => {
    const posterGrid = document.getElementById('posterGrid');
    const posterSearch = document.getElementById('posterSearch');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const modal = document.getElementById('abstractModal');
    const closeModal = document.querySelector('.close-modal');

    let currentSession = 1;
    let postersData = postersSession1;

    // Render Posters
    function renderPosters(posters) {
        posterGrid.innerHTML = '';
        if (posters.length === 0) {
            posterGrid.innerHTML = '<div class="no-results glass-card">No posters found matching your search.</div>';
            return;
        }

        posters.forEach((poster, index) => {
            const card = document.createElement('div');
            card.className = 'poster-card glass-card';
            card.innerHTML = `
                <div class="poster-info">
                    <h3 class="poster-title">${poster.title}</h3>
                    <p class="poster-presenter"><strong>${poster.presenter || "TBA"}</strong></p>
                    <p class="poster-affiliation">${poster.affiliation || ""}</p>
                    <div class="poster-keywords">
                        ${poster.keywords.map(kw => kw.trim()).filter(kw => kw).map(kw => `<span class="tag">${kw}</span>`).join('')}
                    </div>
                </div>
                <button class="btn-secondary view-abstract" data-index="${index}">View Abstract</button>
            `;
            posterGrid.appendChild(card);
        });

        // Add event listeners to buttons
        document.querySelectorAll('.view-abstract').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = btn.getAttribute('data-index');
                showModal(posters[idx]);
            });
        });
    }

    // Modal Logic
    function showModal(poster) {
        document.getElementById('modalTitle').textContent = poster.title;
        document.getElementById('modalPresenter').textContent = poster.presenter || "TBA";
        document.getElementById('modalAffiliation').textContent = poster.affiliation || "N/A";
        document.getElementById('modalAbstractText').textContent = poster.abstract || "No abstract provided.";

        const keywordsContainer = document.getElementById('modalKeywords');
        keywordsContainer.innerHTML = poster.keywords.map(kw => kw.trim()).filter(kw => kw).map(kw => `<span class="tag">${kw}</span>`).join('');

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function hideModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeModal.addEventListener('click', hideModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    // Tab Logic
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSession = parseInt(btn.getAttribute('data-session'));
            postersData = currentSession === 1 ? postersSession1 : postersSession2;
            filterAndRender();
        });
    });

    // Search Logic
    posterSearch.addEventListener('input', () => {
        filterAndRender();
    });

    function filterAndRender() {
        const query = posterSearch.value.toLowerCase();
        const filtered = postersData.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.presenter.toLowerCase().includes(query) ||
            p.affiliation.toLowerCase().includes(query) ||
            p.keywords.some(kw => kw.toLowerCase().includes(query))
        );
        renderPosters(filtered);
    }

    // Initial Render
    renderPosters(postersSession1);
});
