document.addEventListener("DOMContentLoaded", function () {
    var cardBodies = document.querySelectorAll('.card-body');
    var learnMoreButtons = document.querySelectorAll('#show-more-btn');

    if (cardBodies.length === learnMoreButtons.length) {
        // Function to toggle visibility and change button text
        function toggleVisibility(firstPara, secondPara, button) {
            return function () {
                if (secondPara.style.display === 'none' || secondPara.style.display === '') {
                    firstPara.style.display = 'none';
                    secondPara.style.display = 'block';
                    button.textContent = 'Show Less';
                } else {
                    firstPara.style.display = 'block';
                    secondPara.style.display = 'none';
                    button.textContent = 'Show More';
                }
            };
        }

        // Loop through each card
        for (var i = 0; i < cardBodies.length; i++) {
            var cardBody = cardBodies[i];
            var firstParagraph = cardBody.querySelector('p:not(.hidden)');
            var secondParagraph = cardBody.querySelector('p.hidden');
            var learnMoreButton = learnMoreButtons[i];

            if (firstParagraph && secondParagraph && learnMoreButton) {
                // Initially, show only the first paragraph and "Show More" button
                secondParagraph.style.display = 'none';

                // Attach a click event to the "Show More" button for toggling visibility
                learnMoreButton.addEventListener('click', toggleVisibility(firstParagraph, secondParagraph, learnMoreButton));
            } else {
                console.error('Elements not found for card ' + i);
            }
        }
    } else {
        console.error('Mismatched number of card bodies and buttons.');
    }
});
