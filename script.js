/* =========================================================
   CEPBEY FIXERGADGET SOLUTION SERVICE HP
   SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       TAHUN OTOMATIS FOOTER
       ========================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       SMOOTH SCROLL
       ========================= */

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#" &&
                document.querySelector(targetId)
            ) {
                event.preventDefault();

                const target = document.querySelector(targetId);

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =========================
       ANIMASI SAAT SCROLL
       ========================= */

    const animatedElements = document.querySelectorAll(
        ".service-card, .testimonial, .gallery-item, .about-image, .about-text, .contact-box"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });


    /* =========================
       HEADER SAAT SCROLL
       ========================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.background = "rgba(3, 10, 18, 0.98)";
            header.style.boxShadow =
                "0 5px 25px rgba(0, 0, 0, 0.25)";

        } else {

            header.style.background =
                "rgba(6, 17, 31, 0.95)";

            header.style.boxShadow = "none";
        }

    });


    /* =========================
       TOMBOL WHATSAPP
       ========================= */

    const whatsappButtons =
        document.querySelectorAll(".whatsapp-button");

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const number = this.dataset.number;
            const message =
                this.dataset.message ||
                "Halo CEPBEY FIXERGADGET, saya ingin konsultasi service HP.";

            if (number) {

                const cleanNumber =
                    number.replace(/\D/g, "");

                const whatsappURL =
                    "https://wa.me/" +
                    cleanNumber +
                    "?text=" +
                    encodeURIComponent(message);

                window.open(
                    whatsappURL,
                    "_blank"
                );
            }

        });

    });


    /* =========================
       TOMBOL BACK TO TOP
       ========================= */

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                backToTop.style.display = "flex";

            } else {

                backToTop.style.display = "none";
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* =========================
       GALERI IMAGE
       ========================= */

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            const imageURL = this.src;

            const popup = document.createElement("div");

            popup.className = "image-popup";

            popup.innerHTML = `
                <div class="image-popup-content">
                    <span class="image-popup-close">&times;</span>
                    <img src="${imageURL}" alt="Foto Service CEPBEY FIXERGADGET">
                </div>
            `;

            document.body.appendChild(popup);

            popup.addEventListener("click", function (event) {

                if (
                    event.target === popup ||
                    event.target.classList.contains("image-popup-close")
                ) {
                    popup.remove();
                }

            });

        });

    });


    /* =========================
       FORM KONTAK
       ========================= */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name")?.value || "";

            const service =
                document.getElementById("service")?.value || "";

            const message =
                document.getElementById("message")?.value || "";

            const phoneNumber =
                "6283821864167";

            const text =
                "Halo CEPBEY FIXERGADGET.%0A%0A" +
                "Nama: " + name + "%0A" +
                "Layanan: " + service + "%0A" +
                "Keluhan: " + message;

            window.open(
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                text,
                "_blank"
            );

        });

    }


    /* =========================
       MENU MOBILE
       ========================= */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");

        });

    }


    /* =========================
       TUTUP MENU SETELAH KLIK
       ========================= */

    const mobileLinks =
        document.querySelectorAll("#mobileMenu a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mobileMenu) {
                mobileMenu.classList.remove("active");
            }

        });

    });


    /* =========================
       PROTEKSI LINK KOSONG
       ========================= */

    const emptyLinks =
        document.querySelectorAll('a[href="#"]');

    emptyLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {
            event.preventDefault();
        });

    });


    console.log(
        "CEPBEY FIXERGADGET - Website berhasil dimuat."
    );

});
