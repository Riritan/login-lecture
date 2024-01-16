"use static"

const bid =document.querySelector("#bid"), //id text ,질의선택자 =ejs파일 #태그에 아이디로 부여되어있는 아이디를 가져와달라 
    bname = document.querySelector("#bname"),
    author =document.querySelector("#author"),
    publ = document.querySelector("#publ"),
    ISBN =document.querySelector("#ISBN"),
    bookbtn =document.querySelector("#button");
    


bookbtn.addEventListener("click",book);

function book() {
    if(!bid.value) return alert("아이디를 입력해주십시오");
    if(!bname.value) return alert("책제목을 입력해주십시오");
    if(!author.value) return alert("작가이름을 입력해주십시오");
    if(!publ.value) return alert("출판사를 입력해 주십시오");
    if(!ISBN.value) return alert("ISBN을 입력해 주십시오");
   
    
    
    
    
    const req = {
        bid : bid.value, 
        bname:bname.value,
        author: author.value,
        publ:publ.value,
        ISBN:ISBN.value,

    };
    

    fetch("/book",{
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
        location.href ="/chb";
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