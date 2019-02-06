function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5, 4); 
document.getElementById("cost").innerHTML= numOfMonitors;

var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('copyright');
el.innerHTML = "<p>Copyright &copy;" + year + "</p>"; 

