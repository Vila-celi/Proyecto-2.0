/* Eventos en la barra de navegacion con funciones */
const botones = document.querySelectorAll("nav ul li button");

botones.forEach(boton => {
    boton.addEventListener("mouseover", function() {
        // Mostrar las opciones al pasar el mouse sobre el botón
        const opcionesMenu = this.nextElementSibling;
        if (opcionesMenu) {
            opcionesMenu.style.display = 'block';
        }
    });

    boton.addEventListener("mouseout", function() {
        // Ocultar las opciones al retirar el mouse del botón
        const opcionesMenu = this.nextElementSibling;
            if (opcionesMenu) {
                setTimeout(() => {
                    opcionesMenu.style.display = 'none';
                }, 3000);
    }});
});
/* Link de contactos en barra del footer con botones y eventos */
urls = ["https://web.whatsapp.com/", "https://www.instagram.com/", "https://mail.google.com"]

function salirDeLaPagina (id, url) {
    const continuar = window.confirm("¿Desea salir de la pagina?")
    if (continuar){
        alert("Será enviado a otra pagina")
        window.location.href = url;
    } else {
            alert("Continuará navengando en el sitio")
    }
}

const botonWhat = document.getElementById("botonWhat");
    botonWhat.addEventListener("click", function() {
        salirDeLaPagina(botonWhat, urls[0]);
    });

const botonInsta = document.getElementById("botonInsta");
    botonInsta.addEventListener("click", function() {
        salirDeLaPagina(botonInsta, urls[1]);
    });
const botonGmail = document.getElementById("botonGmail");
    botonGmail.addEventListener("click", function() {
        salirDeLaPagina(botonGmail, urls[2]);
    });

let botonForm = document.getElementById("botonFormulario");
/* Restrincciones en el formulario de contacto */
botonForm.addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
        if (email && mensaje) {
            if (email.includes("@"))
                alert("Mensaje enviado");}
            else {
                alert("Es necesario completar email y mensaje.")
            }
});