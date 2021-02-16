var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lavander-field.jpg') {
      myImage.setAttribute ('src','images/family.png');
    } else {
      myImage.setAttribute ('src','images/lavander-field.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Здравствуй, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Приветствуем вновь, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}
