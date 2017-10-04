<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// put your email address here
	$youremail = 'Info@OnlineGainesville.com';

	// prepare a "pretty" version of the message
	// Important: if you added any form fields to the HTML, you will need to add them here also
	$body = "This is the form that was just submitted:
	Firsname:  $_POST[name]
	Lastname: $_POST[surname]
	E-Mail: $_POST[email]
	Phone: $_POST[phone]
	Message: $_POST[message]";

	// Use the submitters email if they supplied one
	// (and it isn't trying to hack your form).
	// Otherwise send from your email address.
	if($_POST["message"] != "" && $_POST["name"] != "") {
		if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
		  $headers = "From: $_POST[email]";
		} else {
		  $headers = "From: $youremail";
		}

		// finally, send the message
		mail($youremail, 'Contact Form', $body, $headers );
		header( "refresh:3; url=index.html" );
		echo "<!DOCTYPE HTML>
		<html>
		<head>

		<title>Thanks!</title>

		</head>
		<body>

		<h1>Thanks</h1>
		<h1>We'll get back to you as soon as possible.</h1>

		</body>
		</html>";
	} else {
		echo "<h1>Please press the back button and fill in all fields</h1>";
	}
}

// otherwise, let the spammer think that they got their message through

?>
