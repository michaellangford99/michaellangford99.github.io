var dom = document.getElementById("thefun");

for (x = 0; x < 5; x++)
{
    for (y=0; y < 5; y++)
    {
        var circle = document.createElement("div");
        circle.className = "circle"
        circle.style.position="absolute";
        circle.style.top=y*21+"mm";
        circle.style.left=x*21+"mm";
        circle.style.backgroundColor="rgb("+x*40+", "+y*40+", "+0+")";
        
        dom.appendChild(circle);        
    }
}