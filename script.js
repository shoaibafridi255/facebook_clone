let number = document.getElementById("num");
let pass = document.getElementById("password");

let login = document.querySelector("#login");
login.addEventListener("click" , ()=> {
    if(number.value === "" && pass.value ===""){
        alert("Please fill Correctly")
        return
    }
    if(number.value === "03139293487" && pass.value ==="khan@123"){
        window.open("index.html","_parent");
    } else{
        alert("Number or Password are  incorrect\nPlease Try Again");
    }
});

    
