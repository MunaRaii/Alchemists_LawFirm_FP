document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        // Compose email body
        const emailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

        // Generate mailto link
        const mailtoLink = `mailto:rasiksilwal@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

        // Open user's email client
        window.location.href = mailtoLink;
    });
});
