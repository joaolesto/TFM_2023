<?php

require 'Export.php';

//validation of the form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $myClass = new Export();
    $myClass->execute($_POST);
}
