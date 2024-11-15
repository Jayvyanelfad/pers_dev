// src/setup.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('setup-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const setupData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        };

        try {
            const response = await fetch('http://localhost:3000/setup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(setupData)
            });
            const result = await response.text();
            alert(result);
            window.location.href = "success.html";  // Redirect to success page
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
