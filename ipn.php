<?php
require_once 'config.php';

// ==============================
// VERIFY PAYFAST DATA
// ==============================

$data = $_POST;

// Build validation string
$pfData = [];
foreach ($data as $key => $val) {
    if ($key !== 'signature') {
        $pfData[$key] = urlencode(stripslashes($val));
    }
}

$pfParamString = '';
foreach ($pfData as $key => $val) {
    $pfParamString .= $key . '=' . $val . '&';
}
$pfParamString = substr($pfParamString, 0, -1);

// Verify signature
$signature = md5($pfParamString);

if ($signature !== $_POST['signature']) {
    http_response_code(400);
    exit("Invalid signature");
}

// ==============================
// CHECK PAYMENT STATUS
// ==============================

if ($_POST['payment_status'] === 'COMPLETE') {

    $orderID = generateOrderID();
    $customerEmail = $_POST['email_address'];
    $firstName = $_POST['name_first'];
    $amount = $_POST['amount_gross'];
    $description = $_POST['item_description'];

    // ==========================
    // SAVE ORDER TO FILE
    // ==========================

    $orderLog = "Order ID: $orderID\n";
    $orderLog .= "Customer: $firstName\n";
    $orderLog .= "Email: $customerEmail\n";
    $orderLog .= "Amount: R$amount\n";
    $orderLog .= "Items: $description\n";
    $orderLog .= "Date: " . date("Y-m-d H:i:s") . "\n";
    $orderLog .= "---------------------------\n";

    file_put_contents("orders.txt", $orderLog, FILE_APPEND);

    // ==========================
    // EMAIL TO CUSTOMER
    // ==========================

    $subjectCustomer = "Order Confirmation - $orderID";

    $messageCustomer = "
    Hi $firstName,

    Thank you for your order!

    Order ID: $orderID
    Amount Paid: R$amount

    We are preparing your order and will send tracking details soon.

    Regards,
    " . SITE_NAME;

    $headers = "From: " . FROM_NAME . " <" . FROM_EMAIL . ">\r\n";

    mail($customerEmail, $subjectCustomer, $messageCustomer, $headers);

    // ==========================
    // EMAIL TO ADMIN
    // ==========================

    $subjectAdmin = "New Paid Order - $orderID";

    $messageAdmin = "
    New order received!

    Order ID: $orderID
    Customer: $firstName
    Email: $customerEmail
    Amount: R$amount
    Items: $description
    ";

    mail(ADMIN_EMAIL, $subjectAdmin, $messageAdmin, $headers);

}

http_response_code(200);
exit("OK");