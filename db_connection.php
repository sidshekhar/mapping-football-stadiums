<?php

//username
$DB_USERNAME = "uczchek";

// Open a connection to the database
$dbh = pg_connect("dbname=$DB_USERNAME");
if (!$dbh) {
    die("Error in connection: " . pg_last_error());
}

?>