function exchange(){
    if (document.getElementById("curFrom").value == "usd") {
        document.getElementById("curFrom").value == "vnd";
    } else { document.getElementById("curFrom").value == "usd";
    }
}

// Hàm này cho phép hiển thị kết quả ở ô bên dưới cùng lúc nhập dữ liệu vào ô bên trên
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

// Hàm này cho phép hiển thị kết quả ở ô bên trên cùng lúc nhập dữ liệu vào ô bên dưới
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
// Dùng hàm change1() để loại bỏ trường hợp USD -> USD hoặc VND -> VND
function change1(){
    if (document.getElementById("curFrom").value == "usd") {
        document.getElementById("curTo").value = "vnd";
    }   else {
        document.getElementById("curTo").value = "usd";
    }
}