
getMunberCart()
getdata()

function getdata(){
    let url="http://localhost:3000/news";
    fetch(url).then((Response)=>Response.json())
    .then(Response=>{loadData(Response);})
  }


function loadData(rep){
    let new_container = document.querySelector(".container")
    let html ="";
    rep.map((data)=>{
        html+=`<div class="container_news">
        <ul class="list_news">
            <li class="list_news_item">
                <a href="/view/newsDetail.html?id=${data.id}">
                    <div class="news_item">
                        <div class="news_item_img"><img
                                src="${data.img}" alt="">
                        </div>
                        <div class="news_item_content">
                            <div class="new_title">
                                <h2>${data.title}</h2>
                            </div>
                            <div class="new_discription">
                                <p>${data.describe}</p>
                            </div>
                            <div class="new_content">
                               <p>${data.content}</p>
                            </div>
                        </div>
                    </div>
                </a>

            </li>



        </ul>
    </div>`
    })
    new_container.innerHTML=html;

}
function getMunberCart(){
    fetch("http://localhost:3000/carts").then(function (Response){
       return Response.json();
    })
    .then(function(Response){
        document.querySelector("header .content .funtion .funtion-list .cart span.cart-number").innerHTML=Response.length
    })
  
  
  }