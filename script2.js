const Image_Input = document.querySelector("#UploadImage");
let UploadImage = "";
Image_Input.addEventListener("change" ,function(){
    const reader = new FileReader();
    reader.addEventListener("load" , () =>{
    UploadImage = reader.result;
    })
    reader.readAsDataURL(this.files[0]);
});
const postBtn = document.getElementById("Post");
postBtn.addEventListener("click", () => {
    if(!UploadImage){
        alert("Please Select an Image");
        return;
    }
        const uploadfile = document.createElement("div");
    uploadfile.classList.add("uploadDoc");
    uploadfile.style.backgroundImage = `url(${UploadImage})`;
    document.querySelector(".createpost").appendChild(uploadfile);

    const innerDiv = document.createElement("div"); 
    innerDiv.classList.add("proImage"); 
    uploadfile.appendChild(innerDiv); 
    
});



