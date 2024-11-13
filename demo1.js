document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(progressBar => {
        const steps = progressBar.querySelectorAll('.step');
        let currentStep = 0;

        function showStep(index) {
            steps.forEach((step, i) => {
                step.classList.toggle('active', i <= index);
            });
        }

        progressBar.querySelector('.next-step').addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });

        progressBar.querySelector('.prev-step').addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });

        showStep(currentStep);
    });
});
