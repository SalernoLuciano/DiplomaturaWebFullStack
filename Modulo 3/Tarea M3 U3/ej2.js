// FORMA SIMPLE
    var vector = [ Math.random()*11, Math.random()*11, Math.random()*11, Math.random()*11, Math.random()*11 ];
        vector.sort();
    for(let i = 0; i < vector.length; i++){
        vector[i] = Math.floor( vector[i] );
    }
    document.write( "<br><br>Ejercicio N° 2 Forma Simple<br>Mayor valor del vector: " + vector[ vector.length - 1 ]);

// FORMA LARGA
    var vector2 = [ Math.random()*11, Math.random()*11, Math.random()*11, Math.random()*11, Math.random()*11 ];
    vector2[0] = Math.floor( vector2[0] );
    var max = vector2[0];

    for(let i = 0; i < vector2.length; i++){
        vector2[i] = Math.floor( vector2[i] );
        if( max < vector2[i] ){
            max = vector2[i];
        }
    }

    document.write( "<br><br>Ejercicio N° 2 Forma Larga<br>Mayor valor del vector: " + max);
