<?php
// set up database connection, and load functions
include('db_connection.php');
include('db_functions.php');

// Initial query to select all the data from the 'stadiums' table.
$query = "SELECT * from stadiums";





//Search functionality for teams - loose matching to account for missspelling.
if (isset($_POST['teamsearch'])) {
	$sev = $_POST['teamsearch'];

	//search string and SQL result converted to upper case to account for capitalized team names.
	$uppersev = strtoupper($sev);
	$query .= " WHERE upper(team) LIKE '%$uppersev%'";
}




//Stadium capacity Range Filter.
if (isset($_POST['lowerbounds'], $_POST['upperbounds'])) {
	
	$lower = $_POST['lowerbounds'];
	$upper = $_POST['upperbounds'];
	
	//Check if upper range is empty, null or zero - so as to not cause query error.
	if (!empty($upper)) { 
    $query .= " WHERE capacity BETWEEN $lower AND $upper";
	}
	
	}


//Premier League toggle functionality
if (isset($_POST['premierleague'])) {
	$sev = $_POST['premierleague'];
	if ($sev == 'Yes'){
	$query .= " WHERE league = 'Premier League'";
	}
}


//National Teams toggle functionality
if (isset($_POST['nationalteams'])) {
	$sev = $_POST['nationalteams'];
	if ($sev == 'Yes'){
	$query .= " WHERE league = 'National'";
	}
}




// this captures ALL the values in the stadiums table as an array in PHP.
$allvalues = db_assocArrayAll($dbh, "SELECT * from stadiums");


// this captures the specific filters applied to the query on the stadiums table as an array in PHP
$results = db_assocArrayAll($dbh,$query);


// This turns the above PHP array into a Javascript array for the rest of the Javascript to use.
echo "<script type='text/javascript'>";
echo "var myData = ".json_encode($results,JSON_NUMERIC_CHECK);
echo "</script>";

// Puts ALL the data in the stadiums table into a javascript array - used for search autocomplete results.
echo "<script type='text/javascript'>";
echo "var allData = ".json_encode(array_values($allvalues),JSON_NUMERIC_CHECK);
echo "</script>";

?>
