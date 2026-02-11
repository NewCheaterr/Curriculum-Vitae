// Inizializza EmailJS
(function () {
    emailjs.init("HllyEBjZHfgoFEg0W");
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm(
            "service_zi99f5h", 
            "template_ra2vc5e",
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