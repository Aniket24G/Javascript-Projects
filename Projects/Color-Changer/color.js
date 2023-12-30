const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        let color = e.target.id;
        switch (color) {
            case 'pink':
                body.style.backgroundColor = 'rgb(233, 120, 203)';
                break;
            case 'orange':
                body.style.backgroundColor = 'rgb(227, 163, 96)';
                break;
            case 'blue':
                body.style.backgroundColor = 'rgb(96, 228, 238)';
                break;
            case 'yellow':
                body.style.backgroundColor = 'rgb(248, 248, 93)';
                break;
            default:
                body.style.backgroundColor = 'white';
                break;
        }

    });
});

function reset() {
    body.style.backgroundColor = 'white';
}