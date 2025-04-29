document.addEventListener('DOMContentLoaded', () => {
    const themeCheckbox = document.getElementById('theme-checkbox');
    
    // Load saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        themeCheckbox.checked = true;
    }

    // Theme toggle event listener
    themeCheckbox.addEventListener('change', () => {
        if (themeCheckbox.checked) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});