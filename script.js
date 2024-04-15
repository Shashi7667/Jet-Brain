//--- --- Navbar search box start --- ---

let inputBox = document.querySelector('.input-box'),
    searchIcon = document.querySelector('.search'),
    closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
    inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
    inputBox.classList.remove('open');
});

searchIcon.addEventListener('click', () => {
    inputBox.classList.add('open');
    document.querySelector('.navbar-nav').style.display = 'none';
    document.querySelector('.icons').style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    inputBox.classList.remove('open');
    document.querySelector('.navbar-nav').style.display = 'flex';
    document.querySelector('.icons').style.display = 'flex';
});

//--- --- Navbar search box end --- ---

const video = document.getElementById('videoPlayer');
const button = document.getElementById('toggleButton');

button.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        button.textContent = 'Pause'; // Update button text
    } else {
        video.pause();
        button.textContent = 'Play'; // Update button text
    }
});

// Hide the button when the video is playing
video.addEventListener('play', function () {
    button.style.display = 'none';
});

// Show the button when the video is paused
video.addEventListener('pause', function () {
    button.style.display = 'block';
});







const updateCursor = ({ x, y }) => {
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--y', y)
}

document.body.addEventListener('pointermove', updateCursor)