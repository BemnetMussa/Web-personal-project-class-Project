<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING) ?? "New Contact Form Message";
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Validate form data
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    // If no errors, send email
    if (empty($errors)) {
        // Set email recipient (change this to your email)
        $to = "your-email@example.com";
        
        // Build email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        
        // Set email headers
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        // Send email
        $mail_sent = mail($to, $subject, $email_content, $headers);
        
        if ($mail_sent) {
            // Redirect back with success message
            header("Location: index.php?status=success#contact");
            exit;
        } else {
            // Redirect back with error message
            header("Location: index.php?status=error&message=Failed%20to%20send%20email#contact");
            exit;
        }
    } else {
        // Redirect back with error messages
        $error_string = implode(",", $errors);
        header("Location: index.php?status=error&message=$error_string#contact");
        exit;
    }
} else {
    // Not a POST request, redirect to home page
    header("Location: index.php");
    exit;
}
?>