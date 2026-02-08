// Inizializza EmailJS
(function () {
    emailjs.init("HllyEBjZHfgoFEg0W"); // tua PUBLIC KEY
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm(
            "service_zi99f5h",   // tuo SERVICE ID
            "template_ra2vc5e",  // tuo TEMPLATE ID
            form
        ).then(function () {
            status.style.color = "green";
            status.textContent = "Messaggio inviato con successo!";
            form.reset();
        }, function (error) {
            console.error("EmailJS error:", error);
            status.style.color = "red";
            status.textContent = "Errore nell'invio del messaggio.";
        });
    });
});