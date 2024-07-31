
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
});


function toggleMenu() {
    var hmdElement = document.getElementById('hmd');
    var line = document.getElementById('line');
    var hclose = document.getElementById('hclose');
    if (hmdElement.style.display === 'none' || hmdElement.style.display === '') {
        hmdElement.style.display = 'block';
        line.style.display = 'none';
        hclose.style.display = 'block';
        
    } else {
        hmdElement.style.display = 'none';
        line.style.display = 'block';
        hclose.style.display = 'none';
        
    }
}

