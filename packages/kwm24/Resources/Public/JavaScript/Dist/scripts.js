/*!
 * kwm24 v1.0.0 (https://fh-ooe.at/campus-hagenberg)
 * Copyright 2017-2024 Fabio Umdasch
 * Licensed under the GPL-2.0-or-later license
 */
console.log("WE LOVE TYPO3");

//Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
        autoplay: {
            delay: 5000,
        },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".swiper-slide").forEach(slide => {
        const images = slide.querySelectorAll("img");
        const textNode = Array.from(slide.childNodes).find(node => node.nodeType === 3 && node.textContent.trim() !== "");

        if (images.length >= 2 && textNode) {
            // Erstelle einen flexiblen Container
            const container = document.createElement("div");
            container.style.display = "flex";
            container.style.justifyContent = "space-between";
            container.style.alignItems = "center";
            container.style.width = "100%";

            // Erstelle ein Text-Element
            const textDiv = document.createElement("div");
            textDiv.textContent = textNode.textContent.trim();
            textDiv.style.flex = "1";
            textDiv.style.textAlign = "center";
            textDiv.style.fontSize = "1.5rem";
            textDiv.style.fontWeight = "bold";

            // Altes Layout entfernen
            slide.innerHTML = "";

            // Neues Layout mit Bild-Text-Bild Reihenfolge hinzufügen
            container.appendChild(images[0]); // Erstes Bild (links)
            container.appendChild(textDiv); // Text in die Mitte
            container.appendChild(images[1]); // Zweites Bild (rechts)

            slide.appendChild(container);
        }
    });
});


//Download Spielplan KM
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector("#c115 p");

    if (textElement) {
        textElement.style.color = "#546c3d";
        textElement.style.textDecoration = "underline";
        textElement.style.cursor = "pointer";

        textElement.addEventListener("click", function() {
            const link = document.createElement("a");
            link.href = "/fileadmin/Spielplan_SPG_Pregarten.pdf";
            link.download = "Spielplan_SPG_Pregarten.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Nach dem Download die Schriftfarbe leicht dunkler machen
            textElement.style.color = "#3d522a";
        });
    }
});


//Download Spielplan KM II
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector("#c210 p");

    if (textElement) {
        textElement.style.color = "#546c3d";
        textElement.style.textDecoration = "underline";
        textElement.style.cursor = "pointer";

        textElement.addEventListener("click", function() {
            const link = document.createElement("a");
            link.href = "/fileadmin/Spielplan_SPG_Pregarten_II.pdf";
            link.download = "Spielplan_SPG_Pregarten_II.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Nach dem Download die Schriftfarbe leicht dunkler machen
            textElement.style.color = "#3d522a";
        });
    }
});

//Modal als Bestätigung
document.addEventListener("DOMContentLoaded", function() {
    let buyButton = document.getElementById("submit-season-ticket");
    let modal = document.getElementById("purchaseModal");
    let closeButton = document.querySelector(".close-btn");

    // Stelle sicher, dass das Modal nur existiert, wenn es auf dieser Seite vorhanden ist
    if (buyButton && modal) {
        buyButton.addEventListener("click", function(event) {
            event.preventDefault(); // Verhindert das Absenden des Formulars
            modal.style.display = "flex"; // Modal anzeigen
        });
    }

    // Überprüfen, ob der Schließen-Button existiert
    if (closeButton) {
        closeButton.addEventListener("click", function() {
            modal.style.display = "none"; // Modal schließen
        });
    }

    // Schließen des Modals durch Klick außerhalb des Modalfensters
    window.addEventListener("click", function(event) {
        if (modal && event.target === modal) {
            modal.style.display = "none";
        }
    });
});

//Login Funktion fürs Styling
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector('#c285 input[name="user"]');
    const imageSection = document.getElementById('c569');

    if (loginForm && imageSection) {
        const loginContainer = document.getElementById('c285');
        loginContainer.insertBefore(imageSection, loginContainer.firstChild);

        imageSection.style.display = 'flex';
        imageSection.style.justifyContent = 'center';
        imageSection.style.alignItems = 'center';
    } else if (imageSection) {
        const loginContainer = document.getElementById('c285');
        loginContainer.style.border = 'none';
    }
});






