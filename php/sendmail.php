if($_SERVER["REQUEST_METHOD"]=="POST"){
    IF(
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

        $to = "branmazama@gmail.com";
        $subject = "Portfolio Contact Form";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
        $headers = "From: {$email}";

        if(mail($to,$subject,$body$headers)){
            echo"Message sent succesfully!;
        } else {
            echo "Failed";
        }
    }
}