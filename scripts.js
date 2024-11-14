document.addEventListener('DOMContentLoaded', function() {
    // Registration form submission logic
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const registrationData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            };
            
            try {
                const response = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(registrationData)
                });
                const result = await response.text();
                alert(result);
                window.location.href = "success.html";  // Redirect to success page
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    // Enrollment form submission logic
    const enrollmentForm = document.getElementById('enrollment-form');
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const enrollmentData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                course: document.getElementById('course').value
            };

            try {
                const response = await fetch('http://localhost:3000/enroll', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(enrollmentData)
                });
                const result = await response.text();
                alert(result);
                window.location.href = "setup.html";  // Redirect to setup page for username & password
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    // Account setup form submission logic
    const setupForm = document.getElementById('setup-form');
    if (setupForm) {
        setupForm.addEventListener('submit', async function(event) {
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
    }
});
