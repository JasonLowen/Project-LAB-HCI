document.addEventListener("DOMContentLoaded", function() {
    const spheres = document.querySelectorAll(".sphere");

    spheres.forEach(function(sphere) {
        sphere.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
    
});
