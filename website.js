function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// function openSearch() {
//     document.querySelector(".search-container").style.display = "flex";
//     document.querySelector(".navbar").style.justifyContent = "center";
//     document.querySelector(".search-icon").style.display = "none";
// }

// function closeSearch() {
//     document.querySelector(".search-container").style.display = "none";
//     document.querySelector(".navbar").style.justifyContent = "space-between";
//     document.querySelector(".search-icon").style.display = "block";
// }

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const sections = document.querySelectorAll("section");
    const searchIcon = document.querySelector(".search-icon");
    const backBtn = document.querySelector(".back-btn");
    const searchContainer = document.querySelector(".search-container");
    
    function openSearch() {
        searchContainer.style.display = "block";
        searchBar.focus();
    }
    
    function closeSearch() {
        searchContainer.style.display = "none";
        searchBar.value = "";
        sections.forEach(section => section.style.display = "block");
    }
    
    searchIcon.addEventListener("click", openSearch);
    backBtn.addEventListener("click", closeSearch);
    
    searchBar.addEventListener("input", function () {
        let query = searchBar.value.toLowerCase().trim();
        
        sections.forEach(section => section.style.display = "none");
        
        if (query.includes("bag") || query.includes("fashion bag")) {
            document.getElementById("fashion").style.display = "block";
        } else if (query.includes("bracelet")) {
            document.getElementById("bracelets").style.display = "block";
        }
    });
});

