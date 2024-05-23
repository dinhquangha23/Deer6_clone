let inputUserName = document.querySelector(".container .container-content input[id=username]")
let inputFullName = document.querySelector(".container .container-content input[id=fullname]")
let inputAddress = document.querySelector(".container .container-content input[id=address]")
let inputPhoneNumber = document.querySelector(".container .container-content input[id=phonenumber]")
let btnUpdate = document.querySelector(".container .container-content button")
localStorage.setItem("id","3")

function checkdata(){
    if(inputFullName.value && inputFullName.value && inputAddress.value && inputPhoneNumber.value){
        btnUpdate.classList.add("enable")
    }
    else{
        
        btnUpdate.onclick = ()=>{
            let url = `http://localhost:3000/users/${localStorage.getItem("id")}`
            let data_send ={
                id : localStorage.getItem("id"),
                username : inputUserName.value,
                fullname : inputFullName.value,
                address : inputAddress.value,
                phonenumber : inputPhoneNumber.value
            }
            let option={
                method: "PUT",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(data_send)
            }
            
            fetch(url,option).then((res)=>res.json()).then((res)=>console.log(res))

        }
    }
}

getdata(loaddata)
function getdata(callback){
    let url = "http://localhost:3000/users"
    fetch(url+"/"+localStorage.getItem("id")).then(res=>res.json())
    .then(res=>callback(res))
}
function loaddata(data){
    inputUserName.value=data.username
    inputFullName.value=data.fullname
    inputAddress.value=data.address
    inputPhoneNumber.value=data.phonenumber
    checkdata()
}


window.addEventListener('beforeunload', function(event) {
    this.localStorage.clear()
});