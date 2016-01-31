var speed = 3;
var transition = 8;

var GIFpreloaderWidth = 24;
var GIFpreloaderHeight = 24;

var timer= 0;
var opaciT = 100;

function opacity()
{
    opaciT = opaciT - transition;

    var object = document.getElementById('preloader').style;
    object.opacity = (opaciT / 100);
    object.MozOpacity = (opaciT / 100);
    object.KhtmlOpacity = (opaciT / 100);
    object.filter = "alpha(opacity=" + opaciT + ")";
       
        if (opaciT <= 0)
        {
                document.getElementById('preloader').style.visibility='hidden';
                clearInterval(timer);
        }

}
 
function preload()
{
        if (document.getElementById)
        {
                document.getElementById('preloadGIF').style.visibility='hidden';
                timer = setInterval("opacity()",speed);
        }
       
        else
        {
                if (document.layers)
                {       
                        document.preloadGIF.visibility = 'hidden';
                        timer = setInterval("opacity()",speed);
            }
                else
                {
                        document.all.preloadGIF.style.visibility = 'hidden';
                        timer = setInterval("opacity()",speed);
                }
        }
}

var myCSS;
myCSS = "<style type=\"text/css\">";

myCSS += "html, body { height:auto; margin:0px; padding:0px;}";

myCSS += "#preloader {";
myCSS += "display:block;";
myCSS += "position:fixed;";
myCSS += "width:100%;";
myCSS += "height:100%; ";
myCSS += "top:0;";
myCSS += "left:0;";
myCSS += "background-color:#fff;";
myCSS += "z-index:100000;";
myCSS += "}";

myCSS += "#preloadGIF {";
myCSS += "position:absolute;";
myCSS += "width:" + GIFpreloaderWidth + "px;";
myCSS += "height:" + GIFpreloaderHeight + "px;";
myCSS += "top:210px;";
myCSS += "left:49%;";
myCSS += "margin-left:-" + (GIFpreloaderWidth / 2) + "px;";
myCSS += "}";

myCSS += "</style>";

window.document.write(myCSS);

window.onload = function() { preload(); 
}