<?php
require_once 'config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $orderID = generateOrderID();
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $orderDetails = $_POST['orderDetails'];
    $total = $_POST['total'];

    // ==========================
    // SAVE ORDER
    // ==========================

    $orderLog = "EFT Order ID: $orderID\n";
    $orderLog .= "Name: $name\n";
    $orderLog .= "Email: $email\n";
    $orderLog .= "Address: $address\n";
    $orderLog .= "Total: R$total\n";
    $orderLog .= "Items: $orderDetails\n";
    $orderLog .= "Date: " . date("Y-m-d H:i:s") . "\n";
    $orderLog .= "---------------------------\n";

    file_put_contents("orders.txt", $orderLog, FILE_APPEND);

    // ==========================
    // EMAIL CUSTOMER
    // ==========================

    $subjectCustomer = "EFT Order Received - $orderID";

    $messageCustomer = "
    Hi $name,

    We have received your EFT order.

    Order ID: $orderID
    Total: R$total

    Please complete payment using:

    Bank: Capitec
    Account Name: Mr Buthelezi
    Account Number: XXXXXXXX
    Branch Code: 250655

    Send proof of payment via WhatsApp.

    Thank you!
    ";

    $headers = "From: " . FROM_NAME . " <" . FROM_EMAIL . ">\r\n";

    mail($email, $subjectCustomer, $messageCustomer, $headers);

    // ==========================
    // EMAIL ADMIN
    // ==========================

    $subjectAdmin = "New EFT Order - $orderID";

    $messageAdmin = "
    New EFT Order:

    Name: $name
    Email: $email
    Address: $address
    Total: R$total
    Items: $orderDetails
    ";

    mail(ADMIN_EMAIL, $subjectAdmin, $messageAdmin, $headers);

    header("Location: thank-you.html");
    exit();
}
?>