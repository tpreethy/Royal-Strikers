$('.carousel').carousel({
        interval: 5000 //changes the speed
    })

var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'tpreethy17' + '@' + 'gmail' + '.' + 'com');

    var shiftWindow = function() { scrollBy(0, -165) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);