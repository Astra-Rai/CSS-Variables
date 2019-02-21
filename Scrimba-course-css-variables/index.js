var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var red = rootStyles.getPropertyValue('--red');



root.style.setProperty('--red', 'green');