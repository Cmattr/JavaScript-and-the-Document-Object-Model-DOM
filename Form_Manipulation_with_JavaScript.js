document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

 
        console.log(formData);

        form.reset();
    });
});