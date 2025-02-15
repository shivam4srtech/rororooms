
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".displayFloatingBox");

        links.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default anchor action

                // Close all floatingBoxes
                document.querySelectorAll(".floatingBoxes").forEach(box => {
                    box.style.display = "none";
                });

                // Show the corresponding floatingBoxes div
                const floatingBox = this.nextElementSibling;
                if (floatingBox.classList.contains("floatingBoxes")) {
                    floatingBox.style.display = "block";
                }
            });
        });

        // Close the box if clicking outside
        document.addEventListener("click", function (event) {
            if (!event.target.closest(".navLinkBox li")) {
                document.querySelectorAll(".floatingBoxes").forEach(box => {
                    box.style.display = "none";
                });
            }
        });
    });