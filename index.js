
// Task 1.0 Select and cache the <main>element in a variable named mainEl.
const mainE1 = document.querySelector('main');

// Task 1.1 Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainE1.style.backgroundColor = 'var(--main-bg)';

// Task 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainE1.innerHTML = '<h1> SEI Rocks!';
console.log(mainE1);
// Task 1.3 Add a class of flex-ctr to mainEl.
mainE1.classList.add("flex-ctr");

// Task 2.0 Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
 const topMenuEl = document.querySelector('#top-menu');

 // Task 2.1 Set the height topMenuElement to be 100%.
topMenuEl.style.height = '100';

// Task 2.2 Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
//topMenuEl = document.querySelector('#top-menu');
console.log(topMenuEl);
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// Task 2.3 Add a class of flex-around to topMenuEl.
//topMenuEl = document.querySelector('#top-menu');
topMenuEl.classList.add('flex-around');
console.log(topMenuEl);
console.log(mainE1);
console.dir(mainE1);