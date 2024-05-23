const tr =document.querySelectorAll("tr");
let quantity= tr.length;
console.log(quantity)

var inputUserName = document.querySelector("#inputUserName");
var inputPassword = document.querySelector("#inputPassword");
var inputEmail = document.querySelector("#inputEmail");
var inputPhone = document.querySelector("#inputPhone");
var inputAddress = document.querySelector("#inputAddress");

for(let i=1;i<quantity;i++){
   tr[i].onclick=()=>{
       const td=tr[i].querySelectorAll("td");
       inputUserName.value=td[0].innerHTML;
       inputPassword.value=td[1].innerHTML;
       inputEmail.value=td[2].innerHTML;
       inputPhone.value=td[3].innerHTML;
       inputAddress.value=td[4].innerHTML;
      
   }
}
