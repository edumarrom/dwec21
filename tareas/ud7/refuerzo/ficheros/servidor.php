<?php
//header('Content-type: application/json; charset=utf-8');
error_reporting(0);
/*$employees = [
	["firstName" => "John", "lastName" => "Doe"],
	["firstName" => "Anna", "lastName" => "Smith"],
	["firstName" => "Peter", "lastName" => "Jones"],
];
$miJSON = json_encode($employees);
echo $miJSON; */

echo '{ "employees" : [' .
		'{ "firstName":"John" , "lastName":"Doe" },' .
		'{ "firstName":"Anna" , "lastName":"Smith" },' .
		'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
