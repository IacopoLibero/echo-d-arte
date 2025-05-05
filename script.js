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
    
    // Aggiorna il countdown se siamo nella pagina contest
    if(id === 'contest') {
        updateCountdown();
    }
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

// Funzione per calcolare e aggiornare il countdown
function updateCountdown() {
    const registrationOpeningDate = new Date('2025-05-25T08:00:00');
    const currentDate = new Date();
    
    // Calcola la differenza in millisecondi
    const diffTime = registrationOpeningDate - currentDate;
    
    // Se le iscrizioni sono già aperte
    if (diffTime <= 0) {
        const registrationClosingDate = new Date('2025-05-29T23:00:00');
        const diffTimeClosing = registrationClosingDate - currentDate;
        
        // Se le iscrizioni sono chiuse
        if (diffTimeClosing <= 0) {
            document.querySelector('.countdown p').textContent = 'Le iscrizioni sono chiuse!';
        } else {
            // Calcola i giorni rimanenti alla chiusura
            const diffDays = Math.ceil(diffTimeClosing / (1000 * 60 * 60 * 24));
            document.querySelector('.countdown p').textContent = `Le iscrizioni sono aperte! Chiudono tra ${diffDays} giorni.`;
        }
    } else {
        // Calcola i giorni rimanenti all'apertura
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        document.getElementById('countdown-days').textContent = diffDays;
    }
}

// Esegui aggiornamento del countdown quando la pagina è caricata
document.addEventListener('DOMContentLoaded', function() {
    // Se siamo nella pagina contest, aggiorna subito il countdown
    if (document.querySelector('.content.active') && document.querySelector('.content.active').id === 'contest') {
        updateCountdown();
    }
});