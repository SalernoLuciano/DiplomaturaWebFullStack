// FORMA SIMPLE
    var vector = [ Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10 ];
        vector.sort();
    for(let i = 0; i < vector.length; i++){
        vector[i] = Math.floor( vector[i] );
    }
        document.write( "<br><br>Ejercicio N° 2<br>Mayor valor del vector: " + vector[ vector.length - 1 ]);

/* FORMA LARGA
    // var vector = [ Math.random()*11, Math.random()*11, Math.random()*11, Math.random()*11, Math.random()*11 ];
    // vector[0] = Math.floor( vector[0] );
    // var max = vector[0];

    // for(let i = 0; i < vector.length; i++){
    //     vector[i] = Math.floor( vector[i] );
    //     if( max < vector[i] ){
    //         max = vector[i];
    //     }
    // }

    // document.write( "<br><br>Ejercicio N° 2<br>Mayor valor del vector: " + max);
*/