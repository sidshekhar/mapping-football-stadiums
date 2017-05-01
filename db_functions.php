<?php

/*
   displayResult applies the query $sqlQuery to the database connected through $db
   and displays the result
*/

function displayResult($db,$sqlQuery) {

	/* Apply the query to the given database */
	$resultSet = pg_query($db,$sqlQuery);
	if (!$resultSet) {
  		echo "An error occured: ".pg_last_error($db)."\n";
 		exit;
	}
	
	/* Retrieve the numbers of rows and columns of the result */	
	$rows = pg_num_rows($resultSet);
	$fields = pg_num_fields($resultSet);

	/* Create the header of the table */
	$tableFields = "";
	for($field_num = 0; $field_num < $fields; $field_num++){
		$tableFields .= "<th>" . pg_field_name($resultSet,$field_num) . "</th>"; 
	}

	/* Create the rows of the table */
	$tableTxt = "";
	for ($row_num = 0; $row_num < $rows; $row_num++){
		$myData = pg_fetch_array($resultSet);
		$tableTxt .= "<tr>";
       	for($field_num = 0; $field_num < $fields; $field_num++){
			$tableTxt .= "<td>" . $myData[$field_num]. "</td>";
		}
		$tableTxt .= "</tr>";
	}

	/* Draw the table */
	echo "<table><tr><thead>";
	echo $tableFields;
	echo "</thead></tr><tbody>";
	echo $tableTxt;
	echo "</tbody></table>";
}

/*
   db_assocArray applies the query $sqlQuery to the database connected through $db 
   and stores the result in an associative array
*/

function db_assocArray($db,$sqlQuery){

	$resultSet = pg_query($db,$sqlQuery);
	if (!$resultSet) {
  		echo "An error occured: ".pg_last_error($db)."\n";
 		exit;
	}
	$data = pg_fetch_assoc($resultSet);
	return $data;

}

function db_assocArrayAll($db,$sqlQuery){

	$resultSet = pg_query($db,$sqlQuery);
	if (!$resultSet) {
  		echo "An error occured: ".pg_last_error($db)."\n";
 		exit;
	}
	$data = pg_fetch_all($resultSet);
	return $data;

}


?>