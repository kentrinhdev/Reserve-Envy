"use strict";

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

function confirmDataRead(rownum, rowstatus, rowuserstory, rowdev, rowqa) {
    if (rowstatus.length && rowstatus == "UNAVAILABLE") {
        $(`#r${rownum}st-f`).html(`${rowstatus}`);
        $(`#r${rownum}us-f`).html(`${rowuserstory}`);
        $(`#r${rownum}dv-f`).html(`${rowdev}`);
        $(`#r${rownum}qa-f`).html(`${rowqa}`);

        handleStatusRedColorIndication(rownum);
    }
    else if (rowstatus.length && rowstatus == "AVAILABLE") {
        $(`#r${rownum}st-f`).html(`${rowstatus}`);
        $(`#r${rownum}us-f`).html(``);
        $(`#r${rownum}dv-f`).html(``);
        $(`#r${rownum}qa-f`).html(``);

        handleStatusGreenColorIndication(rownum);
    }
}

function readData() {
    var url = "BOMB.json";

    $.getJSON(url, function(json) {
        let r1st = json[0].r1status;
        let r1us = json[0].r1userstory;
        let r1dv = json[0].r1dev;
        let r1qa = json[0].r1qa; 
        confirmDataRead(1, r1st, r1us, r1dv, r1qa);

        let r2st = json[0].r2status;
        let r2us = json[0].r2userstory;
        let r2dv = json[0].r2dev;
        let r2qa = json[0].r2qa; 
        confirmDataRead(2, r2st, r2us, r2dv, r2qa);

        let r3st = json[0].r3status;
        let r3us = json[0].r3userstory;
        let r3dv = json[0].r3dev;
        let r3qa = json[0].r3qa; 
        confirmDataRead(3, r3st, r3us, r3dv, r3qa);

        let r4st = json[0].r4status;
        let r4us = json[0].r4userstory;
        let r4dv = json[0].r4dev;
        let r4qa = json[0].r4qa; 
        confirmDataRead(4, r4st, r4us, r4dv, r4qa);

        let r5st = json[0].r5status;
        let r5us = json[0].r5userstory;
        let r5dv = json[0].r5dev;
        let r5qa = json[0].r5qa; 
        confirmDataRead(5, r5st, r5us, r5dv, r5qa);

        let r6st = json[0].r6status;
        let r6us = json[0].r6userstory;
        let r6dv = json[0].r6dev;
        let r6qa = json[0].r6qa; 
        confirmDataRead(6, r6st, r6us, r6dv, r6qa);
    });
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function compareLog() {
    var logjson = "log0.json";
    let logn, r, log1, log2, log3, log4, log5, log6;

    $.getJSON(logjson, function(json) {
        r = 1;
        log1 = json[0].log1;
        logn = $(`#log-output${r}`).html();
        if (log1 != logn) {
            console.log(`NEW LOG ${logn}`);
        } else {
            console.log(`OLD LOG ${log1}`);
        }
    });

}

function generateOutputData(row, oldstatus, olddev, date, time) {
    let env = $(`#row${row}-env`).html();
    let sts = $(`#r${row}st-f`).html();
    let usn = $(`#r${row}us-f`).html();
    let dev = $(`#r${row}dv-f`).html();
    let qat = $(`#r${row}qa-f`).html();
    let result;
    if (oldstatus != sts && sts == "AVAILABLE") {
        result = `Changed to ${sts} by ${olddev} on ${date} at ${time}`;
    } else if (oldstatus != sts && sts == "UNAVAILABLE") {
        result = `Changed to ${sts} US${usn} by ${dev} on ${date} at ${time}`;
    } else {
        //result = ` No data logged at this time `;
        result = `ENV ${sts} ${usn} ${dev} ${qat}`;
    }
    $(`#log-output${row}`).html(`0${row} | ${env} : ${result} .`);
}

function readLog() {
    var oldurl = "env.json";
    let r, oldst, olddev;
    var d = new Date();
    var date = `${(d.getMonth()+1)}/${d.getDate()}/${d.getFullYear()}`;
    var hr = d.getHours();
    var mn = addZero(d.getMinutes());
    var sc = addZero(d.getSeconds());
    var ampm = "am";
    if (hr > 12) { hr -= 12; ampm = "pm"; };
    var time = `${hr}:${mn}:${sc} ${ampm}`;

    $.getJSON(oldurl, function(json) {
        r = 1;
        oldst = json[0].r1status;
        olddev = json[0].r1dev;
        generateOutputData(r, oldst, olddev, date, time);
        r = 2;
        oldst = json[0].r2status;
        olddev = json[0].r2dev;
        generateOutputData(r, oldst, olddev, date, time);
        r = 3;
        oldst = json[0].r3status;
        olddev = json[0].r3dev;
        generateOutputData(r, oldst, olddev, date, time);
        r = 4;
        oldst = json[0].r4status;
        olddev = json[0].r4dev;
        generateOutputData(r, oldst, olddev, date, time);
        r = 5;
        oldst = json[0].r5status;
        olddev = json[0].r5dev;
        generateOutputData(r, oldst, olddev, date, time);
        r = 6;
        oldst = json[0].r6status;
        olddev = json[0].r6dev;
        generateOutputData(r, oldst, olddev, date, time);
    });
}

function handleSelectUnselected(rownum, rowstatus, rowuserstory, rowdev, rowqa) {
    if (rowstatus != "SELECT") {
        $(`#r${rownum}st-f`).html(`${rowstatus}`);
    }
    if (rowuserstory === "" || rowuserstory === " ") {
        //Keep data
    } else {
        $(`#r${rownum}us-f`).html(`${rowuserstory}`);
    }
    if (rowdev != "SELECT") {
        $(`#r${rownum}dv-f`).html(`${rowdev}`);
    }
    if (rowqa != "SELECT") {
        $(`#r${rownum}qa-f`).html(`${rowqa}`);
    }
}

var request;

function handleUpdateClick() {
    $('#btn-update').on('click', function(e) {
        e.preventDefault();

        let r1Status = $('#status-dropbox-dev').val().toUpperCase();
        let r1Userstory = $('#us-number-textbox-dev').val();
        let r1Dev = $('#dev-dropbox-dev').val().toUpperCase();
        let r1Qa = $('#qa-dropbox-dev').val().toUpperCase();
        handleSelectUnselected(1, r1Status, r1Userstory, r1Dev, r1Qa);

        let r2Status = $('#status-dropbox-test').val().toUpperCase();
        let r2Userstory = $('#us-number-textbox-test').val();
        let r2Dev = $('#dev-dropbox-test').val().toUpperCase();
        let r2Qa = $('#qa-dropbox-test').val().toUpperCase();
        handleSelectUnselected(2, r2Status, r2Userstory, r2Dev, r2Qa);

        let r3Status = $('#status-dropbox-test1').val().toUpperCase();
        let r3Userstory = $('#us-number-textbox-test1').val();
        let r3Dev = $('#dev-dropbox-test1').val().toUpperCase();
        let r3Qa = $('#qa-dropbox-test1').val().toUpperCase();
        handleSelectUnselected(3, r3Status, r3Userstory, r3Dev, r3Qa);

        let r4Status = $('#status-dropbox-test2').val().toUpperCase();
        let r4Userstory = $('#us-number-textbox-test2').val();
        let r4Dev = $('#dev-dropbox-test2').val().toUpperCase();
        let r4Qa = $('#qa-dropbox-test2').val().toUpperCase();
        handleSelectUnselected(4, r4Status, r4Userstory, r4Dev, r4Qa);

        let r5Status = $('#status-dropbox-test3').val().toUpperCase();
        let r5Userstory = $('#us-number-textbox-test3').val();
        let r5Dev = $('#dev-dropbox-test3').val().toUpperCase();
        let r5Qa = $('#qa-dropbox-test3').val().toUpperCase();
        handleSelectUnselected(5, r5Status, r5Userstory, r5Dev, r5Qa);

        let r6Status = $('#status-dropbox-test4').val().toUpperCase();
        let r6Userstory = $('#us-number-textbox-test4').val();
        let r6Dev = $('#dev-dropbox-test4').val().toUpperCase();
        let r6Qa = $('#qa-dropbox-test4').val().toUpperCase();
        handleSelectUnselected(6, r6Status, r6Userstory, r6Dev, r6Qa);

        changeRowColor();
        clearInputs();
        postToGrid();
        readLog();
        postToLog();
        compareLog();
    });
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

    var r5st = $("#r5st-f").html();
    var r5us = $("#r5us-f").html();
    var r5dv = $("#r5dv-f").html();
    var r5qa = $("#r5qa-f").html();

    var r6st = $("#r6st-f").html();
    var r6us = $("#r6us-f").html();
    var r6dv = $("#r6dv-f").html();
    var r6qa = $("#r6qa-f").html();

    $.ajax({
        type: "POST",
        url: "/formProcess.php",
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
            r4qa:r4qa,
            r5st:r5st,
            r5us:r5us,
            r5dv:r5dv,
            r5qa:r5qa,
            r6st:r6st,
            r6us:r6us,
            r6dv:r6dv,
            r6qa:r6qa
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
    var log5 = $("#log-output5").html();
    var log6 = $("#log-output6").html();

    $.ajax({
        type: "POST",
        url: "/log.php",
        dataType: "json",
        cache: false,
        data: {
            log1:log1,
            log2:log2,
            log3:log3,
            log4:log4,
            log5:log5,
            log6:log6
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

function handleStatusChanges(rownum, rowstatus) {
    if (rowstatus == "UNAVAILABLE") {
        handleStatusRedColorIndication(rownum);
    }
    if (rowstatus == "AVAILABLE") {
        handleStatusGreenColorIndication(rownum);
        resetOutputGrid(rownum);
    }
}

function changeRowColor() {
    let r1status = $('#status-dropbox-dev').val().toUpperCase();
    handleStatusChanges(1, r1status);

    let r2status = $('#status-dropbox-test').val().toUpperCase();
    handleStatusChanges(2, r2status);

    let r3status = $('#status-dropbox-test1').val().toUpperCase();
    handleStatusChanges(3, r3status);

    let r4status = $('#status-dropbox-test2').val().toUpperCase();
    handleStatusChanges(4, r4status);

    let r5status = $('#status-dropbox-test3').val().toUpperCase();
    handleStatusChanges(5, r5status);

    let r6status = $('#status-dropbox-test4').val().toUpperCase();
    handleStatusChanges(6, r6status);
}

function clearInputs() {
    $('#status-dropbox-dev').prop('selectedIndex', 0);
    $('#us-number-textbox-dev').val('');
    $('#dev-dropbox-dev').prop('selectedIndex', 0);
    $('#qa-dropbox-dev').prop('selectedIndex', 0);

    $('#status-dropbox-test').prop('selectedIndex', 0);
    $('#us-number-textbox-test').val('');
    $('#dev-dropbox-test').prop('selectedIndex', 0);
    $('#qa-dropbox-test').prop('selectedIndex', 0);

    $('#status-dropbox-test1').prop('selectedIndex', 0);
    $('#us-number-textbox-test1').val('');
    $('#dev-dropbox-test1').prop('selectedIndex', 0);
    $('#qa-dropbox-test1').prop('selectedIndex', 0);

    $('#status-dropbox-test2').prop('selectedIndex', 0);
    $('#us-number-textbox-test2').val('');
    $('#dev-dropbox-test2').prop('selectedIndex', 0);
    $('#qa-dropbox-test2').prop('selectedIndex', 0);

    $('#status-dropbox-test3').prop('selectedIndex', 0);
    $('#us-number-textbox-test3').val('');
    $('#dev-dropbox-test3').prop('selectedIndex', 0);
    $('#qa-dropbox-test3').prop('selectedIndex', 0);

    $('#status-dropbox-test4').prop('selectedIndex', 0);
    $('#us-number-textbox-test4').val('');
    $('#dev-dropbox-test4').prop('selectedIndex', 0);
    $('#qa-dropbox-test4').prop('selectedIndex', 0);
}

function resetOutputGrid(rownum) {
    $(`#row${rownum}-userstory`).html(
        `<span id="r${rownum}us-f"></span>`
    );
    $(`#row${rownum}-dev`).html(
        `<span id="r${rownum}dv-f"></span>`
    );
    $(`#row${rownum}-qa`).html(
        `<span id="r${rownum}qa-f"></span>`
    );
}

function setStatusToAvailable(rownum) {
    $(`#row${rownum}-status`).html(
        `<span id="r${rownum}st-f">AVAILABLE</span>`
    );
}

function handleFreeupClick() {
    let row = 0;
    $('#r1-btn-available').on('click', function(e) {
        e.preventDefault();

        row = 1;
        resetOutputGrid(row);
        setStatusToAvailable(row)
        handleStatusGreenColorIndication(row);
        postToGrid();
        readLog();
        postToLog();
    });

    $('#r2-btn-available').on('click', function(e) {
        e.preventDefault();

        row = 2;
        setStatusToAvailable(row)
        handleStatusGreenColorIndication(row);
        resetOutputGrid(row);
        postToGrid();
        readLog();
        postToLog();
    });

    $('#r3-btn-available').on('click', function(e) {
        e.preventDefault();

        row = 3;
        setStatusToAvailable(row)
        handleStatusGreenColorIndication(row);
        resetOutputGrid(row);
        postToGrid();
        readLog();
        postToLog();
    });

    $('#r4-btn-available').on('click', function(e) {
        e.preventDefault();

        row = 4;
        setStatusToAvailable(row)
        handleStatusGreenColorIndication(row);
        resetOutputGrid(row);
        postToGrid();
        readLog();
        postToLog();
    });

    $('#r5-btn-available').on('click', function(e) {
        e.preventDefault();

        row = 5;
        setStatusToAvailable(row)
        handleStatusGreenColorIndication(row);
        resetOutputGrid(row);
        postToGrid();
        readLog();
        postToLog();
    });

    $('#r6-btn-available').on('click', function(e) {
        e.preventDefault();

        row = 6;
        setStatusToAvailable(row)
        handleStatusGreenColorIndication(row);
        resetOutputGrid(row);
        postToGrid();
        readLog();
        postToLog();
    });
}

function loadData() {
    $('#r1st-f').html(GRID.r1st);
    $('#r1us-f').html(GRID.r1us);
    $('#r1dv-f').html(GRID.r1dv);
    $('#r1qa-f').html(GRID.r1qa);

    $('#r2st-f').html(GRID.r2st);
    $('#r2us-f').html(GRID.r2us);
    $('#r2dv-f').html(GRID.r2dv);
    $('#r2qa-f').html(GRID.r2qa);

    $('#r3st-f').html(GRID.r3st);
    $('#r3us-f').html(GRID.r3us);
    $('#r3dv-f').html(GRID.r3dv);
    $('#r3qa-f').html(GRID.r3qa);

    $('#r4st-f').html(GRID.r4st);
    $('#r4us-f').html(GRID.r4us);
    $('#r4dv-f').html(GRID.r4dv);
    $('#r4qa-f').html(GRID.r4qa);

    $('#r5st-f').html(GRID.r5st);
    $('#r5us-f').html(GRID.r5us);
    $('#r5dv-f').html(GRID.r5dv);
    $('#r5qa-f').html(GRID.r5qa);

    $('#r6st-f').html(GRID.r6st);
    $('#r6us-f').html(GRID.r6us);
    $('#r6dv-f').html(GRID.r6dv);
    $('#r6qa-f').html(GRID.r6qa);

    highlightRow();
}

function highlightRow() {
    let r1st = $('#r1st-f').html();
    handleStatusChanges(1, r1st);
    let r2st = $('#r2st-f').html();
    handleStatusChanges(2, r2st);
    let r3st = $('#r3st-f').html();
    handleStatusChanges(3, r3st);
    let r41st = $('#r4st-f').html();
    handleStatusChanges(4, r41st);
    let r5st = $('#r5st-f').html();
    handleStatusChanges(5, r5st);
    let r6st = $('#r6st-f').html();
    handleStatusChanges(6, r6st);
}

function refreshData() {
    location.reload(true);
    writeData();
}

function handleRefreshClick() {
    $('#btn-refresh').on('click', function(e) {
        refreshData();
    });
}

function writeData() {
    let r;
    var url = "BOMB.json";
    $.getJSON(url, function(json) {
        r = 1;
        $(`#r1st-f`).html(json[0].r1status);
        $(`#r1us-f`).html(json[0].r1userstory);
        $(`#r1dv-f`).html(json[0].r1dev);
        $(`#r1qa-f`).html(json[0].r1qa);
        let r1st = $(`#r1st-f`).html();
        handleStatusChanges(r, r1st);
        r = 2;
        $(`#r2st-f`).html(json[0].r2status);
        $(`#r2us-f`).html(json[0].r2userstory);
        $(`#r2dv-f`).html(json[0].r2dev);
        $(`#r2qa-f`).html(json[0].r2qa);
        let r2st = $(`#r2st-f`).html();
        handleStatusChanges(r, r2st);
        r = 3;
        $(`#r3st-f`).html(json[0].r3status);
        $(`#r3us-f`).html(json[0].r3userstory);
        $(`#r3dv-f`).html(json[0].r3dev);
        $(`#r3qa-f`).html(json[0].r3qa);
        let r3st = $(`#r3st-f`).html();
        handleStatusChanges(r, r3st);
        r = 4;
        $(`#r4st-f`).html(json[0].r4status);
        $(`#r4us-f`).html(json[0].r4userstory);
        $(`#r4dv-f`).html(json[0].r4dev);
        $(`#r4qa-f`).html(json[0].r4qa);
        let r4st = $(`#r4st-f`).html();
        handleStatusChanges(r, r4st);
        r = 5;
        $(`#r5st-f`).html(json[0].r5status);
        $(`#r5us-f`).html(json[0].r5userstory);
        $(`#r5dv-f`).html(json[0].r5dev);
        $(`#r5qa-f`).html(json[0].r5qa);
        let r5st = $(`#r5st-f`).html();
        handleStatusChanges(r, r5st);
        r = 6;
        $(`#r6st-f`).html(json[0].r6status);
        $(`#r6us-f`).html(json[0].r6userstory);
        $(`#r6dv-f`).html(json[0].r6dev);
        $(`#r6qa-f`).html(json[0].r6qa);
        let r6st = $(`#r6st-f`).html();
        handleStatusChanges(r, r6st);
    });
}

function startApp() {
    writeData();
    handleUpdateClick();
    postToGrid();
    handleFreeupClick();
    handleRefreshClick();
    readLog();
    postToLog();
    compareLog();
}

$(startApp);
