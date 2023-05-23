$(document).ready(function () {
    //  Initialize Swiper
    let swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    //Other Rest Libraries
    $('.skillbar').skillBars({

        // number start
        from: 0,

        // number end 
        to: 100,

        // animation speed
        speed: 1000,

        // how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
        interval: 100,

        // the number of decimal places to show
        decimals: 0,

        // callback method for every time the element is updated,
        onUpdate: null,

        // callback method for when the element finishes updating
        onComplete: null,

        // CSS classes
        classes: {
            skillBarBar: '.skillbar-bar',
            skillBarPercent: '.skill-bar-percent',
        }

    });
});



