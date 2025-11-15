
// Initialize charts
document.addEventListener('DOMContentLoaded', function() {
    // Conversion Chart
    const conversionCtx = document.getElementById('conversionChart').getContext('2d');
    const conversionChart = new Chart(conversionCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Conversion Rate',
                data: [12, 19, 15, 22, 18, 24],
                borderColor: '#0ea5e9',
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(performanceCtx, {
        type: 'bar',
        data: {
            labels: ['Load Time', 'Bounce Rate', 'Conversions', 'Page Views', 'SEO Rank'],
            datasets: [{
                label: 'Before',
                data: [3.2, 65, 12, 45, 28],
                backgroundColor: 'rgba(148, 163, 184, 0.8)',
                borderColor: 'rgba(148, 163, 184, 1)',
                borderWidth: 1
            }, {
                label: 'After',
                data: [1.2, 33, 24, 68, 12],
                backgroundColor: 'rgba(14, 165, 233, 0.8)',
                borderColor: 'rgba(14, 165, 233, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Animate stats counters
    function animateCounters() {
        const counters = document.querySelectorAll('[data-target]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let count = 0;
            const increment = target / 100;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = count.toFixed(count % 1 !== 0 ? 1 : 0);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
        });
    }
    
    // Intersection Observer for counter animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('[data-target]').parentElement.parentElement;
    observer.observe(statsSection);
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you shortly.');
        contactForm.reset();
    });
});
