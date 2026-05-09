function openOverlay(id) {
    document.getElementById(id).style.display = "flex";
    document.body.classList.add("no-scroll");
}

function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
    document.body.classList.remove("no-scroll");
}
