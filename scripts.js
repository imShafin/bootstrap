document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".progress-circle").forEach(circle => {
        let percentage = circle.getAttribute("data-percentage");
        let color = circle.getAttribute("data-color");
        let progressCircle = circle.querySelector(".progress");

        let radius = progressCircle.getAttribute("r");
        let circumference = 2 * Math.PI * radius;
        let offset = circumference - (percentage / 100) * circumference;

        progressCircle.style.stroke = color;
        progressCircle.style.strokeDashoffset = offset;
    });
});
