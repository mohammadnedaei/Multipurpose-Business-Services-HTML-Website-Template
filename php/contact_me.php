<?php

if($_POST) {

	$to_Email   	= "recipient@mail.com"; //Replace with recipient email address
	$subject        = 'Message from website '.$_SERVER["SERVER_NAME"]; //Subject line for emails

	if(!isset($_POST["userName"]) || !isset($_POST["userEmail"]) || !isset($_POST["userMessage"]) || !isset($_POST["userPhone"]) || !isset($_POST["userTitle"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
		die($output);
	}

	$user_Name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
	$user_Email       = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
	$user_Message     = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);
	$user_Phone       = filter_var($_POST["userPhone"], FILTER_SANITIZE_NUMBER_INT);
	$user_Title       = filter_var($_POST["userTitle"], FILTER_SANITIZE_STRING);

	$user_Message = str_replace("\&#39;", "'", $user_Message);
	$user_Message = str_replace("&#39;", "'", $user_Message);

		if(strlen($user_Name)<4)
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Name is too short!'));
			die($output);
		}
		if(strlen($user_Title)<4)
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Title is too short!'));
			die($output);
		}
		if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL))
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
			die($output);
		}
		if(strlen($user_Message)<5)
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
			die($output);
		}
		if(!filter_var($user_Phone, FILTER_SANITIZE_NUMBER_INT))
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid phone!'));
			die($output);
		}

	$email_body = "User Name: $user_Name.\n".
									"User Title: $user_Title.\n".
											 "User Phone: $user_Phone.\n".
														"User Email: $user_Email.\n".
																 "User Message: $user_Message.\n";



	$headers = 'From: '.$user_Email.'' . "\r\n" .
	'Reply-To: '.$user_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

	$sentMail = @mail($to_Email, $subject, $email_body, $headers);

	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_Name .'! Thank you for your email'));
		die($output);
	}
}

?>
