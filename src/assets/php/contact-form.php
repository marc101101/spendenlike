<?php

	require 'c_config.php';

	$name = $_POST['name'];
	$email = $_POST['email'];
	$massage = $_POST['massage'];

	$e_content = "You have been contacted by ". $email . ". Their additional massage is as follow. <br><br>";

	$e_content .= "Sender Name : " . $name . "<br><br>";
	$e_content .= "Sender Massage : " . $massage . "<br><br>";
	$e_content .= "You can contact $email via email, $email";


	$headers = "From: " . $email . PHP_EOL;
	$headers .= "Reply-To: $email" . PHP_EOL;
	$headers .= "MIME-Version: 1.0" . PHP_EOL;
	$headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;



	$mail = mail(XPEEDSTUDIO_EMAIL, XPEEDSTUDIO_SUBJECT, $e_content, $headers);

	if ($mail) {
		echo XPEEDSTUDIO_SUCCESS_MASSAGE;
	}

?>