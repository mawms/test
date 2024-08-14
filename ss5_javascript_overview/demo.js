function clickMe(){
    //alert("Bạn đã like bài viết")
    //Lệnh bên dới dùng để thay đồi màu nền cho thẻ
    document.getElementById("like").style.backgroundColor = "blue";
    //Lệnh bên dới dùng để thay đồi màu chữ cho thẻ
    document.getElementById("like").style.color = "white";
    //Lệnh bên dới dùng để thay đồi nội dung của thẻ
    document.getElementById("like").innerText= "disLike";

}
