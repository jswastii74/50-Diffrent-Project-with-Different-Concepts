const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const body = document.getElementsByTagName('body');
// console.log(body);

btn.addEventListener('click', () => {
    var b = search.classList.toggle('active');
    console.log(b);
    input.focus()
})