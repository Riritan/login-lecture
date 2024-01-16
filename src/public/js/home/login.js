"use static"

const id =document.querySelector("#id"), 
    psword =document.querySelector("#psword")//id text ,질의선택자 =ejs파일 #태그에 아이디로 부여되어있는 아이디를 가져와달라 
    loginbtn =document.querySelector("#button");

  


loginbtn.addEventListener("click",login);
function login() {0
    const req = {
        id : id.value, 
        psword: psword.value,
    };
    
    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",    

        },
        body: JSON.stringify(req),
    })
    .then((res)=> res.json())
    .then((res)=>{
        if(res.success){
            location.href ="/";
        } else{
          alert(res.msg);  
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");

    });
}