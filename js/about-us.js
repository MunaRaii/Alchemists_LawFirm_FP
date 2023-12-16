document.addEventListener("DOMContentLoaded", function () {
    var secondParagraph = document.querySelector('.text p.hidden');
    
    if (secondParagraph) {
        // Function to toggle visibility and change button text
        function toggleVisibility() {
            if (secondParagraph.style.display === 'none') {
                secondParagraph.style.display = 'block';
                learnMoreButton.style.display = 'none';
            } else {
                secondParagraph.style.display = 'none';
                learnMoreButton.textContent = 'Show More';
            }
        }

        // Attach a click event to the "Learn More" button for toggling visibility
        var learnMoreButton = document.getElementById('learn-more-btn');
        learnMoreButton.addEventListener('click', toggleVisibility);
    } else {
        console.error('Second paragraph not found.');
    }
});
