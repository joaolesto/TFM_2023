<?php

require 'Export.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //validation of the form

    $myClass = new Export();
    $myClass->execute($_POST);
}