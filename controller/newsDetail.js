getMunberCart();
let img = document.querySelector(".container .container_news .container_news_img img");
let title = document.querySelector(".container .container_news .container_new_content .title_new_content p")
let content = document.querySelector(".container .container_news .container_new_content .new_content p")
let params = new URLSearchParams(location.search);
if(!params.get("id")){
    window.location.href="/view/home.html"
}
getdata()
function getdata(){
    let url=`http://localhost:3000/news/${params.get("id")}`
    fetch(url).then((res)=>res.json()).then((res)=>loadData(res))
}
 function loadData(data){
    img.setAttribute("src",data.img);
    title.innerHTML=data.title;
    content.innerHTML=data.content;
 }
 function getMunberCart(){
    fetch("http://localhost:3000/carts").then(function (Response){
       return Response.json();
    })
    .then(function(Response){
        document.querySelector("header .content .funtion .funtion-list .cart span.cart-number").innerHTML=Response.length
    })
  
  
  }