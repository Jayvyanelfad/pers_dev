document.addEventListener('DOMContentLoaded', () => {
    const courseLinks = document.querySelectorAll('.course-link');
    const contentContainer = document.getElementById('course-content');

    courseLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const courseFile = link.getAttribute('data-course-file');

            fetch(courseFile)
                .then(response => response.text())
                .then(html => {
                    contentContainer.innerHTML = html;
                })
                .catch(error => console.error('Error loading content:', error));
        });
    });
});
