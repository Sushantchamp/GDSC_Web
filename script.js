// Navbar contact button
function redirectToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function redirectToJoin() {
    window.open("https://gdsc.community.dev/university-of-engineering-management-jaipur/", "_blank");
}

function redirectToCategory(category) {
    const baseUrl = "https://codelabs.developers.google.com/?cat=";
    const url = baseUrl + category;
    window.open(url, "_blank");
}


// Scroll Trigger Effect
document.addEventListener("DOMContentLoaded", function () {
    var opportunitiesSection = document.getElementById("opportunities");
    var aboutSection = document.getElementById("about-container");

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    var observerOpportunities = new IntersectionObserver(function (entries, observerOpportunities) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                opportunitiesSection.classList.add("show");
                observerOpportunities.unobserve(entry.target);
            }
        });
    }, options);

    var observerAbout = new IntersectionObserver(function (entries, observerAbout) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                aboutSection.classList.add("show");
                observerAbout.unobserve(entry.target);
            }
        });
    }, options);

    observerOpportunities.observe(opportunitiesSection);
    observerAbout.observe(aboutSection);
});


// Event section 
document.addEventListener('DOMContentLoaded', function () {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');

    let div1 = document.getElementById('event-div1');
    let div2 = document.getElementById('event-div2');
    let div3 = document.getElementById('event-div3');

    btn1.addEventListener('click', () => {
        div1.style.display = 'flex';
        div2.style.display = 'none';
        div3.style.display = 'none';
    })
    btn2.addEventListener('click', () => {
        div2.style.display = 'flex';
        div1.style.display = 'none';
        div3.style.display = 'none';
    })
    btn3.addEventListener('click', () => {
        div3.style.display = 'flex';
        div2.style.display = 'none';
        div1.style.display = 'none';
    })
})


// Team section
document.addEventListener('DOMContentLoaded', function () {
    let btnDivA = document.getElementById("btn-diva");
    let btnDivB = document.getElementById("btn-divb");
    let btnDivC = document.getElementById("btn-divc");
    let btnDivD = document.getElementById("btn-divd");

    let DivA = document.getElementById("diva");
    let DivB = document.getElementById("divb");
    let DivC = document.getElementById("divc");
    let DivD = document.getElementById("divd");

    btnDivA.addEventListener('click', () => {
        DivA.style.display = 'flex';
        DivB.style.display = 'none';
        DivC.style.display = 'none';
        DivD.style.display = 'none';
    });
    btnDivB.addEventListener('click', () => {
        DivB.style.display = 'flex';
        DivA.style.display = 'none';
        DivC.style.display = 'none';
        DivD.style.display = 'none';
    });
    btnDivC.addEventListener('click', () => {
        DivC.style.display = 'flex';
        DivA.style.display = 'none';
        DivB.style.display = 'none';
        DivD.style.display = 'none';
    });
    btnDivD.addEventListener('click', () => {
        DivD.style.display = 'flex';
        DivA.style.display = 'none';
        DivB.style.display = 'none';
        DivC.style.display = 'none';
    });

});


// Team Onclick Button
document.addEventListener('DOMContentLoaded', () => {
    const btnlist = document.querySelectorAll('.team-btn');
    btnlist.forEach(btnEl => {
        btnEl.addEventListener('click', () => {
            document.querySelector('.special')?.classList.remove('special');
            document.querySelector('.default')?.classList.remove('default');
            btnEl.classList.add('special');
        });
    });

})

// Event Onclick Button
document.addEventListener('DOMContentLoaded', () => {
    const btneventlist = document.querySelectorAll('.event-btn');
    btneventlist.forEach(btnEl => {
        btnEl.addEventListener('click', () => {
            document.querySelector('.ongoing')?.classList.remove('ongoing');
        });
    });

})


// Contact/Email Function
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "roysushant9681@gmail.com",
        Password: "B821CE2D611140D67708C25730239BD547E5",
        To: 'sr6041265@gmail.com',
        // From: document.getElementById("email").value,
        From: "roysushant9681@gmail.com",
        Subject: "Contact form Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phone-number").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => {
            console.log(message);
            if (message === 'OK') {
                swal("Message Sent Successfully!", "Thank You.", "success");

            }
            else {
                swal("Error!", "OOPS!  Something went wrong...", "error");

            }
        }
    );
}


//Scroll Function
document.addEventListener('DOMContentLoaded', function () {
    let btnScrollTop = document.querySelector(".scrltop");
    btnScrollTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behaviour: "smooth",
        });
    });

});

