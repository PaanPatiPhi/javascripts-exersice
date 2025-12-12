let correctEmail = "johnza007@gmail.com";
let correctPassword = "johnlovecoding555";

let userEmail;
let userPassword;

function checkEmailAndPass (userEmail,userPassword){
    if ((userEmail === correctEmail) && (userPassword === correctPassword)){
        console.log("ยินดีต้อนรับเข้าสู่ระบบ ✨");
    }
    else {
        console.log("กรุณาตรวจสอบ Email หรือ Password ใหม่อีกครั้ง ❌");
    }
}

userEmail = "johnza007@gmail.com";
userPassword = "johnlovecoding555";

checkEmailAndPass(userEmail,userPassword);