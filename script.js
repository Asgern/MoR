document.addEventListener("DOMContentLoaded", function() {
    alert("Indlæser Javascript");
	
	
	        // Tilføj eventlistener til formularen til Kontakt os
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Forhindrer siden i at genindlæse
            alert("Tak for din besked! Vi vender tilbage til dig snarest.");
        });
	
	
	
	
	
});
