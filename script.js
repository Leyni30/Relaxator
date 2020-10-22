const container = document.getElementById('container');
const text = document.getElementById('text');

const time = 7500;
const breathe = (time / 5) * 2;
const hold = time / 5;

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';
    setTimeout(function () {
        text.innerText = 'Hold.'
        setTimeout(function () {
            text.innerText = 'Breathe Out.'
            container.className = 'container shrink';
        }, hold)

    }, breathe)

};
setInterval(breathAnimation, time);