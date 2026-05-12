document.querySelectorAll('.mini-card').forEach(card => {
    card.addEventListener('click', () => {
        const target = card.getAttribute('data-target');

        document.querySelectorAll('.activity-info').forEach(info => {
            info.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');
    });
});
