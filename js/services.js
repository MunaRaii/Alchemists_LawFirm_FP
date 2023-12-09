
    // Wait for the DOM to be ready
    document.addEventListener("DOMContentLoaded", function () {
        // Get all card elements
        var cards = document.querySelectorAll('.card');

        // Add a click event listener to each card
        cards.forEach(function (card) {
            card.addEventListener('click', function () {
                // Toggle the 'active' class to show/hide card details
                this.classList.toggle('active');
            });
        });
    });
