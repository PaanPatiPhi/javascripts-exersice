let temp = 31;

function checkTemp (temp){
    if (temp > 30){
        console.log("ร้อนชิบหาย ! 🤬")
    }
    else if (temp >= 20 && temp <= 30){
        console.log("อุ่นๆ กำลังดีเลยวันนี้ 🥵")
    }
    else {
        console.log("วันนี้อากาศหนาวแหะ 🥶")
    }
}

checkTemp(temp);