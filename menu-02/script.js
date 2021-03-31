const toggleButon = document.getElementsByClassName("toggle-button")[0]
const navbarlinks = document.getElementsByClassName("navbar-links")[0]

toggleButon.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})