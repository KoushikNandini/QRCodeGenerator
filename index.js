const qrEl = document.getElementById("qrForm");
const qrimageEl = document.getElementById("qr_image");
const qrcontainerEl = document.getElementById("QR_container");
const userInputEl = document.getElementById("user_input");
const buttonEl = document.getElementById("primary_btn")
const rendorQR = (url) => {
    if (!url) return;
    buttonEl.innerText = "Generating QR Code....";
    qrimageEl.src = url;
    const onloadimage = () => {
        const interval = setInterval(() => {
            
        }, 500)
        qrcontainerEl.classList.add("show");
        clearInterval(interval)
        buttonEl.innerText = "Generated QR Code";
    }
    qrimageEl.addEventListener("load", onloadimage)
};
qrEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formdata = new FormData(qrEl);
    const text = formdata.get("qrtext");
    const qrurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

    rendorQR(qrurl);
})

userInputEl.addEventListener("keyup", () => {
    if (!userInputEl.value.trim())
    {
        qrcontainerEl.classList.remove("show");
    }
})


