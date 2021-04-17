<?php

if($_POST) {

	$to_Email   	= "recipient@mail.com"; //Replace with recipient email address
	$subject        = 'Message from website '.$_SERVER["SERVER_NAME"]; //Subject line for emails

	//Sanitize input data using PHP filter_var().
	$user_Name        = $_POST["userName"];
	$user_Email       = $_POST["userEmail"];
	$user_Message     = $_POST["userMessage"];
	$user_Phone       = $_POST["userPhone"];
	$user_Title       = $_POST["userTitle"];

	$user_Message = str_replace("\&#39;", "'", $user_Message);
	$user_Message = str_replace("&#39;", "'", $user_Message);

	$email_body = "User Name: $user_Name.\n".
									"User Title: $user_Title.\n".
											 "User Phone: $user_Phone.\n".
														"User Email: $user_Email.\n".
																 "User Message: $user_Message.\n";


	//proceed with PHP email.
	$headers = 'From: '.$user_Email.'' . "\r\n" .
	'Reply-To: '.$user_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

	$sentMail = @mail($to_Email, $subject, $email_body, $headers);
}

?>
