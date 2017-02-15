var $ = function (id)
{
    return document.getElementById(id);   
}

function imageSwap () 
{
	var listNode = $("image_list");
	var imageNode = $("image");
	
	var imageLinks = listNode.getElementsByTagName("a");
	
	var i, linkNode, image;
	for (i = 0; i < imageLinks.length; i++)
	{
		linkNode = imageLinks[i];
		
		linkNode.onmouseenter = function(evt)
		{
			var link = this;
            this.focus();
			imageNode.src = link.getAttribute("href");
			
			if (!evt) evt = window.event;
			if (evt.preventDefault) {
				evt.preventDefault();
			}
			else {
				evt.returnValue = false;
			}
		}
         /* Making sure clicking does nothing */
        linkNode.onclick = function(evt)
		{
			var link = this;
			if (!evt) evt = window.event;
			if (evt.preventDefault) {
				evt.preventDefault();
			}
			else {
				evt.returnValue = false;
			}
		}
		
		image = new Image();
		image.src = linkNode.getAttribute("href");
	}
	$("firstLink").focus();
}

window.onload = function()
{
	imageSwap()
}
