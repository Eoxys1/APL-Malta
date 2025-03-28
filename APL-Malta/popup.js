function login(){
document.getElementById("login-btn").addEventListener("click", () => {
    console.log("login sucess");
    
    email = getElementById("email");
    password = document.getElementById("password");

    console.log(email, password);
    
    if(email == "theofranck0@gmail.com" && password == "12205667TF!"){

    }else{
        alert("login failed")
    };

}); 
}