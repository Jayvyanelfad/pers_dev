document.getElementById('enrollment-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.querySelector('#email').value;
    const phone = form.querySelector('#phone').value;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phonePattern = /^[0-9]{10}$/;
    let isValid = true;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        isValid = false;
    }

    if (isValid) {
        form.submit();
    }
});
