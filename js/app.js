const btn = document.getElementById("navbar-toggler");
        const menus = document.querySelectorAll(".menu");
        btn.addEventListener('click', () => {
            for (let li of menus) {
                li.classList.toggle("show");
            }
        })