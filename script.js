function toggleNode(elementId) {
    const element = document.getElementById(elementId);
    
    // On ajoute ou enlève la classe 'active' qui gère l'affichage dans le CSS
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    } else {
        element.classList.add('active');
    }
}
