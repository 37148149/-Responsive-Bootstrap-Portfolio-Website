// changing scroll-bar

let nav = document.querySelector(".navbar");
console.log(document)
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

function toggleNavbar() {
    var navbartoggler = document.getElementById("navbarMenu");
    if (navbartoggler.style.display === "block") {
      navbartoggler.style.display = "none";
    } else {
      navbartoggler.style.display = "block";
    }
  }