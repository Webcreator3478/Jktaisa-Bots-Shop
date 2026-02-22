const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

toggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️'; // Sun for light mode
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '🌙'; // Moon for dark mode
    }
});
