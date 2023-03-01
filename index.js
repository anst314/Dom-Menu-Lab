
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
topMenuEl = document.querySelector('#top-menu');
//console.log(topMenuEl);
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3 Add a class of flex-around to topMenuEl.
topMenuEl = document.querySelector('#top-menu');
topMenuEl.classList.add('flex-around');

console.log(topMenuEl);
console.log(mainE1);
console.dir(mainE1);

// 3.0 Menu Data Structure

/*const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  */
// Task 3.1
for (let i = 0; i < menuLinks.length; i++) {
  const link = menuLinks[i];
console.log(menuLinks);
}

//Create an <a>element.
 const a = document.createElement('a');
//On the new element, add an href attribute with its value set to the href property of the "link" object  
a.setAttribute('href', obj.href);

//Set the new element's content to the value of the   of the "link" object.
a.textContent = obj.text;
console.dir(a)
//Append the new element to the topMenuEl element.
topMenuEl.appendChild(a);

console.log(topMenuEl);
console.log(mainE1);
console.log(mainE1);

// Part II Tasks 4.0 Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu');

// Task 4.1 Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100';

// Task 4.2 Set the background color of subMenuEl to the value stored in the --sub-menu-bgCSS custom property.
console.log(subMenuEl);
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3 Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// Tasks 5.0 
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Task 5.1 Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks);

const showingSubMenu = false;

// Task 5.2
topMenuEl.addEventListener('click', function(event) { 
  event.preventDefault();
  if (event.target.tagname !== 'a') return;
  console.log(event.target.innerHTML)  
});

