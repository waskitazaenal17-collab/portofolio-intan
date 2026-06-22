// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check untuk preferensi mode gelap yang tersimpan
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle dark mode
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Simpan preferensi
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update icon
    themeToggle.innerHTML = isDarkMode 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Efek transisi shadow pada navbar saat halaman di-scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
    
    if (window.scrollY > 50) {
        // Saat di-scroll ke bawah, shadow lebih tegas
        header.style.boxShadow = `0 4px 20px rgba(212, 163, 115, 0.15)`;
        header.style.background = 'rgba(253, 251, 247, 0.98)';
        
        if (body.classList.contains('dark-mode')) {
            header.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.15)';
            header.style.background = 'rgba(15, 20, 25, 0.98)';
        }
    } else {
        // Saat di posisi paling atas, shadow halus
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
        header.style.background = 'rgba(253, 251, 247, 0.95)';
        
        if (body.classList.contains('dark-mode')) {
            header.style.background = 'rgba(15, 20, 25, 0.95)';
        }
    }
});