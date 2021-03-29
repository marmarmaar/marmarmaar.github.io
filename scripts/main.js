var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/me.jpg') {
      myImage.setAttribute ('src','img/soot.png');
    } else {
      myImage.setAttribute ('src','img/me.jpg');
    }
}
