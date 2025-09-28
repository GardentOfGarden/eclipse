// Modal functionality
function showGenerateKeyModal() {
    document.getElementById('generateKeyModal').style.display = 'block';
}

function closeGenerateKeyModal() {
    document.getElementById('generateKeyModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('generateKeyModal');
    if (event.target === modal) {
        closeGenerateKeyModal();
    }
}

// Form submission
document.getElementById('keyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = document.getElementById('keyAmount').value;
    const duration = document.getElementById('keyDuration').value;
    const language = document.getElementById('keyLanguage').value;
    const prefix = document.getElementById('keyPrefix').value;
    
    // Simulate key generation
    generateKeys(amount, duration, language, prefix);
});

function generateKeys(amount, duration, language, prefix) {
    // This would normally make an API call to your backend
    console.log('Generating keys:', {
        amount,
        duration,
        language,
        prefix
    });
    
    // Simulate API call
    setTimeout(() => {
        alert(`Successfully generated ${amount} license keys for ${language} with ${duration} days duration!`);
        closeGenerateKeyModal();
        document.getElementById('keyForm').reset();
    }, 1000);
}

// Initialize health circle
function initializeHealthCircle() {
    const circle = document.querySelector('.circle-progress');
    const percent = circle.getAttribute('data-percent');
    circle.style.background = `conic-gradient(var(--secondary) ${percent}%, var(--surface-light) 0)`;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeHealthCircle();
    
    // Simulate live data updates
    setInterval(updateLiveData, 5000);
});

function updateLiveData() {
    // This would normally fetch real data from your API
    const elements = document.querySelectorAll('.stat-trend.up');
    elements.forEach(element => {
        if (element.textContent.includes('LIVE')) {
            // Add subtle animation to indicate live updates
            element.style.opacity = '0.7';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 500);
        }
    });
}

// Add smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Here you would normally load different dashboard sections
        console.log('Navigating to:', this.textContent);
    });
});
