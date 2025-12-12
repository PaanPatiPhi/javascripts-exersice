let userName;

function userNameChecking (userName){
    if (userName !==0){
        console.log("ยินดีต้อนรับเข้าสู่ระบบ")
    }
    else {
        console.log("กรุณาตรวจสอบ Email หรือ password ใหม่อีกครั้ง")
    }
}

userName = "Hello"

userNameChecking();