document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Create an object to store form data
        const formData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Log the form data object to the console (you can also use it as needed)
        console.log(formData);

        // Optionally, reset the form after submission
        form.reset();
    });
});