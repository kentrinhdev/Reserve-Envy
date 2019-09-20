<?php

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

echo copy("BOMB.json", "env.json");

$txt = "[{\n";
$errorMSG = "";
if (empty($_POST["r1st"])) {
    $errorMSG = "Row 1 Status is missing";
} else {
    $myfile = fopen("BOMB.json", "w") or die("Unable to open file!");
    $r1st = $_POST["r1st"];
    $txt .= "\"r1status\": \"$r1st\",\n";
    $r1us = $_POST["r1us"];
    $txt .= "\"r1userstory\": \"$r1us\",\n";
    $r1dv = $_POST["r1dv"];
    $txt .= "\"r1dev\": \"$r1dv\",\n";
    $r1qa = $_POST["r1qa"];
    $txt .= "\"r1qa\": \"$r1qa\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["r2st"])) {
    $errorMSG = "Row 2 Status is missing";
} else {
    $myfile = fopen("BOMB.json", "w") or die("Unable to open file!");
    $r2st = $_POST["r2st"];
    $txt .= "\"r2status\": \"$r2st\",\n";
    $r2us = $_POST["r2us"];
    $txt .= "\"r2userstory\": \"$r2us\",\n";
    $r2dv = $_POST["r2dv"];
    $txt .= "\"r2dev\": \"$r2dv\",\n";
    $r2qa = $_POST["r2qa"];
    $txt .= "\"r2qa\": \"$r2qa\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["r3st"])) {
    $errorMSG = "Row 3 Status is missing";
} else {
    $myfile = fopen("BOMB.json", "w") or die("Unable to open file!");
    $r3st = $_POST["r3st"];
    $txt .= "\"r3status\": \"$r3st\",\n";
    $r3us = $_POST["r3us"];
    $txt .= "\"r3userstory\": \"$r3us\",\n";
    $r3dv = $_POST["r3dv"];
    $txt .= "\"r3dev\": \"$r3dv\",\n";
    $r3qa = $_POST["r3qa"];
    $txt .= "\"r3qa\": \"$r3qa\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["r4st"])) {
    $errorMSG = "Row 4 Status is missing";
} else {
    $myfile = fopen("BOMB.json", "w") or die("Unable to open file!");
    $r4st = $_POST["r4st"];
    $txt .= "\"r4status\": \"$r4st\",\n";
    $r4us = $_POST["r4us"];
    $txt .= "\"r4userstory\": \"$r4us\",\n";
    $r4dv = $_POST["r4dv"];
    $txt .= "\"r4dev\": \"$r4dv\",\n";
    $r4qa = $_POST["r4qa"];
    $txt .= "\"r4qa\": \"$r4qa\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["r5st"])) {
    $errorMSG = "Row 5 Status is missing";
} else {
    $myfile = fopen("BOMB.json", "w") or die("Unable to open file!");
    $r5st = $_POST["r5st"];
    $txt .= "\"r5status\": \"$r5st\",\n";
    $r5us = $_POST["r5us"];
    $txt .= "\"r5userstory\": \"$r5us\",\n";
    $r5dv = $_POST["r5dv"];
    $txt .= "\"r5dev\": \"$r5dv\",\n";
    $r5qa = $_POST["r5qa"];
    $txt .= "\"r5qa\": \"$r5qa\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["r6st"])) {
    $errorMSG = "Row 6 Status is missing";
} else {
    $myfile = fopen("BOMB.json", "w") or die("Unable to open file!");
    $r6st = $_POST["r6st"];
    $txt .= "\"r6status\": \"$r6st\",\n";
    $r6us = $_POST["r6us"];
    $txt .= "\"r6userstory\": \"$r6us\",\n";
    $r6dv = $_POST["r6dv"];
    $txt .= "\"r6dev\": \"$r6dv\",\n";
    $r6qa = $_POST["r6qa"];
    $txt .= "\"r6qa\": \"$r6qa\"\n";
    $txt .= "}]";
    fwrite($myfile, $txt);
    fclose($myfile);
}


if(empty($errorMSG)){
	$msg = "[ Environment Reserved ]";
	echo json_encode(['code'=>200, 'msg'=>$msg]);
	exit;
}

echo json_encode(['code'=>404, 'msg'=>$errorMSG]);

?>
