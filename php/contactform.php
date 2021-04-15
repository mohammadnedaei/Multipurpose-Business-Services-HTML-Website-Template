<?php

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $phone = $_POST['phone'];
  $title = $_POST['title'];
  $message = $_POST['message'];

  // Put Your Support Email Address Here
  $email_from = "CreativeThemes-Company@Support.com";

  $email_subject = "New Form Submission";
  $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                       "User Phone: $phone.\n".
                            "User Address: $title.\n".
                                 "User Message: $message.\n";

  // Put Your Own Email Address Here
  $to = "amirhossainhakimifar@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Replay-To: $visitor_email \r\n";

  mail($to, $email_subject, $email_body, $headers);

 ?>
