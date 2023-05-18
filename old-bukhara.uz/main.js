let i1 = 1;
let i2 = 5;
let i3 = 20;
function oldinga1() {
    i1++;
    if (i1 == 5) {
        i1 = 1;
    }
    document.getElementById("img1").src = `${i1}.jpg`;
}

function orqaga1() {
    if (i1 == 1) {
        i1 = 4;
        document.getElementById("img1").src = `${i1}.jpg`;
        return true;
    }
    else {
        i1--;
        document.getElementById("img1").src = `${i1}.jpg`;
    }

}




function oldinga2() {
    i2++;
    if (i2 == 20) {
        i2 = 5;
    }
    document.getElementById("img2").src = `${i2}.jpg`;
}

function orqaga2() {
    if (i2 == 5) {
        i2 = 19;
        document.getElementById("img2").src = `${i2}.jpg`;
        return true;
    }
    else {
        i2--;
        document.getElementById("img2").src = `${i2}.jpg`;
    }

}



function oldinga3() {
    i3++;
    if (i3 == 36) {
        i3 = 20;
    }
    document.getElementById("img3").src = `${i3}.jpg`;
}

function orqaga3() {
    if (i3 == 20) {
        i3 = 36;
        document.getElementById("img3").src = `${i3}.jpg`;
        return true;
    }
    else {
        i3--;
        document.getElementById("img3").src = `${i3}.jpg`;
    }

}







