

let userName;

function userNameChecking (userName){
    if (userName){
        console.log(`สวัสดี, ${userName} 👋`);
    }
    else {
    console.log("โปรดระบุชื่อผู้ใช้งาน ❌");    }
}

userName="";

userNameChecking(userName);