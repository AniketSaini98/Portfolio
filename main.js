// *****************************    Skill Progress Bar  *********************************** //

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 20);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);



/*
var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;



function initialiseBars() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();



function fillBars() {

    for (let bar of progressBars) {

        let currentWidth = 0;

        let interval = setInterval(function () {
            
            let targetWidth = bar.getAttribute('data-bar-width');
            
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }

            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 20);
    }
}



function checkScroll() {

    var coordinates = skillsContainer.getBoundingClientRect();
    
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}

window.addEventListener("scroll", checkScroll);
*/



// ***************************** Smooth Scrolling ********************************** //

var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
var interval;

for(var i = 0; navMenuAnchorTag.length; i++) {
    navMenuAnchorTag[i].addEventListener('click', function(event) {
        event.preventDefault();

        var targetSectionId = this.textContent.trim().toLowerCase();
        // console.log(targetSectionId);

        var targetSection = document.getElementById(targetSectionId);
        // console.log(targetSection);

        interval = setInterval(function() {
            scrollVertically(targetSection);
        }, 30);
    });
}

function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }

    window.scrollBy(0, 50);
}