const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {

    button.addEventListener('click', function (chak) {

        if (chak.target.id === 'grey') {
            body.style.backgroundColor = chak.target.id;
        }
        if (chak.target.id === 'white') {
            body.style.backgroundColor = chak.target.id;
        }
        if (chak.target.id === 'blue') {
            body.style.backgroundColor = chak.target.id;
        }
        if (chak.target.id === 'yellow') {
            body.style.backgroundColor = chak.target.id;
        }
        if (chak.target.id === 'red') {
            body.style.backgroundColor = chak.target.id;
        }

    });

});











