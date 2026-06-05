$(document).ready(function () {

    $(".about-card").mouseover(function() {
        $(this).css("border-color", "#00f5d4");
    });
    
    $(".about-card").mouseout(function() {
        $(this).css("border-color", "#1f1f23");
    });

    $(".project-card").click(function() {
        $(this).fadeOut().fadeIn();
    });
    
    let contactForm = document.querySelector("form");
    
    contactForm.addEventListener("submit", function(event) {
        let clientName = document.getElementById("firstname").value;
        let feedback = document.getElementById("feedbackMessage");
        
        if (clientName !== "") {
            alert("Thank you " + clientName + "! Your email is opening so you can send your details.");
            
            feedback.innerHTML = "<p>Your email has been prepared. Please review and send the email to complete the process.</p>";
            
            setTimeout(function() {
                feedback.innerHTML = "";
            }, 4000); 
        }
    });
    
    console.log("Welcome to Malesa Tshepiso Brian's Engineering Portfolio.");

    $(".mobile-menu-btn").click(function () {
        let navLinks = $(".nav-links");
        navLinks.toggleClass("active");
        
        if (navLinks.hasClass("active")) {
            $(".mobile-menu-btn span").text("✕"); 
        } else {
            $(".mobile-menu-btn span").text("≡"); 
        }
    });

    $(".nav-links a").click(function() {
        if ($(window).width() <= 800) {
            $(".nav-links").removeClass("active");
            $(".mobile-menu-btn span").text("≡"); 
        }
    });

    $(".profile-frame").mouseover(function() {
        $(this).css("transform", "scale(1.05)");
    });

    $(".profile-frame").mouseout(function() {
        $(this).css("transform", "scale(1.0)");
    });
});