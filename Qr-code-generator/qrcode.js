const wrapper = document.querySelector(".wrapper");
const generatorbtn = wrapper.querySelector(".button");
const qrInput = wrapper.querySelector(".input");
const qrImg = wrapper.querySelector(".qr-code img");

generatorbtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    generatorbtn.innerText = "Generating QR Code..."
    //preventing showing image if value is null
    if(!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
   
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generatorbtn.innerText = "Generate QR Code";
    })
})

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})
