// Validación básica del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // Función para validar email
  function esEmailValido(email) {
    return email.includes("@") && email.includes(".");
  }

  // Manejar el envío del formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir envío automático

    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();

    // Variable para verificar si hay errores
    let hayErrores = false;

    // Limpiar mensajes de error previos
    const erroresPrevios = document.querySelectorAll(".error-mensaje");
    erroresPrevios.forEach((error) => error.remove());

    // Limpiar clases de validación previas
    const inputs = document.querySelectorAll(".form-control");
    inputs.forEach((input) => {
      input.classList.remove("is-valid", "is-invalid");
    });

    // Validar nombre
    if (nombre === "") {
      mostrarError("nombre", "El nombre es obligatorio");
      hayErrores = true;
    }

    // Validar apellido
    if (apellido === "") {
      mostrarError("apellido", "El apellido es obligatorio");
      hayErrores = true;
    }

    // Validar email
    if (email === "") {
      mostrarError("email", "El correo electrónico es obligatorio");
      hayErrores = true;
    } else if (!esEmailValido(email)) {
      mostrarError("email", "El correo electrónico no es válido");
      hayErrores = true;
    }

    // Si no hay errores, mostrar mensaje de éxito
    if (!hayErrores) {
      mostrarExito();
      form.reset(); // Limpiar formulario
    }
  });

  // Función para mostrar errores
  function mostrarError(campoId, mensaje) {
    const campo = document.getElementById(campoId);
    campo.classList.add("is-invalid");

    const mensajeError = document.createElement("div");
    mensajeError.className = "error-mensaje text-danger mt-1";
    mensajeError.textContent = mensaje;

    campo.parentNode.appendChild(mensajeError);
  }

  // Función para mostrar mensaje de éxito
  function mostrarExito() {
    alert(
      "¡Gracias! Tu información ha sido enviada correctamente. Te contactaremos pronto."
    );
  }
});
