var vector = [ Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10 ];

vector.sort();

document.write( "<br><br>Ejercicio N° 2<br> " + vector[ vector.length - 1 ].toPrecision(2));