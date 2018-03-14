<?php
//phpinfo();
if(isset($_POST['email-content'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "calvinatlan@gmail.com";
    $email_subject = "SimonWilsonMusic Submitted Email";

    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }


    $contact_info = $_POST['contact-info']; // not required
    $email_content = $_POST['email-content']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if(strlen($email_content) < 2) {
        $error_message .= 'The Comments you entered do not appear to be valid.<br />';
    }

    if(strlen($error_message) > 0) {
        died($error_message);
    }

    $email_message = "";

    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $email_message .= "Contact Info: ".clean_string($contact_info)."\n";
    $email_message .= "Content: ".clean_string($email_content)."\n";

    // create email headers
    //$headers = 'From: info@simonwilson.com'."\r\n".
    //    'Reply-To: info@simonwilson.com'."\r\n" .
    //    'X-Mailer: PHP/' . phpversion();
    //mail($email_to, $email_subject, $email_message);  
?>

Thank you for contacting us. We will be in touch with you very soon.

<?php
}
?>
