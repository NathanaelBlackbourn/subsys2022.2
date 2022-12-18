// Toggle filter form

const filter = document.getElementById("open-filter");
const closeFilter = document.getElementById("close-filter");

function toggleSettings() {
    const settings = document.getElementById("filter-settings");
    if (settings.classList.contains("hidden")) {
        settings.classList.remove("hidden");
        filter.classList.add("active");
    } else {
        settings.classList.add("hidden");
        filter.classList.remove("active");
    }
}

filter.addEventListener("click", toggleSettings);
closeFilter.addEventListener("click", toggleSettings);


//Toggle form categories

function toggleCat () {
    if (this.nextElementSibling.classList.contains("hidden")) {
        this.nextElementSibling.classList.remove("hidden");
        this.classList.add("open");
    } else {
        this.nextElementSibling.classList.add("hidden");
        this.classList.remove("open");
    }
}

const dropdownIcons = document.querySelectorAll(".dropdown-icon");

dropdownIcons.forEach(function(button){
    button.addEventListener("click", toggleCat)
});

