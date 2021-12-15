let hambuger = document.querySelector('.hamburger');

let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');

let sidebar = document.querySelector('#social-nav');

hambuger.addEventListener('click', (key) => {
    key.preventDefault();
    bar1.classList.toggle('animate1');
    bar2.classList.toggle('animate2');
    bar3.classList.toggle('animate3');
    sidebar.classList.toggle('sidebar');

  });