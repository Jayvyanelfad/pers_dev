document.addEventListener('DOMContentLoaded', () => {
    const courseLinks = document.querySelectorAll('.course-link');
    const contentContainer = document.getElementById('content-container');

    courseLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const courseId = link.getAttribute('data-course-id');

            fetch(`${courseId}.html`)
                .then(response => response.text())
                .then(html => {
                    contentContainer.innerHTML = html;
                })
                .catch(error => console.error('Error loading content:', error));
        });
    });
});
