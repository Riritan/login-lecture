"use static"

const id =document.querySelector("#id"), 
    psword =document.querySelector("#psword"),//id text ,질의선택자 =ejs파일 #태그에 아이디로 부여되어있는 아이디를 가져와달라 
    name = document.querySelector("#name"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerbtn =document.querySelector("#button");
    


registerbtn.addEventListener("click",register);

function register() {
    if(!id.value) return alert("아이디를 입력해주십시오");
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다");

    
    
    
    
    const req = {
        id : id.value, 
        name:name.value,
        psword: psword.value,
        tel:tel.value,
        birthday:birthday.value,

    };
    

    fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",    

        },
        body: JSON.stringify(req),
    })
    .then((res)=> {
        res.json()
    })
    .then((res)=>{
        location.href ="/login";
        // if(res.success){
        //     location.href ="/login";
        // } else{
        //   alert(res.msg);  
        // }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");

    });
 }