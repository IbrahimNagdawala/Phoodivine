function loader() {
    let loaderContainer = document.querySelector('.loader-container');
    loaderContainer.classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader , 1500);
}

window.onload = fadeOut();