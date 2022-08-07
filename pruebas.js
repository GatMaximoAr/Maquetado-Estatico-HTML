const penIcon = document.getElementById('lapiz');
const penciledition = document.getElementById('wordpress');

const divpadre = document.getElementById('textWor');

const crearElementos = ()=> {
    let formularionuevo = document.createElement('form');

    let nuevaEntrada = document.createElement('input');
    let type = document.createAttribute('type');
    type.value = "text";
    nuevaEntrada.setAttributeNode(type);

    let requerido = document.createAttribute("required");
    requerido.value = "";
    nuevaEntrada.setAttributeNode(requerido);

    let nuevoBoton = document.createElement('button');
    nuevoBoton.textContent = 'Hecho';
    nuevoBoton.classList.add("btn");

    formularionuevo.insertAdjacentElement('afterbegin', nuevaEntrada);
    formularionuevo.insertAdjacentElement("beforeend", nuevoBoton);

    
    return formularionuevo;
}

const remplazarElemento = (icono, parent)=> {
    let temporal = crearElementos();
    let remplazo = parent.firstElementChild;
    
   
    icono.addEventListener('mousedown', ()=> {
        let texto = parent.firstElementChild.textContent;
        temporal.firstChild.value = texto;
        parent.replaceChildren(temporal);
    })
   
    temporal.addEventListener('submit', (e)=> {
        e.preventDefault();
        remplazo.textContent = temporal.firstChild.value;
        parent.replaceChildren(remplazo);
})
}


const accionLapiz = (icono)=> {
    penIcon.addEventListener('mousedown', ()=> {
        penciledition.classList.toggle('oculto');
    })
}



const contenedor = (icono, padre)=> {
    accionLapiz(icono);
    remplazarElemento(icono, padre);
}

contenedor(penciledition, divpadre);

/*
const title = document.getElementById('title');
const penIcon = document.getElementById('lapiz');

// Localizando los elementos necesarios
const entrada = document.getElementById('entrada');
entrada.value = title.textContent;
const form = document.getElementById('form');

// muestra input oculto
const accionLapiz = ()=> {
    penIcon.addEventListener('mousedown', ()=> {
        form.classList.toggle('oculto');
        entrada.value = title.textContent;
    })
}

// modificar texto a traves de input
const modInput = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let valorInput = entrada.value;
        title.textContent = valorInput;
        
    })
}

const ediconDesdeInput= () => {
    accionLapiz();
    modInput();
}





// creando un nuevo elemento (form)
const formularionuevo = document.createElement('form');


// creando un nuevo elemento input, con su tipo

const nuevaEntrada = document.createElement('input');
const type = document.createAttribute('type');
type.value = "text";



const idNuevaentrada = document.createAttribute("id");
idNuevaentrada.value = 'nuevaEntrada';
nuevaEntrada.setAttributeNode(idNuevaentrada);
nuevaEntrada.setAttributeNode(type);

const requerido = document.createAttribute("required");
requerido.value = "";
nuevaEntrada.setAttributeNode(requerido);

// creando un nuevo elemento (boton)

const nuevoBoton = document.createElement('button');
nuevoBoton.textContent = 'enviar'



// Insertando un elemento dentro de otro

formularionuevo.insertAdjacentElement('afterbegin', nuevaEntrada);
formularionuevo.insertAdjacentElement("beforeend", nuevoBoton);

// Localizando elementos necesarios

const penciledition = document.getElementById('eidicion-remplazo');
const divpadre = document.getElementById('divPadre');
const remplazo = document.getElementById('remplazar');


const remplazando = () => {
    penciledition.addEventListener('mousedown', ()=> {
        divpadre.replaceChildren(formularionuevo);
        nuevaEntrada.value = remplazo.textContent;
    
    })
}

const edicion = () => {
    formularionuevo.addEventListener('submit', (e)=> {
        let valorEntradra = nuevaEntrada.value;
        remplazo.textContent = valorEntradra;
        divpadre.replaceChildren(remplazo);
    })
}


const edicionYremplazo = () => {
    remplazando();
    edicion();
}  


edicionYremplazo();
ediconDesdeInput();

const prueba = (parametro = [''], valor = "")=> {
    let newarray = [];
    for (let i of parametro) {
        i = document.createElement(valor);
        newarray.push(i);
        console.log(newarray);
    }
}
prueba(['elemento', 'elemento2'], 'input');

const hijo = divpadre.firstElementChild; 

console.log(hijo); */





