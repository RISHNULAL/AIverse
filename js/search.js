class Search {
    constructor() {
        this.input = document.getElementById('searchInput');
        this.button = document.getElementById('searchButton');
        this.toolSections = document.querySelectorAll('.tool-section');
        
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.performSearch());
        this.input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });
    }

    performSearch() {
        const searchTerm = this.input.value.toLowerCase();
        let found = false;

        this.toolSections.forEach(section => {
            const text = section.textContent.toLowerCase();
            const isMatch = text.includes(searchTerm);
            
            section.style.display = isMatch ? 'block' : 'none';
            if (isMatch) found = true;
        });

        if (!found && searchTerm) {
            this.showNoResults();
        }
    }

    showNoResults() {
        // Implement no results feedback
    }
}

// Initialize search
new Search();