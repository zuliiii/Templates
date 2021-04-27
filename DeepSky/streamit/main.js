var span = document.getElementsByClassName('span1');
var div = document.getElementsByClassName('div12');
var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-713px";
        }
        if (l == 2) {
            i.style.left = "-1435px";
        }
        if (l == 4) {
            i.style.left = "-2150px";
        }
        if (l > 4) {
            l = 4;
        }
    }
}
span[0].onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-713px";
        }
        if (l == 2) {
            i.style.left = "-1435px";
        }
        if (l == 4) {
            i.style.left = "-2150px";
        }
        if (l < 0) {
            l = 0;
        }
    }
}

var div1 = document.getElementsByClassName('div13');
var l = 0;
span[3].onclick = () => {
    l++;
    for (var i of div1) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-713px";
        }
        if (l == 2) {
            i.style.left = "-1435px";
        }
        if (l == 4) {
            i.style.left = "-2150px";
        }
        if (l > 4) {
            l = 4;
        }
    }
}
span[2].onclick = () => {
    l--;
    for (var i of div1) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-713px";
        }
        if (l == 2) {
            i.style.left = "-1435px";
        }
        if (l == 4) {
            i.style.left = "-2150px";
        }
        if (l < 0) {
            l = 0;
        }
    }
}