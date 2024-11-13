document.getElementById('enrollment-form').addEventListener('submit', async (e) => {
    e.preventDefault();

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
    } catch (error) {
        console.error('Error:', error);
    }
});
