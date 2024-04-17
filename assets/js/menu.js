document.querySelector('.nav-mobile').addEventListener("click", toggleMobileMenu);
/**
 * Affiche le menu navigation en screen Mobie
 * @param {*} param - la zone (div) a afficher
 * @param {*} classparam - la class a utiliser
 */
function toggleMobileMenu() {
    document.getElementById('navLink').classList.toggle('open');
}