
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.nav-container').innerHTML = data;
    });

fetch('footer.html').then(response => response.text())
    .then(data =>{
        document.querySelector('.footer-container').innerHTML = data;
    });


    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault(); 
    
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
    
        if (!email || !subject || !message) {
          alert("Email, Subject and Message are required.");
          return;
        }
    
        const myEmail = "dabouwilly@gmail.com";
        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + "\n\n" + message)}&reply-to=${email}`;
    
        window.location.href = mailtoLink;
      });