<?php

// Datos del SMTP
$smtpHost = getenv("servidor");
$smtpUsername = getenv("usuario");
$smtpPassword = getenv("password");
$smtpPort = 465
;

// Destinatario
$to = $_POST['email'];

// Asunto del email
$subject = $_POST['subject'];

// Mensaje del email
$message = $_POST['message'];

// Cabeceras del email
$headers = 'From: ' . $smtpUsername . "\r\n" .
           'Reply-To: ' . $smtpUsername . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Configuración del servidor SMTP
ini_set('SMTP', $smtpHost);
ini_set('smtp_port', $smtpPort);
ini_set('username', $smtpUsername);
ini_set('password', $smtpPassword);

// Envío del email
mail($to, $subject, $message, $headers);

?>