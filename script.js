//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
        setTimeout(() => {
            square.style.backgroundColor = '';
        }, 1000);
    });
});