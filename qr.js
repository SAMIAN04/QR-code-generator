const btn = document.getElementById(`btn`);
const qr = document.getElementById(`qr`);
const input = document.getElementById(`input`).value;
const qrImg = document.getElementById(`qrimg`);
const hy = document.getElementById(`hy`)
btn.addEventListener(`click`, generate);

function generate() {
    if (input != ``) {
       hy.innerHTML =  ''
      qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
      console.log(qrImg.src);
    }
    else{
        hy.innerHTML = `enter some text` 
        qrImg.src = ``
    }
   
}
