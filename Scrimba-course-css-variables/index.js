

//grab hold of hte rooot of where we declared CSS variables


var root = document.querySelector(':root');
//consoel.log*(':root') --> <html>

//use the method getComputedStyle
//it returns the values and elemwents that we pass in
/*
CSS code
:root {
    --red: #ff6f69;
    --beige: #ffeead;
    --yellow: #ffcc5c;
}
*/
var rootStyles = getComputedStyle(root);


//get the style of in the variable --red
//fetch
var red = rootStyles.getPropertyValue('--red');

//console.log('red: ', red)
//output: red: #ff6f69
//The HTMLElement.style property is used to get as well as set the inline style of an element. 

root.style.setProperty('--red', 'green');