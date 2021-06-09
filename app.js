let searchInput = document.querySelector(".search-bar-input");
let cancelIcon = document.getElementsByClassName("svg-icon")[0];
let rightBorderElement = document.getElementsByClassName("border-right-element")[0];
searchInput.addEventListener("input", (e) => {
    if (searchInput.value.length > 0) {
        cancelIcon.classList.add("visible");
        cancelIcon.classList.remove("hidden");
        rightBorderElement.classList.add("visible");
        rightBorderElement.classList.remove("hidden");
        searchInput.classList.add("whenVisible");
    } else {
        cancelIcon.classList.remove("visible")
        cancelIcon.classList.add("hidden");
        rightBorderElement.classList.remove("visible");
        rightBorderElement.classList.add("hidden");
        searchInput.classList.remove("whenVisible");
    }
    removeText();
})

function removeText() {
    if (cancelIcon.classList == "svg-icon visible") {
        cancelIcon.addEventListener("click", () => {
            searchInput.value = "";
            cancelIcon.classList.remove("visible")
            cancelIcon.classList.add("hidden");
            rightBorderElement.classList.remove("visible")
            rightBorderElement.classList.add("hidden")
            searchInput.classList.remove("whenVisible");
        })
        cancelIcon.classList.toggle("add-mouse-pointer");
    }
}

let mobileSearchTools = document.querySelector(".m-tools").firstChild;
if (window.innerWidth <= 749) {
    mobileSearchTools.textContent = "Search Tools";
} else {
    mobileSearchTools.textContent = "Tools";
}

window.addEventListener("resize", (e) => {
    if (window.innerWidth <= 749) {
        mobileSearchTools.textContent = "Search Tools";
    } else {
        mobileSearchTools.textContent = "Tools";
    }
})

let revealNav = document.querySelector(".side-navigation-reveal");
let navContainer = document.querySelector(".side-navigation-container");
let blackBackground = document.querySelector(".black-background");

revealNav.addEventListener("click", (e) => {
    navContainer.style.left = "0";
    blackBackground.style.background = "rgba(0,0,0,0.7)";
    blackBackground.style.display = "block";
})

let googleLogo = document.querySelector(".side-logo-container");

googleLogo.addEventListener("click", (e) => {
    e.preventDefault();
    navContainer.style.left = "-300px";
    blackBackground.style.background = "white";
    blackBackground.style.display = "none";
})

blackBackground.addEventListener("click", (e) => {
    navContainer.style.left = "-300px";
    e.target.style.background = "white"
    e.target.style.display = "none";
})

/*
********************************
Notes
*********************************
*/

// Try to refactor the code (make it more readable)
// Apply DRY principle where possible
// Start combining the homepage, all tab and the other page from the main site navigation