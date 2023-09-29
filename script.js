const formulario = document.querySelector("#form");

const nombreResultado = document.querySelector("#nombreResultado");
const apellidoResultado = document.querySelector("#apellidoResultado");
const edadResultado = document.querySelector("#edadResultado");
const resultado = document.querySelector("#resultado");

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries())
    
    nombreResultado.textContent = dataObject.name;
    apellidoResultado.textContent = dataObject.lastName;
    edadResultado.textContent = dataObject.age;

    resultado.style.display = "block";
});



