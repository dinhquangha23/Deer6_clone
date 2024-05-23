let textFeedBack = document.querySelector(".container .content .feed_back .feed_back_content textarea")
let btnFeedBack = document.querySelector(".container .content .feed_back button")
let url = "http://localhost:3000/feedback"
getMunberCart()
function getMunberCart(){
    fetch("http://localhost:3000/carts").then(function (Response){
       return Response.json();
    })
    .then(function(Response){
        document.querySelector("header .content .funtion .funtion-list .cart span.cart-number").innerHTML=Response.length
    })
  
  
  }
btnFeedBack.onclick=()=>{
  let content = textFeedBack.value
  let option={
    method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({content})
  }
  fetch(url,option).then((Response)=>{Response.json()}).then((Response)=>{alert("Cảm ơn bạn đã gửi phản hồi, chúng tôi sẽ sớm khắc phục")})
}

