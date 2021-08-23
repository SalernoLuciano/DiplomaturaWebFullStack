var distancia = Math.random()*150000;

document.write( "Ejercicio N° 1<br>Distancia: " + distancia.toPrecision(6) + " <br>Transporte:  ");

if( distancia <= 1000 ){
    document.write( "Pie" );
}else if( distancia <= 10000  && distancia > 1000 ){
    document.write( "Bicicleta" );
}else if( distancia <= 30000  && distancia > 10000 ){
    document.write( "Colectivo" );
}else if( distancia <= 100000  && distancia > 30000 ){
    document.write( "Auto" );
}else if( distancia > 100000 ){
    document.write( "Avion" );
}