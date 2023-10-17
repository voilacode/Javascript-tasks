document.addEventListener('DOMContentLoaded', function () {
    // Dropdown functionality
    function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.toggle('hidden');
    }

    // Toggle dropdowns on click or touchstart
    document.querySelectorAll('[data-dropdown-toggle]').forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            const dropdownId = this.getAttribute('data-dropdown-toggle');
            toggleDropdown(dropdownId);
        });

        // For mobile devices
        toggle.addEventListener('touchstart', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            const dropdownId = this.getAttribute('data-dropdown-toggle');
            toggleDropdown(dropdownId);
        });

        // For desktop devices
        toggle.addEventListener('mouseenter', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            const dropdownId = this.getAttribute('data-dropdown-toggle');
            toggleDropdown(dropdownId);
        });

        // For desktop devices - close dropdown on mouseleave
        toggle.addEventListener('mouseleave', function (event) {
            event.preventDefault();
            const dropdownId = this.getAttribute('data-dropdown-toggle');
            toggleDropdown(dropdownId);
        });
    });

    // Close dropdowns when clicking or touching outside
    document.addEventListener('click', closeDropdownsOutside);
    document.addEventListener('touchstart', closeDropdownsOutside);

    function closeDropdownsOutside(event) {
        if (!event.target.closest('[data-dropdown-toggle]') && !event.target.closest('.group')) {
            document.querySelectorAll('.dropdown').forEach(function (dropdown) {
                dropdown.classList.add('hidden');
            });
        }
    }
});
