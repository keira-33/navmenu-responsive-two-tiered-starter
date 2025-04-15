//toggleMenu Function
const navigationMenu = document.getElementById("navmenu");
const navigationButton = document.getElementById("toggle-menu");

function toggleMenu() {
    let isVisible = navigationMenu.getAttribute("data-visible");

    if (isVisible === "false"){
        if(navigationMenu.classList.contains("active")){
            navigationMenu.setAttribute("data-visible","true");
            navigationButton.setAttribute("data-visible", "true");
        }
        else {
            dataDisplay();
            setTimeout(toggleMenu,100);
        }
    }
    // for the second else, it would be because isVisible is true
    else {
        navigationMenu.setAttribute("data-visible","false");
        navigationButton.setAttribute("data-visible", "false");
        setTimeout(dataDisplay, 300);
    }

    function dataDisplay() {
        navigationMenu.classList.toggle("active");
    }
}

// event listener 
navigationButton.addEventListener("click", toggleMenu);

//  Yet another way to add the current year to the footer
document.querySelector("#copyright").textContent = new Date().getFullYear();