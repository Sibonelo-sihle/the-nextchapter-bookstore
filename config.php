<?php

// ==============================
// SITE SETTINGS
// ==============================

define('SITE_NAME', 'The Next Chapter');
define('ADMIN_EMAIL', 'orders@sibonelobuthelezi10@gmail.com'); // change to your real email
define('WHATSAPP_NUMBER', '+27831234567'); // change to your real WhatsApp number

// ==============================
// PAYFAST SETTINGS
// ==============================

define('PAYFAST_MERCHANT_ID', 'YOUR_MERCHANT_ID');
define('PAYFAST_MERCHANT_KEY', 'YOUR_MERCHANT_KEY');
define('PAYFAST_PASSPHRASE', 'YOUR_PASSPHRASE'); // if set in PayFast

// ==============================
// EMAIL SETTINGS
// ==============================

define('FROM_EMAIL', 'orders@sibonelobuthelezi10@gmail.com');
define('FROM_NAME', SITE_NAME);

// ==============================
// HELPER: GENERATE ORDER ID
// ==============================

function generateOrderID() {
    return 'TNC-' . strtoupper(substr(md5(uniqid()), 0, 8));
}