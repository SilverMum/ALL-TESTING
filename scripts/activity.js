// MINI CARD SWITCHING
document.querySelectorAll('.mini-card').forEach(card => {
    card.addEventListener('click', () => {
        const target = card.getAttribute('data-target');

        document.querySelectorAll('.activity-info').forEach(info => {
            info.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');
    });
});

// OVERLAY OPEN/CLOSE
function openOverlay(id) {
    document.getElementById(id).style.display = "flex";
    document.body.classList.add("no-scroll");
}

function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
    document.body.classList.remove("no-scroll");
}
