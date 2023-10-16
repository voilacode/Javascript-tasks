document.addEventListener('DOMContentLoaded', function () {
    // Dropdown functionality
    function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.toggle('hidden');
    }

    // Toggle dropdowns on click
    document.querySelectorAll('[data-dropdown-toggle]').forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            const dropdownId = this.getAttribute('data-dropdown-toggle');
            toggleDropdown(dropdownId);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('[data-dropdown-toggle]')) {
            document.querySelectorAll('[data-dropdown-toggle]').forEach(function (toggle) {
                const dropdownId = toggle.getAttribute('data-dropdown-toggle');
                const dropdown = document.getElementById(dropdownId);
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.add('hidden');
                }
            });
        }
    });
});
