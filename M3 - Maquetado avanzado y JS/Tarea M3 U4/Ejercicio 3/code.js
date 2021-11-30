var alumnos = [
    { nombre: 'Juan Gomez', nota: 7},
    { nombre: 'Pedro Rodriguez', nota: 4},
    { nombre: 'Roxana García', nota: 8},
    { nombre: 'Luciano Lopez', nota: 5},
    { nombre: 'Fernanda Gimenez', nota: 6},
    { nombre: 'Florencia Martinez', nota: 10},
    { nombre: 'Raul Sanchez', nota: 7},
    { nombre: 'Sandra Figueroa', nota: 8} ];

    const aprobados = alumnos.filter(alumnos => alumnos.nota >= 7);
    let contAprobados = document.querySelector('.aprobados');
    let contAlumnos = document.querySelector('.alumnos');

    for( let i = 0; i < aprobados.length; i++){
        let nuevoNombre = document.createElement('p');
        let separador = document.createElement('hr');
        nuevoNombre.innerText = aprobados[i].nombre + ': ' + aprobados[i].nota;
        contAprobados.append(nuevoNombre);
        contAprobados.append(separador);
    }

    for( let i = 0; i < alumnos.length; i++){
        let nuevoNombre = document.createElement('p');
        let separador = document.createElement('hr');
        nuevoNombre.innerText = alumnos[i].nombre + ': ' + alumnos[i].nota;
        contAlumnos.append(nuevoNombre);
        contAlumnos.append(separador);
    }    
