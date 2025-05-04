// Script per la navigazione
function showContent(id) {
    // Nascondi tutti i contenuti
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Mostra il contenuto selezionato
    document.getElementById(id).classList.add('active');
    
    // Chiudi il menu mobile se aperto
    document.getElementById('menu').classList.remove('active');
}

// Script per il toggle del menu mobile
document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

// Gestione del ridimensionamento della finestra
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('menu').classList.remove('active');
    }
});