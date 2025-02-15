
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".displayFloatingBox");

        links.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); 
                document.querySelectorAll(".floatingBoxes").forEach(box => {
                    box.style.display = "none";
                });

                const floatingBox = this.nextElementSibling;
                if (floatingBox.classList.contains("floatingBoxes")) {
                    floatingBox.style.display = "block";
                }
            });
        });
        document.addEventListener("click", function (event) {
            if (!event.target.closest(".navLinkBox li")) {
                document.querySelectorAll(".floatingBoxes").forEach(box => {
                    box.style.display = "none";
                });
            }
        });
    });