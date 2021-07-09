function exchange(){
    let amountFrom = parseFloat(document.getElementById("amountfrom").value);
    let amountTo = parseFloat(document.getElementById("amountto").value);

    if (document.getElementById("curFrom").value == "usd") {
        if (document.getElementById("curTo").value == "usd") {
            amountTo = amountFrom;
        } else {
            amountTo = amountFrom * 23000;
        }
    } else {
        if (document.getElementById("curTo").value == "vnd") {
            amountTo = amountFrom;
        } else {
            amountTo = amountFrom/23000;
        }
    }
    document.getElementById("amountto").value = amountTo;
}


function exchange1(){
    let amountFrom = parseFloat(document.getElementById("amountfrom").value);
    // let amountTo = parseFloat(document.getElementById("amountto").value);

    if (document.getElementById("curFrom").value == "usd") {
        if (document.getElementById("curTo").value == "usd") {
            amountTo = amountFrom;
        } else {
            amountTo = amountFrom * 23000;
        }
    } else {
        if (document.getElementById("curTo").value == "vnd") {
            amountTo = amountFrom;
        } else {
            amountTo = amountFrom/23000;
        }
    }
    document.getElementById("amountto").value = amountTo;
}


function exchange2(){
    // let amountFrom = parseFloat(document.getElementById("amountfrom").value);
    let amountTo = parseFloat(document.getElementById("amountto").value);

    if (document.getElementById("curTo").value == "usd") {
        if (document.getElementById("curFrom").value == "usd") {
            amountFrom = amountTo;
        } else {
            amountFrom = amountTo * 23000;
        }
    } else {
        if (document.getElementById("curTo").value == "vnd") {
            amountFrom = amountTo;
        } else {
            amountFrom = amountTo / 23000;
        }
    }
    document.getElementById("amountfrom").value = amountFrom;
}

