function bai1() {
    for (let i = 1; i <= 100; i++) {
        if (i == 99) alert("Da hoan thanh");
    }
}

// bai1();

function bai2() {
    var template = parseFloat(prompt("Nhap nhiet do phong hien tai"));
    if (template < 20) {
        alert("Hay tang nhiet do");
    } else if (template > 100) {
        alert("Hay giam nhiet do");
    } else {
        alert("nhiet do phong trong khoang an toan (20->100) la " + template)
    }

}

// bai2();

function bai3() {
    var f0 = 0;
    var f1 = 1;
    var fn = 1;

    if (f0 == 0) document.write(0 + "<br>");
    if (f1 == 1) document.write(1 + "<br>");
    if (fn == 1) document.write(1 + "<br>");
    for (let i = 0; i < 17; i++) {
        f0 = f1;
        f1 = fn;
        fn = f0 + f1;
        document.write(fn + '<br>');
    }
}

// bai3();

function bai4() {
    var f0 = 0;
    var f1 = 1;
    var fn = 1;
    for (let i = 0; i < 100; i++) {
        f0 = f1;
        f1 = fn;
        fn = f0 + f1;
        if (fn % 5 == 0) {
            alert("So dau tien trong day fibonacci chia het 5 la " + fn);
            break;
        }
    }
}

// bai4();
function bai5() {
    var f0 = 0;
    var f1 = 1;
    var fn = 1;
    var sum = 0;
    if (f0 == 0) sum += f0;
    if (f1 == 1) sum += f1;
    if (fn == 1) sum += fn;

    for (let i = 0; i < 17; i++) {
        f0 = f1;
        f1 = fn;
        fn = f0 + f1;
        sum += fn;
    }
    document.write(sum + '<br>');

}

// bai5();
function bai6() {
    var n = 1000;
    var count = 30;
    var sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 7 == 0 && count >= 0) {
            sum += i;
            count--;
        }
    }
    alert(sum)
}

// bai6();
function bai7() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            document.write("Fizz");
        } else if (i % 5 == 0) {
            document.write("Buzz");
        } else {
            document.write(i);
        }
    }
}

// bai7();
function bai8() {
    alert("Hay nhap vao khoang muon doan");
    var min = parseInt(prompt("Khoang bat dau tu"));
    var max = parseInt(prompt("Khoang ket thuc tai"));

    var number = parseInt(prompt("Nhap so ban chon trong khoang " + min + " den " + max + " la"));

    while (number < min || number > max) {
        number = parseInt(prompt("Hay nhap lai so ban chon trong khoang " + min + " den " + max + " la"));
    }

    var random = Math.floor(Math.random() * (max - min) + min);
    console.log(random);
    for (let i = 0; i < 3; i++) {
        if (number == random) {
            alert("Chuc mung ban da du doan chinh xac");
            break;
        } else {
            number = parseInt(prompt("Ban da du doan khong dung .Hay chon lai trong khoang " + min + " den " + max + " la"));
        }
    }
}


// bai8();