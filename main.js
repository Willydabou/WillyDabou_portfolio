
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.nav-container').innerHTML = data;
    });

fetch('footer.html').then(response => response.text())
    .then(data =>{
        document.querySelector('.footer-container').innerHTML = data;
    });