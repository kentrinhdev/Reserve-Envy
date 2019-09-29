"use strict";

function setFocus() {
    $('#us-number-textbox-test1').focus();
}

function clearReserveGrid() {
    let numberOfRows = 4;
    for (let r = 1; r <= numberOfRows; r++) {
        $(`#status-dropbox-test${r}`).prop('selectedIndex', 0);
        $(`#us-number-textbox-test${r}`).val('');
        $(`#dev-dropbox-test${r}`).prop('selectedIndex', 0);
        $(`#qa-dropbox-test${r}`).prop('selectedIndex', 0);
    }
}

function handleStatusGreenColorIndication(rownum) {
    $(`.r${rownum}-numbering`).css("background-color", "green").css("color", "white");
    $(`.r${rownum}-status`).css("background-color", "green").css("color", "white");
    $(`.r${rownum}-environment`).css("background-color", "green").css("color", "white");
    $(`.r${rownum}-userstory`).css("background-color", "green").css("color", "white");
    $(`.r${rownum}-developer`).css("background-color", "green").css("color", "white");
    $(`.r${rownum}-qa`).css("background-color", "green").css("color", "white");
}

function handleStatusRedColorIndication(rownum) {
    $(`.r${rownum}-numbering`).css("background-color", "red").css("color", "white");
    $(`.r${rownum}-status`).css("background-color", "red").css("color", "white");
    $(`.r${rownum}-environment`).css("background-color", "red").css("color", "white");
    $(`.r${rownum}-userstory`).css("background-color", "red").css("color", "white");
    $(`.r${rownum}-developer`).css("background-color", "red").css("color", "white");
    $(`.r${rownum}-qa`).css("background-color", "red").css("color", "white");
}

function handleStatusColor(rownum, rowstatus) {
    if (rowstatus == "UNAVAILABLE") {
        handleStatusRedColorIndication(rownum);
    }
    if (rowstatus == "AVAILABLE") {
        handleStatusGreenColorIndication(rownum);
    }
}

function loadUnreserveGrid() {
    let r = 0;
    var url = "env.json";
    $.getJSON(url, function(json) {
        r = 1;
        var row1st = json[0].r1status;
        var row1us = json[0].r1userstory;
        var row1dv = json[0].r1dev;
        var row1qa = json[0].r1qa;
        $(`#r${r}st-f`).html(`${row1st}`);
        $(`#r${r}us-f`).html(`${row1us}`);
        $(`#r${r}dv-f`).html(`${row1dv}`);
        $(`#r${r}qa-f`).html(`${row1qa}`);
        handleStatusColor(r, row1st)
        r = 2;
        var row2st = json[0].r2status;
        var row2us = json[0].r2userstory;
        var row2dv = json[0].r2dev;
        var row2qa = json[0].r2qa;
        $(`#r${r}st-f`).html(`${row2st}`);
        $(`#r${r}us-f`).html(`${row2us}`);
        $(`#r${r}dv-f`).html(`${row2dv}`);
        $(`#r${r}qa-f`).html(`${row2qa}`);
        handleStatusColor(r, row2st)
        r = 3;
        var row3st = json[0].r3status;
        var row3us = json[0].r3userstory;
        var row3dv = json[0].r3dev;
        var row3qa = json[0].r3qa;
        $(`#r${r}st-f`).html(`${row3st}`);
        $(`#r${r}us-f`).html(`${row3us}`);
        $(`#r${r}dv-f`).html(`${row3dv}`);
        $(`#r${r}qa-f`).html(`${row3qa}`);
        handleStatusColor(r, row3st)
        r = 4;
        var row4st = json[0].r4status;
        var row4us = json[0].r4userstory;
        var row4dv = json[0].r4dev;
        var row4qa = json[0].r4qa;
        $(`#r${r}st-f`).html(`${row4st}`);
        $(`#r${r}us-f`).html(`${row4us}`);
        $(`#r${r}dv-f`).html(`${row4dv}`);
        $(`#r${r}qa-f`).html(`${row4qa}`);
        handleStatusColor(r, row4st)
    });
}

function loadLogConsole() {
    let r = 0;
    var url = "log.json";
    $.getJSON(url, function(json) {
        r = 1;
        var row1 = json[0].log1;
        $(`#log-output${r}`).html(`${row1}`);
        r = 2;
        var row2 = json[0].log2;
        $(`#log-output${r}`).html(`${row2}`);
        r = 3;
        var row3 = json[0].log3;
        $(`#log-output${r}`).html(`${row3}`);
        r = 4;
        var row4 = json[0].log4;
        $(`#log-output${r}`).html(`${row4}`);
    });
}

function handleAppLoad() {
    setFocus();
    clearReserveGrid();
    loadUnreserveGrid();
    loadLogConsole();
}

function handleSelectUnselected(rownum, rowstatus, rowuserstory, rowdev, rowqa) {
    if (rowstatus != "SELECT") {
        $(`#r${rownum}st-f`).html(`${rowstatus}`);
    }
    if (rowuserstory === "" || rowuserstory === " ") {
        //Keep data
    } else {
        $(`#r${rownum}us-f`).html(`US${rowuserstory}`);
    }
    if (rowdev != "SELECT") {
        $(`#r${rownum}dv-f`).html(`${rowdev}`);
    }
    if (rowqa != "SELECT") {
        $(`#r${rownum}qa-f`).html(`${rowqa}`);
    }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getDate() {
    var d = new Date();
    var date = `${(d.getMonth()+1)}/${d.getDate()}/${d.getFullYear()}`;
    return date;
}

function getTime() {
    var d = new Date();
    var hr = d.getHours();
    var mn = addZero(d.getMinutes());
    var sc = addZero(d.getSeconds());
    var ampm = "am";
    if (hr > 12) { hr -= 12; ampm = "pm"; };
    var time = `${hr}:${mn}:${sc} ${ampm}`;
    return time;
}

function outputToLogReserved(row, date, time) {
    let env = $(`#row${row}-env`).html();
    let sts = $(`#r${row}st-f`).html();
    let dev = $(`#r${row}dv-f`).html();
    $(`#log-output${row}`).html(`0${row} | ${env} : Changed to ${sts} by ${dev} on ${date} at ${time} .`);
}

function postToGrid() {
    var r1st = $("#r1st-f").html();
    var r1us = $("#r1us-f").html();
    var r1dv = $("#r1dv-f").html();
    var r1qa = $("#r1qa-f").html();

    var r2st = $("#r2st-f").html();
    var r2us = $("#r2us-f").html();
    var r2dv = $("#r2dv-f").html();
    var r2qa = $("#r2qa-f").html();

    var r3st = $("#r3st-f").html();
    var r3us = $("#r3us-f").html();
    var r3dv = $("#r3dv-f").html();
    var r3qa = $("#r3qa-f").html();

    var r4st = $("#r4st-f").html();
    var r4us = $("#r4us-f").html();
    var r4dv = $("#r4dv-f").html();
    var r4qa = $("#r4qa-f").html();

    $.ajax({
        type: "POST",
        url: "/env.php",
        dataType: "json",
        cache: false,
        data: {
            r1st:r1st,
            r1us:r1us,
            r1dv:r1dv,
            r1qa:r1qa,
            r2st:r2st,
            r2us:r2us,
            r2dv:r2dv,
            r2qa:r2qa,
            r3st:r3st,
            r3us:r3us,
            r3dv:r3dv,
            r3qa:r3qa,
            r4st:r4st,
            r4us:r4us,
            r4dv:r4dv,
            r4qa:r4qa
          },
        success : function(data){
            if (data.code == "200"){
                alert("Success: " + data.msg);
            } else {
                $(".display-error").html("<ul>"+data.msg+"</ul>");
                $(".display-error").css("display","block");
            }
        }
    });
}

function postToLog() {
    var log1 = $("#log-output1").html();
    var log2 = $("#log-output2").html();
    var log3 = $("#log-output3").html();
    var log4 = $("#log-output4").html();

    $.ajax({
        type: "POST",
        url: "/log.php",
        dataType: "json",
        cache: false,
        data: {
            log1:log1,
            log2:log2,
            log3:log3,
            log4:log4
          },
        success : function(data){
            if (data.code == "200"){
                alert("Success: " + data.msg);
            } else {
                $(".display-error").html("<ul>"+data.msg+"</ul>");
                $(".display-error").css("display","block");
            }
        }
    });
}

function logicForReserveButton(row) {
    let rSta, rUst, rDev, rQat;
    $(`#r${row}-btn-reserve`).on('click', function(e) {
        e.preventDefault();

        rSta = $(`#status-dropbox-test${row}`).text().toUpperCase();
        rUst = $(`#us-number-textbox-test${row}`).val();
        rDev = $(`#dev-dropbox-test${row}`).val().toUpperCase();
        rQat = $(`#qa-dropbox-test${row}`).val().toUpperCase();

        if (rUst.length > 0 && rDev != "SELECT") {
            handleSelectUnselected(row, rSta, rUst, rDev, rQat);
            handleStatusColor(row, rSta);
            outputToLogReserved(row, getDate(), getTime());
            postToGrid();
            postToLog();
            clearReserveGrid();
            
        }
    });
}

function handleReserveButtonOne() {
    logicForReserveButton(1);
}

function handleReserveButtonTwo() {
    logicForReserveButton(2);
}

function handleReserveButtonThree() {
    logicForReserveButton(3);
}

function handleReserveButtonFour() {
    logicForReserveButton(4);
}

function postToUnreserveGrid() {
    let r1st, r1us, r1dv, r1qa;
    r1st = $(`#r1st-f`).html();
    r1us = $(`#r1us-f`).html();
    r1dv = $(`#r1dv-f`).html();
    r1qa = $(`#r1qa-f`).html();
    let r2st, r2us, r2dv, r2qa;
    r2st = $(`#r2st-f`).text();
    r2us = $(`#r2us-f`).text();
    r2dv = $(`#r2dv-f`).text();
    r2qa = $(`#r2qa-f`).text();
    let r3st, r3us, r3dv, r3qa;
    r3st = $(`#r3st-f`).text();
    r3us = $(`#r3us-f`).text();
    r3dv = $(`#r3dv-f`).text();
    r3qa = $(`#r3qa-f`).text();
    let r4st, r4us, r4dv, r4qa;
    r4st = $(`#r4st-f`).text();
    r4us = $(`#r4us-f`).text();
    r4dv = $(`#r4dv-f`).text();
    r4qa = $(`#r4qa-f`).text();

    $.ajax({
        type: "POST",
        url: "/env.php",
        dataType: "json",
        cache: false,
        data: {
            r1st:r1st,
            r1us:r1us,
            r1dv:r1dv,
            r1qa:r1qa,
            r2st:r2st,
            r2us:r2us,
            r2dv:r2dv,
            r2qa:r2qa,
            r3st:r3st,
            r3us:r3us,
            r3dv:r3dv,
            r3qa:r3qa,
            r4st:r4st,
            r4us:r4us,
            r4dv:r4dv,
            r4qa:r4qa
          },
        success : function(data){
            if (data.code == "200"){
                alert("Success: " + data.msg);
            } else {
                $(".display-error").html("<ul>"+data.msg+"</ul>");
                $(".display-error").css("display","block");
            }
        }
    });
}

function logicForUnreserveButton(row) {
    let env, rSta, rUst, rDev, rQat;
    $(`#r${row}-btn-available`).on('click', function(e) {
        e.preventDefault();

        rSta = "AVAILABLE";
        if (row == "1") {
            env = "TEST1";
        } else if (row == "2") {
            env = "TEST2";
        } else if (row == "3") {
            env = "TEST3";
        } else if (row == "4") {
            env = "TEST4";
        } else {
            env = "ENVIRONMENT UNKNOWN"
        }
        rUst = $(`#r${row}us-f`).text();
        rDev = $(`#r${row}dv-f`).text();
        rQat = $(`#r${row}qa-f`).text();

        $(`#log-output${row}`).html(`0${row} | ${env} : Made ${rSta} by ${rDev} on ${getDate()} at ${getTime()} .`);
        postToLog();

        //Set to Available and clear row then set row to green
        $(`#r${row}st-f`).html(rSta);
        $(`#r${row}us-f`).html("");
        $(`#r${row}dv-f`).html("");
        $(`#r${row}qa-f`).html("");
        handleStatusGreenColorIndication(row);

        postToUnreserveGrid();
    });
}

function handleUnreserveButtonOne() {
    logicForUnreserveButton(1);
}

function handleUnreserveButtonTwo() {
    logicForUnreserveButton(2);
}

function handleUnreserveButtonThree() {
    logicForUnreserveButton(3);
}

function handleUnreserveButtonFour() {
    logicForUnreserveButton(4);
}

function handleRefreshClick() {
    $('#btn-refresh').on('click', function(e) {
        location.reload(true);
        handleAppLoad();
    });
}

function startApp() {
    handleAppLoad();
    handleReserveButtonOne();
    handleReserveButtonTwo();
    handleReserveButtonThree();
    handleReserveButtonFour();
    handleUnreserveButtonOne();
    handleUnreserveButtonTwo();
    handleUnreserveButtonThree();
    handleUnreserveButtonFour();
    handleRefreshClick();
}

$(startApp);
