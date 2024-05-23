getMunberCart()
getdatabill()
getdatainfo()
getMunberCart()

let id_user

function getMunberCart(){
    fetch("http://localhost:3000/carts").then(function (Response){
       return Response.json();
    })
    .then(function(Response){
        document.querySelector("header .content .funtion .funtion-list .cart span.cart-number").innerHTML=Response.length
    })
  
  
  }
function fomartMoney(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function MoneytoInt(x){
    return parseInt(x.replaceAll(".",""))
}
function getdatabill(){
    let url = "http://localhost:3000/carts"
    fetch(url).then(
        (res)=>res.json()
    )
    .then(
        (res)=>renderdatabill(res)
    )
}
function renderdatabill(datas){
    let estimate_product = 0
    let table_total_money= document.querySelector(".container .content .bill .total_money_cart .table_total_money tbody");
    let estimate =table_total_money.querySelector(".estimate");
    console.log(table_total_money);
    console.log(estimate);
    datas.map(
        (data)=>{
            estimate_product+=(data.price*data.quantity)
            let tr = document.createElement("tr"); 
            tr.innerHTML =`
            <th><span class="titel">${data.title}</span> - <span class="size">${data.size}</span>  x <span class="Quantity">${data.quantity}</span></td>
            <td>${fomartMoney(parseInt(data.price)*data.quantity)} ₫</td>
            `
            table_total_money.insertBefore(tr,estimate);

        } 
    )
    estimate.querySelector("td span").innerHTML=fomartMoney(estimate_product)
    if(estimate_product!=0){
        let total = (estimate_product+30000);
        document.querySelector(".container .content .bill .total_money_cart .table_total_money tbody tr .total_money span").innerHTML=fomartMoney(total)
    }
}

function getdatainfo(){
    let url = "http://localhost:3000/users/1"
    fetch(url).then(
        (res)=>res.json()
    )
    .then(
        (res)=>renderdatainfo(res)
    )
}
function renderdatainfo(data){
    console.log(data)
    id_user=data.id;
    let inputName = document.querySelector(".container .content .bill .info_user_order .info-input input.name")
    let inputAddress = document.querySelector(".container .content .bill .info_user_order .info-input input.address")
    let inputPhoneNumber = document.querySelector(".container .content .bill .info_user_order .info-input input.phonenumber")
    inputName.value =data.username
    inputAddress.value=data.address
    inputPhoneNumber.value=data.phonenumber
}

// let btn_order = document.querySelector(".container .content .bill .total_money_cart .check_out button.btn_check_out")
// console.log(btn_order)

// btn_order.onclick = ()=>{
//     if(confirm("Bạn đã đặt hàng thành công, nhấn Ok để lại feedback")==true){
//         console.log("a")

//     }
// }