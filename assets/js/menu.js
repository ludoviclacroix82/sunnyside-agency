
/**
 * Affiche le menu navigation en screen Mobie
 * @param {*} param - la zone (div) a afficher
 * @param {*} classparam - la class a utiliser
 */
function toggleMobileMenu(param,classparam) {
    document.getElementById(param).classList.toggle(classparam);
}