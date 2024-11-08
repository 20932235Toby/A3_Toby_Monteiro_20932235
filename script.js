// the loader animation that I have made works when code it active, however is makes the rest of the website stop working

/*   // loader
document.addEventListener("DOMContentLoaded", function () {
    splitTextIntoSpans(".logo p");
    splitTextIntoSpans(".hero-copy h1");


gsap.to(".img-holder img", {
    left: 0,
    stagger: 0.1,
    ease: "power4.out",
    duration: 1.5,
    delay: 4,
});

gsap.to(".img-holder img", {
    left: "100%",
    stagger: -0.1,
    ease: "power4.out",
    duration: 1.5,
    delay: 7,
});
});

function splitTextIntoSpans(selector) {
    var element = document.querySelector(selector);
    if (element) {
        var text = element.innerText;
        var splitText = text
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");
        element.innerHTML = splitText;
    }
}

function startLoader() {
    var counterElement = document.querySelector(".counter p");
    var logoElement = document.querySelector(".logo p");
    var currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            animateText();
            return;
        }

        currentValue += Math.floor(Math.random () * 10) + 1;
        currentValue = currentValue > 100 ? 100 : currentValue;
        counterElement.innerHTML =
            currentValue
                .toString()
                .split("")
                .map((char) => `<span>${char}</span>`)
                .join("") + "<span>%</span>";
                
            var delay = Math.floor(Math.random() * 200) + 100;
            setTimeout(updateCounter, delay);
        }

        function animateText() {
            setTimeout(() => {
                gsap.to(".counter p span", {
                    top: "-400px",
                    stagger: 0.1,
                    ease: "power3.inOut",
                    duration: 1,
                });

                gsap.to("logo p span", {
                    top: "0",
                    stagger: 0.1,
                    ease: "power3.inOut",
                    duration: 1,
                });

                gsap.to(".logo p span", {
                    top: "-400px",
                    stagger: 0.1,
                    ease: "power3.inOut",
                    duration: 1,
                    delay: 3,
                });

                gsap.to(".overlay", {
                    opacity: 0,
                    ease: "power3.inOut",
                    duration: 1,
                    delay: 4,
                });
            }, 300);
        }

        updateCounter();
    }

    startLoader();
*/


// home page
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})