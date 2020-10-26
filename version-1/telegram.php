<?php

/* https://api.telegram.org/bot985602541:AAGfbctU4dVsSpAw0vXj9UtQI57XZ_edhMU/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$mail = $_POST['mail'];
$text = $_POST['message'];
$token = "985602541:AAGfbctU4dVsSpAw0vXj9UtQI57XZ_edhMU";
$chat_id = "-455083112";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $mail,
  'Email' => $text
);

//echo "<script>var file_url = $file_url;</script>";

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');  
} else {
  echo "Error";
}
?>