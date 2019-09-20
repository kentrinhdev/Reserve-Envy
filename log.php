<?php

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

echo copy("log.json", "log0.json");

$txt = "[{\n";
$errorMSG = "";
if (empty($_POST["log1"])) {
    $errorMSG = "Log 1 Status is missing";
} else {
    $myfile = fopen("log.json", "w") or die("Unable to open file!");
    $log1 = $_POST["log1"];
    $txt .= "\"log1\": \"$log1\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["log2"])) {
    $errorMSG = "Log 2 Status is missing";
} else {
    $myfile = fopen("log.json", "w") or die("Unable to open file!");
    $log2 = $_POST["log2"];
    $txt .= "\"log2\": \"$log2\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["log3"])) {
    $errorMSG = "Log 3 Status is missing";
} else {
    $myfile = fopen("log.json", "w") or die("Unable to open file!");
    $log3 = $_POST["log3"];
    $txt .= "\"log3\": \"$log3\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["log4"])) {
    $errorMSG = "Log 4 Status is missing";
} else {
    $myfile = fopen("log.json", "w") or die("Unable to open file!");
    $log4 = $_POST["log4"];
    $txt .= "\"log4\": \"$log4\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["log5"])) {
    $errorMSG = "Log 5 Status is missing";
} else {
    $myfile = fopen("log.json", "w") or die("Unable to open file!");
    $log5 = $_POST["log5"];
    $txt .= "\"log5\": \"$log5\",\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}

if (empty($_POST["log6"])) {
    $errorMSG = "Log 6 Status is missing";
} else {
    $myfile = fopen("log.json", "w") or die("Unable to open file!");
    $log6 = $_POST["log6"];
    $txt .= "\"log6\": \"$log6\"\n";
    fwrite($myfile, $txt);
    fclose($myfile);
}
$myfile = fopen("log.json", "w") or die("Unable to open file!");
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
