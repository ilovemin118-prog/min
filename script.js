let Shownum = document.getElementById('Show-num');
let val1 = "";
let val2 = "";
let po = "";

function shownum(num) {
    if (num === "C") {
        val1 = ""; val2 = ""; po = "";
        Shownum.innerText = "0";
        return;
    }

    if (num === 'X' || num === '-' || num === '+') {
        po = num === 'X' ? '*' : num;
        Shownum.innerText = po;  // ✅ แสดง operator บนหน้าจอ
        return;
    }

    if (num === "=") {
        let re;
        if (po === "*") re = Number(val1) * Number(val2);
        if (po === "-") re = Number(val1) - Number(val2);
        if (po === "+") re = Number(val1) + Number(val2);
        Shownum.innerText = re;
        val1 = String(re);  // ✅ เอาผลลัพธ์ไปต่อได้เลย
        val2 = "";
        po = "";
        return;
    }

    if (po === "") {
        val1 += num;
        Shownum.innerText = val1;
    } else {
        val2 += num;
        Shownum.innerText = val2;
    }
}

const imgbox = document.getElementById('img-box');
const add = document.getElementById('add');
add.addEventListener('click',function() {
    imgbox.classList.add('img-move')
})