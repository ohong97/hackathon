var div = document.createElement('div');
div.className = 'frame';
div.id = 'frameboi';
div.innerHTML = '<iframe src = "https://www.google.com"></iframe>';
document.body.appendChild(div);


function onLoaded() {
    var links = document.querySelectorAll("a"); //store the anchor-tagged links on the webpage

    for (var i = 0; i < links.length; i++)
	{
	    links[i].onmouseover = function(event) {
		mouseOver(event.target, event.clientX, event.clientY)
	    }; //event target is element that was moused over 
	    links[i].onmouseout = function(event) {mouseOut(event.target)};
	}
}


function mouseOver(link, x, y) {
    div.style.display = 'block'; //show iframe
    div.style.top = (y-50).toString() + "px";
    div.style.left = (x+100).toString() + "px";
    div.innerHTML = '<iframe src = "'+link.href+'"></iframe>'; //link is not between a tags, but its own attribute
}

function mouseOut(link) {
    document.getElementById('frameboi').style.display = 'none'; //hide iframe 
}

document.addEventListener('DOMNodeInserted', onLoaded); //wait for Google's weird link loading
