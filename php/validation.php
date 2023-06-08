<?php

require 'Export.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //validation of the form

    $myClass = new Export();
    try {
        $myClass->execute($_POST);
    } catch ( \PhpOffice\PhpSpreadsheet\Writer\Exception $e ) {
        $myfile = fopen("../var/bug.txt", "w");
        fwrite($myfile, $e->getMessage());
        fclose($myfile);
    }
}