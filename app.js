// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//1 creacion de array asi guardo amigos

let listaDeAmigos = [];

//2 creacion de funcion para agregar los amigos

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');  //extrae el valor que escribio el usuario
    let amigo = inputAmigo.value.trim();                //trim para eliminar espacios en blanco

    if (amigo === ''){                                  //verificacion que no este vacio
        alert ('Por favor, ingresa el nombre de tu amigo!');
        return;                                         
    } 
     if (listaDeAmigos.includes(amigo)){                //evito que se repitan nombres
        alert(`${amigo} ya se encuentra en la lista, elije otro!`)
        return;
     }

     listaDeAmigos.push(amigo);                           //ingresando nombre de amigos al array si ya se cumplio todas las validaciones
     mostrarNombres();
     vaciarInput();                                       // limpieza luego de ingresar nombre
}

// ya hecho la funcion para agregar los amigos, procedo a que aparezcan en la lista, previamente al sorteo.

function mostrarNombres(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';                                  // limpio contenido anterior para evitar duplicados  
//recorre el array de amigos y creamos un li para cada uno

    for (let i = 0; i < listaDeAmigos.length; i++){
        let nombre = document.createElement('li');          
        nombre.textContent = listaDeAmigos[i];

        lista.appendChild(nombre);                          //agrego nuevo elementro a la lista eh el html
    }
}

function vaciarInput(){
    document.getElementById('amigo').value = '';
    }

//funcion para sortear participantes

function sortearAmigo(){
    if (listaDeAmigos.length < 2){      // no seria un sorteo si hay solo 1
        alert('Ingresa al menos 2 nombres poder iniciar el sorteo!');
        return;                                                 //salida si no hay minimo 2 participantes
    }                               
    else{
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);   
        amigoSecreto = listaDeAmigos[indiceAleatorio];              //seleccion de amigo correspondiente
        let resultado = document.getElementById('resultado');       //obetener elemento donde mostrar el resultado
        resultado.innerHTML = '';

        //mostrar el nombre del ganador

        let nombre = document.createElement('li');
        nombre.textContent = `El amigo secreto seleccionado es..... *musica de suspenso* -${amigoSecreto}-  Felicidades!!!`
        resultado.appendChild(nombre);                      //agrega el resultado al html
    }
}











