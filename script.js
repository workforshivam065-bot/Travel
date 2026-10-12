// Simple Filter Functionality
function searchDestination() {
    const input = document.getElementById('destinationInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const destinationName = card.getAttribute('data-name');
        if (destinationName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Scroll to destinations after search
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}


// Mobile Menu Toggle (Basic placeholder)
document.querySelector('.hamburger').addEventListener('click', () => {
    alert("Mobile menu clicked! You can implement a side-drawer here.");
});