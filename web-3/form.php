<?php

// Verificar si el formulario ha sido enviado
if (isset($_POST['sendEmail'])) {

  // Obtener los datos del formulario
  $nombre = $_POST['name'];
  $email = $_POST['email'];
  $mensaje = $_POST['message'];

  // Configurar el correo electrónico
  $asunto = "Formulario web - " . $nombre;
  $destinatario = "hernandezgalvezalejandro@gmail.com";
  $cuerpo = "Nombre: $nombre \nCorreo electrónico: $email \nMensaje: $mensaje";

  // Enviar el correo electrónico
  $exito = mail($destinatario, $asunto, $cuerpo);

  // Mostrar mensaje de éxito o error
  if ($exito) {
    echo "<p>¡Su mensaje ha sido enviado correctamente!</p>";
  } else {
    echo "<p>¡Error al enviar el mensaje! Inténtalo de nuevo.</p>";
  }
}

?>