var playing = false,
    radio = document.getElementById('radio'),
    player = document.querySelector('.player'),
    play_button = document.querySelector('.play'),
    pause_button = document.querySelector('.pause');

document.addEventListener("DOMContentLoaded", function() {
    player.onclick = function() {
        if (playing == false) {
            radio.play();
            pause_button.classList.remove('hide');
            play_button.classList.add('hide');
            playing = true;

        } else {
            radio.pause();
            pause_button.classList.add('hide');
            play_button.classList.remove('hide');
            playing = false;
        }
    };
});