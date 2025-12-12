

let userName;

function userNameChecking (userName){
    if (userName){
        console.log("โปรดระบุชื่อผู้ใช้งาน ❌");
    }
    else {
    console.log(`สวัสดี, ${userName} 👋`);    }
}

userName= "";

userNameChecking(userName);