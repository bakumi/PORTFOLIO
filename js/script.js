let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};



ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Программист', 'Веб-разработчик'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// ===== ТОЛЬКО НА ЛОКАЛКЕ ===== //
// ===== ТОЛЬКО НА ЛОКАЛКЕ ===== //


// document.addEventListener('DOMContentLoaded', function () {
//     var submitBtn = document.getElementById('submitBtn');
//     var contactForm = document.getElementById('contactForm');

//     submitBtn.addEventListener('click', function () {
//         var formData = new FormData(contactForm);

//         // Отправляем запрос на сервис Formspree
//         fetch('https://formspree.io/f/xrgnenej', {
//             method: 'POST',
//             body: formData
//         }).then(response => {
//             if (response.ok) {
//                 console.log('Письмо успешно отправлено!');

//                 // Сбросить значения полей после успешной отправки
//                 contactForm.reset();

//                 // Закрыть всплывающее окно
//                 contactFormPopup.style.display = 'none';
//             } else {
//                 console.error('Возникла ошибка при отправке письма.');
//             }
//         }).catch(error => {
//             console.error('Ошибка:', error);
//         });
//     });
// });


document.getElementById("submitBtn").addEventListener("click", function () {

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();


    nameInput.classList.remove("invalid-field");
    emailInput.classList.remove("invalid-field");
    messageInput.classList.remove("invalid-field");


    if (name === "") {
        nameInput.classList.add("invalid-field");
    }


    if (!isValidEmail(email)) {
        emailInput.classList.add("invalid-field");
    }

    if (message === "") {
        messageInput.classList.add("invalid-field");
    }


    if (name === "" || !isValidEmail(email) || message === "") {
        return;
    }


    document.getElementById("myModal").classList.add("show");
});


document.querySelector(".modal-btn").addEventListener("click", function () {
    document.getElementById("myModal").classList.remove("show");
});


var inputFields = document.querySelectorAll('.input-box input, #message');
inputFields.forEach(function (input) {
    input.addEventListener('input', function () {
        this.classList.remove('invalid-field');
    });
});


function isValidEmail(email) {

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


    return emailPattern.test(email);
}




