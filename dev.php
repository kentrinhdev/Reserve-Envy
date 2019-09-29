<?php

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

$txt = "[{\n";
$errorMSG = "";
if (empty($_POST["dev1"])) {
    $errorMSG = "dev 1 Status is missing";
    $myfile = fopen("dev.json", "w") or die("Unable to open file!");
    $dev1 = "";
    $txt .= "\"dev1\": \"$dev1\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
} else {
    $myfile = fopen("dev.json", "w") or die("Unable to open file!");
    $dev1 = $_POST["dev1"];
    $txt .= "\"dev1\": \"$dev1\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["dev2"])) {
    $errorMSG = "dev 2 Status is missing";
    $myfile = fopen("dev.json", "w") or die("Unable to open file!");
    $dev2 = "";
    $txt .= "\"dev2\": \"$dev2\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
} else {
    $myfile = fopen("dev.json", "w") or die("Unable to open file!");
    $dev2 = $_POST["dev2"];
    $txt .= "\"dev2\": \"$dev2\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["dev3"])) {
    $errorMSG = "dev 3 Status is missing";
    $myfile = fopen("dev.json", "w") or die("Unable to open file!");
    $dev3 = "";
    $txt .= "\"dev3\": \"$dev3\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
} else {
    $myfile = fopen("dev.json", "w") or die("Unable to open file!");
    $dev3 = $_POST["dev3"];
    $txt .= "\"dev3\": \"$dev3\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["dev4"])) {
    $errorMSG = "dev 4 Status is missing";
    $myfile = fopen("dev.json", "w") or die("Unable to open file!");
    $dev4 = "";
    $txt .= "\"dev4\": \"$dev4\"\n";
    fwrite($myfile, $txt);
    fclose($myfile);
} else {
    $myfile = fopen("dev.json", "w") or die("Unable to open file!");
    $dev4 = $_POST["dev4"];
    $txt .= "\"dev4\": \"$dev4\"\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

$myfile = fopen("dev.json", "w") or die("Unable to open file!");
$txt .= "}]";
fwrite($myfile, $txt);
fclose($myfile);

if(empty($errorMSG)){
	$msg = "[ Environment Reserved ]";
	echo json_encode(['code'=>200, 'msg'=>$msg]);
	exit;
}

echo json_encode(['code'=>404, 'msg'=>$errorMSG]);

?>
