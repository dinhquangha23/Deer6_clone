let thumbnail_img=document.querySelectorAll(".container .container_wrap .main-image .thumbnail-left .list-thumbnail-left .list-thumbnail-left-item")
let image_viewport=document.querySelectorAll(".container .container_wrap .main-image .image-center .image-viewport-item")



const queryString = window.location.search;
const params = new URLSearchParams(queryString);

getdata();

function getdata(){
    let url = `http://localhost:3000/product/${params.get("id")}`
    fetch(url).then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        let title = document.querySelector(".container .container_wrap .info-detail .info-detail-title h1");
        let price = document.querySelector(".container .container_wrap .info-detail .info-detail-title span")
        let thumbnail =document.querySelectorAll(".container .container_wrap .main-image .thumbnail-left .list-thumbnail-left .list-thumbnail-left-item img")
        let image = document.querySelectorAll(".container .container_wrap .main-image .image-center .image-viewport-item img")
        title.innerHTML=res.Title;
        price.innerHTML=fomartMoney(res.price);
        thumbnail[0].src=res.firstimage;
        thumbnail[1].src=res.secondimage;
        image[0].src=res.firstimage;
        image[1].src=res.secondimage;
        

    })
   
    

}

function getMunberCart(){
    fetch("http://localhost:3000/carts").then(function (Response){
       return Response.json();
    })
    .then(function(Response){
        document.querySelector("header .content .funtion .funtion-list .cart span.cart-number").innerHTML=Response.length
    })


}
getMunberCart()
function fomartMoney(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function MoneytoInt(x){
    return parseInt(x.replaceAll(".",""))
}

// click ảnh
let numberImage= thumbnail_img.length;
for(let i=0;i<numberImage;i++){
    thumbnail_img[i].onclick=()=>{
        thumbnail_img.forEach((thumbnail)=>{
                thumbnail.classList.remove("active1")
        })
        image_viewport.forEach(image => {
            image.classList.remove("active");
        });
        image_viewport[i].classList.add("active");
        thumbnail_img[i].classList.add("active1");


    }
}
// 
let minus = document.querySelector(".info-detail-function .input-quantity input.minus");
let plus = document.querySelector(".info-detail-function .input-quantity input.plus");
let inputquatity= document.querySelector(".info-detail-function .input-quantity .inputnumber");
let btnBuy = document.querySelector(".buy .buy-now");
let btnColors = document.querySelectorAll(".option-color .option-color-item button")
let btnSizes = document.querySelectorAll(".option-size .option-size-item button")
minus.onclick=()=>{
    if(inputquatity.value>1)
    inputquatity.value--;
}

plus.onclick=()=>{
    if(inputquatity.value < parseInt(inputquatity.getAttribute("max")))
    inputquatity.value++;
}

btnColors[0].onclick=()=>{
    btnColors[0].classList.remove("active");
    btnColors[1].classList.remove("active");
    btnColors[0].classList.add("active");
}
btnColors[1].onclick=()=>{
    btnColors[0].classList.remove("active");
    btnColors[1].classList.remove("active");
    btnColors[1].classList.add("active");
}
    
btnSizes[0].onclick=()=>{
    btnSizes[0].classList.remove("active");
    btnSizes[1].classList.remove("active");
    btnSizes[2].classList.remove("active");
    btnSizes[0].classList.add("active");
}
btnSizes[1].onclick=()=>{
    btnSizes[0].classList.remove("active");
    btnSizes[1].classList.remove("active");
    btnSizes[2].classList.remove("active");
    btnSizes[1].classList.add("active");
}
btnSizes[2].onclick=()=>{
    btnSizes[0].classList.remove("active");
    btnSizes[1].classList.remove("active");
    btnSizes[2].classList.remove("active");
    btnSizes[2].classList.add("active");
}



btnBuy.onclick=()=>{
    let data;
    let title = document.querySelector(".container .container_wrap .info-detail .info-detail-title h1").innerHTML;
    let price = document.querySelector(".container .container_wrap .info-detail .info-detail-title span").innerHTML
    let thumbnail =document.querySelector(".container .container_wrap .main-image .thumbnail-left .list-thumbnail-left .list-thumbnail-left-item img").getAttribute("src")
    let color = document.querySelector(".option-color .option-color-item button.active")
    let size = document.querySelector(".option-size .option-size-item button.active")
    let quantity=inputquatity.value
    
    if(color==null ||size==null){
        alert("Bạn hãy chọn đầy đủ thông tin");
    }else{
        data={
            title : title,
            color : color.getAttribute("data-color"),
            size : size.innerHTML,
            quantity,
            price: MoneytoInt(price),
            thumbnail:thumbnail
            }
        let option={
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(data)
        }
            let url ="http://localhost:3000/carts"
            fetch(url,option).then((Response)=>{Response.json()}).then((Response)=>{ window.location.assign("pay.html");})
    


    }
    
}
 let btnAddToCart = document.querySelector(".container .container_wrap .info-detail .info-detail-function .add-cart .btn-add-cart")
 btnAddToCart.onclick=function(){
    let data;
    let title = document.querySelector(".container .container_wrap .info-detail .info-detail-title h1").innerHTML;
    let price = document.querySelector(".container .container_wrap .info-detail .info-detail-title span").innerHTML
    let thumbnail =document.querySelector(".container .container_wrap .main-image .thumbnail-left .list-thumbnail-left .list-thumbnail-left-item img").getAttribute("src")
    let color = document.querySelector(".option-color .option-color-item button.active")
    let size = document.querySelector(".option-size .option-size-item button.active")
    let quantity=inputquatity.value
    
    if(color==null ||size==null){
        alert("Bạn hãy chọn đầy đủ thông tin");
    }else{
        data={
            title : title,
            color : color.getAttribute("data-color"),
            size : size.innerHTML,
            quantity,
            price: MoneytoInt(price),
            thumbnail:thumbnail
            }
        let option={
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(data)
        }
            let url ="http://localhost:3000/carts"
            fetch(url,option).then((Response)=>{Response.json()}).then((Response)=>{console.log(Response);})
    


    }


 }








tippy('.container .container_wrap .info-detail .info-detail-option .option-color .option-color-item button.while', {
    content: 'Trắng',
    
    placement: 'top'
  });

  tippy('.container .container_wrap .info-detail .info-detail-option .option-color .option-color-item button.black', {
    content: 'Đen',
    
    placement: 'top'
  });
