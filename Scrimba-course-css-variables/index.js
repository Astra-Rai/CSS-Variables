/*
Notes:




-CSS variable live in the DOM meaning that you can update them within JavaScript
-querySelector(): The Document Method that returns the first element within the 
document that matches the specified selector or group of selectors
-getComputerSyte()method returns the values and properties for the 
elements we pass in
-HTMLElement.style property is used to get as well as 
set the inline style of an element
-The CSSStyleDeclaration.setProperty()method interface 
returns a DOM string containing the value of a specified CSS property




*/





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