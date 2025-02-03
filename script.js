document.addEventListener("DOMContentLoaded", function() {
    alert("Indlæser Javascript");
	        // Tilføj eventlistener til formularen til Kontakt os
        const contactForm = document.getElementById("contactForm");
        if (contactForm) {
            contactForm.addEventListener("submit", function(event) {
                event.preventDefault();
                alert("Tak for din besked! Vi vender tilbage til dig snarest.");
            });
        }

});
