// Efek transisi shadow pada navbar saat halaman di-scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        // Saat di-scroll ke bawah, shadow lebih tegas
        header.style.boxShadow = '0 4px 20px rgba(212, 163, 115, 0.15)';
        header.style.background = 'rgba(253, 251, 247, 0.98)';
    } else {
        // Saat di posisi paling atas, shadow halus
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
        header.style.background = 'rgba(253, 251, 247, 0.95)';
    }
});