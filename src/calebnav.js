document.addEventListener('DOMContentLoaded', function () {
    // Dropdown functionality
    function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.toggle('hidden');
    }

    // Close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('[data-dropdown-toggle]').forEach(function (toggle) {
            const dropdownId = toggle.getAttribute('data-dropdown-toggle');
            const dropdown = document.getElementById(dropdownId);
            dropdown.classList.add('hidden');
        });
    }

    // Toggle dropdowns on click
    document.querySelectorAll('[data-dropdown-toggle]').forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            const dropdownId = this.getAttribute('data-dropdown-toggle');
            closeAllDropdowns(); // Close all dropdowns before opening a new one
            toggleDropdown(dropdownId);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('[data-dropdown-toggle]')) {
            closeAllDropdowns();
        }
    });
});
